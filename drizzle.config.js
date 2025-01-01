import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: 'postgresql://neondb_owner:1fC9vurjSoZa@ep-cold-hat-a180bgwx.ap-southeast-1.aws.neon.tech/aivg?sslmode=require'
  }
});
