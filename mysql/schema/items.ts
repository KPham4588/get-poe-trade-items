import { InferSelectModel, relations, sql } from 'drizzle-orm';

import {
  index,
  int,
  mysqlTable,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/mysql-core';
// include item quantity; think about way to identify unique stacks
// w, h, stashTabID, league - unique way to identify a stack
// when item gets removed from stash, it gets deleted from DB
export const items = mysqlTable(
  'items',
  {
    id: varchar('id', { length: 64 }).primaryKey(),

    name: text('name').notNull(),
    quantity: int('quantity').notNull(),
    league: text('league').notNull(),

    createdAt: timestamp('created_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp('updated_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
);

export type Item = InferSelectModel<typeof items>;