import { connect } from '@planetscale/database';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import * as items from './schema/items';
import * as pointer from './schema/pointer';

export const getDB = () => {
  const connection = connect({
    url: process.env.DATABASE_URL,
  });

  return drizzle(connection, {
    schema: {
      ...items,
      ...pointer
    },
  });
};