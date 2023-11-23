import { NextResponse } from "next/server";
import { getDB } from "../../../mysql";
import { getItemName } from "../../../lib/getItemName";
import { Item } from "../../../types/PoeGGG";
import { items } from "../../../mysql/schema/items";
import { pointer } from "../../../mysql/schema/pointer";
import { and, sql } from 'drizzle-orm';
import exp from "constants";
import { date } from "drizzle-orm/mysql-core";
import { start } from "repl";
import { sleep } from "radash";

export const GET = async () => {
  const startTime = Date.now();
  const fourMinsFiftySecs = 290000;
  const timeLimit = startTime + fourMinsFiftySecs;
  var timeOflastRequest = 0;
  var data;
  const temporaryPointer = '2143391979-2135730237-2066368695-2294261767-2226642058';
  const db = getDB();
  var currentPointer = '';

  console.log("Getting pointer from database.");
  var stashTabPointer = await db.select({
    pointerValue: pointer.pointerValue
  }).from(pointer);
  if (stashTabPointer.length == 0) {
    stashTabPointer[0] = { pointerValue: temporaryPointer };
  }
  currentPointer = stashTabPointer[0].pointerValue;
  
  while(Date.now() < timeLimit) {
    const res = await fetch(`${process.env.POE_API_URL}/public-stash-tabs?id=${currentPointer}}`, {
      headers: {
        authorization: `Bearer 3bd328f3082816026e52d71629a03810c99eb5db`,
        'User-Agent':
          'OAuth khoaspersonalclient/1.0.0 (contact: kaiserzaloog@gmail.com)',
      },
    });

    timeOflastRequest = Date.now();
    var halfSecondLater = timeOflastRequest + 500;
    console.log("The time of last request is: " + timeOflastRequest.toString());
    console.log("Half a second later is: " + halfSecondLater.toString());

    logRateLimitHeaders(res);

    data = await res.json();
    currentPointer = data.next_change_id;
    
    let stashes = data.stashes;

    var itemsToInsert = null;
    // extract data
    for (const stash of stashes)
    {
      var itemSet = stash.items;

      const itemsWithNames = itemSet.map(getItemName);
      if (itemsToInsert == null) {
        itemsToInsert = itemsWithNames
        .map((item: any) => ({
          id: item.id,
          name: item.name,
          quantity: item.stackSize ?? 1,
          league: item.league
        }));
      }
      else {
        itemsToInsert = itemsToInsert
        .concat(itemsWithNames
        .map((item: any) => ({
          id: item.id,
          name: item.name,
          quantity: item.stackSize ?? 1,
          league: item.league
        })));
      }
    }
    // insert data after for loop
    if (itemsToInsert != null && itemsToInsert.length > 0)
    {
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

    var timeOfProcessFinish = Date.now();
    if (timeOfProcessFinish < halfSecondLater)
    {
      var timeToSleep = halfSecondLater - timeOfProcessFinish;
      console.log("Finished faster than expected, sleeping for " + timeToSleep.toString());
      sleep(timeToSleep);
    }
    else {
      var timeExceeded = timeOfProcessFinish - halfSecondLater;
      console.log("Program took too long. Exceeded time by " + timeExceeded.toString());
    }
  }

  // save pointer to db (check to see if there's a pointer; if yes, replace)
  console.log("Saving newest pointer to database.");
  var pointerFromDb = await db.select({
    pointerValue: pointer.pointerValue
  }).from(pointer);
  if (pointerFromDb.length == 0) {
    await db.insert(pointer).values({ pointerValue: currentPointer });
  }
  else {
    await db.update(pointer)
      .set(({ pointerValue: currentPointer}));
  }

  return NextResponse.json(data);
};

export const logRateLimitHeaders = (res: Response) => {
  console.log('------------------------------');
  // @ts-ignore
  for (const [key, value] of res.headers.entries()) {
    if (key.includes('x-rate-limit')) {
      console.log(`${key}: ${value}`);
    }
  }
};
