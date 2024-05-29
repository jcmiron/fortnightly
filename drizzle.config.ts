// drizzle.config.ts

import { Config, defineConfig } from 'drizzle-kit';

export default defineConfig({
	schema: './src/lib/db/schema.ts',
	out: './drizzle',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.POSTGRES_PRISMA_URL || ''
	},
	tablesFilter: ['fortnightly_*']
} satisfies Config);
