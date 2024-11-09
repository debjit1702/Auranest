import { serial, text, integer, pgTable } from 'drizzle-orm/pg-core';

export const Users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  imageUrl: text('imageUrl').notNull(),
  credits: integer('credits').default(3),
});
