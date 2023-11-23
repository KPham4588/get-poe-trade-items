import { InferSelectModel, sql } from 'drizzle-orm';

import {
  mysqlTable,
  text,
  timestamp,
} from 'drizzle-orm/mysql-core';

export const pointer = mysqlTable(
  'pointer',
  {
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