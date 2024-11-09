import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://ai-room-design_owner:Nf5rTAXL6KEm@ep-sparkling-leaf-a5kmekp5.us-east-2.aws.neon.tech/ai-room-design?sslmode=require',
  },
});
