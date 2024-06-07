To set up Drizzle ORM with Next.js 14 for a PostgreSQL database managed by Vercel, you can follow these steps based on best practices from the official Vercel and Drizzle documentation. This guide involves creating and configuring a Next.js project, setting up the database, and integrating Drizzle ORM.

##

1.  Create a Next.js App: Start by creating a new Next.js application using the create-next-app utility.

    ```bash
        npx create-next-app@latest .
    ```

2.  Install Necessary Packages: Install Drizzle ORM and the Vercel PostgreSQL client packages

    ```bash
        npm i @vercel/postgres
        npm i -g vercel@latest
        vercel
        vercel env pull .env
        
        npm install drizzle-orm --force
        npm install -D drizzle-kit
    ```

3.  Configure Environment Variables: Retrieve your Vercel PostgreSQL credentials and set them in your .env file.

    ```bash
        POSTGRES_URL="postgres://default:............................................sslmode=require"
    ```

4.  Set Up Drizzle Config: Create a drizzle.config.ts file at root directory to define the Drizzle configuration.

    ```bash
    import { defineConfig } from "drizzle-kit";
    export default defineConfig({
        schema: "./src/db/schema.ts",
        dialect: "postgresql",
        dbCredentials: {
        url: process.env.POSTGRES_URL!,
    },
    });
    ```

5.  Define Your Database Schema: Create a schema file (e.g., src/db/schema.ts) to define your database tables using Drizzle's syntax.

    ```bash
    import { sql } from "@vercel/postgres";
    import { pgTable, integer, varchar, boolean } from "drizzle-orm/pg-core";
    import { drizzle } from "drizzle-orm/vercel-postgres";

    export const db = drizzle(sql);

    export const UserTable = pgTable("todo11", {
        id: integer("id").primaryKey(),
        text: varchar("text").notNull(),
        completed: boolean("completed").default(false),
        email: varchar("email"),
    });
    ```

6.  Generate SQL and Run Migrations: Use Drizzle Kit to generate SQL migration files and apply them to your database.

    ```bash
        npx drizzle-kit generate
        npx drizzle-kit migrate
    ```

7.  Create Data Access Functions: In a new file (e.g., src/app/api/todo/route.ts), write functions to interact with the database using Drizzle.

    ```bash
        import { NextRequest, NextResponse } from "next/server";
        import { db } from "@/db/schema";
        import { UserTable } from "@/db/schema";
        import { eq } from "drizzle-orm";

        export async function GET(req: NextRequest) {
            try {
                const rows = await db.select().from(UserTable);
                return NextResponse.json(rows, { status: 200 });
            } catch (err) {
                return NextResponse.json(err, { status: 500 });
            }
        }
    ```
