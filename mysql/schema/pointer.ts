import { InferSelectModel, sql } from 'drizzle-orm';

import {
  mysqlTable,
  text,
  timestamp,
  bigint
} from 'drizzle-orm/mysql-core';

export const pointer = mysqlTable(
  'pointer',
  {
    id: bigint('id', { mode: 'number', unsigned: true })
    .primaryKey(),
    pointerValue: text('pointer').notNull(),

    createdAt: timestamp('created_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp('updated_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
);

export type Pointer = InferSelectModel<typeof pointer>;