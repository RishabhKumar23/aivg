import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const User = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    email: varchar('email').notNull(),
    imageUrl: varchar('imageUrl'),
    subscription: boolean('subscription').default(false)

})