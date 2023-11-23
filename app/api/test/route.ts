import { NextResponse } from "next/server";
import { getDB } from "../../../mysql";
import { getItemName } from "../../../lib/getItemName";
import { Item, items } from "../../../mysql/schema/items";
import { pointer } from "../../../mysql/schema/pointer";
import { sql } from 'drizzle-orm';
import { sleep } from "radash";

export const dynamic = 'force-dynamic';

export const GET = async () => {
  const startTime = Date.now();
  const fourMinsFiftySecs = 290000;
  const timeLimit = startTime + fourMinsFiftySecs;
  const db = getDB();

  console.log("Getting pointer from database.");
  let currentPointer = (await db.select({
    pointerValue: pointer.pointerValue
  }).from(pointer))[0]?.pointerValue ?? process.env.POE_NINJA_POINTER;

  while (Date.now() < timeLimit) {
    const res = await fetch(`${process.env.POE_API_URL}/public-stash-tabs?id=${currentPointer}}`, {
      headers: {
        authorization: `Bearer ${process.env.PSAPI_ACCESS_TOKEN}`,
        'User-Agent':
          'OAuth khoaspersonalclient/1.0.0 (contact: kaiserzaloog@gmail.com)',
      },
    });

    const halfSecondLater = Date.now() + 500;

    logRateLimitHeaders(res);

    const data = await res.json();
    currentPointer = data.next_change_id;

    let stashes = data.stashes;

    const itemsToInsert: Item[] = [];

    for (const stash of stashes) {
      const itemsWithNames = stash.items.map(getItemName);

      itemsToInsert
        .push(...itemsWithNames
          .map((item: any) => ({
            id: item.id,
            name: item.name,
            quantity: item.stackSize ?? 1,
            league: item.league
          })));
    }
    
    if (itemsToInsert.length > 0) {
      await db
        .insert(items)
        .values(itemsToInsert)
        .onDuplicateKeyUpdate({
          set: {
            quantity: sql`VALUES(quantity)`,
            name: sql`VALUES(name)`,
            updatedAt: new Date(),
          },
        });
    }

    const timeOfProcessFinish = Date.now();
    if (timeOfProcessFinish < halfSecondLater) {
      const timeToSleep = halfSecondLater - timeOfProcessFinish;
      console.log(`Duration: ${timeToSleep} - faster than expected.`);
      sleep(timeToSleep);
    }
    else {
      const timeExceeded = timeOfProcessFinish - halfSecondLater;
      console.log(`Duration: ${timeExceeded} - slower than expected.`);
    }
  }

  // save pointer to db (check to see if there's a pointer; if yes, replace)
  console.log("Saving newest pointer to database.");
  await db.insert(pointer).values({ 
    id: 1,
    pointerValue: currentPointer 
  })
  .onDuplicateKeyUpdate({
    set: {
      pointerValue: sql`VALUES(pointerValue)`,
      updatedAt: new Date(),
    },
  });
  
  return NextResponse.json([]);
};

const logRateLimitHeaders = (res: Response) => {
  console.log('------------------------------');
  // @ts-ignore
  for (const [key, value] of res.headers.entries()) {
    if (key.includes('x-rate-limit')) {
      console.log(`${key}: ${value}`);
    }
  }
};
