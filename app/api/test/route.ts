import { NextResponse } from "next/server";

export const GET = async () => {
    const res = await fetch(`${process.env.POE_API_URL}/public-stash-tabs?id=2143391979-2135730237-2066368695-2294261767-2226642058`, {
      headers: {
        authorization: `Bearer f7feeef3d0603301d49d1a394e1ea72686309df4`,
        'User-Agent':
          'OAuth wealthyexile/1.0.0 (contact: support@wealthyexile.com)',
      },
    });
  
    logRateLimitHeaders(res);
  
    const data = await res.json();
  
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