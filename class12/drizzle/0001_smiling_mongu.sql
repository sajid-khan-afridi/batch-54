ALTER TABLE "todo12" ADD COLUMN "email" text;--> statement-breakpoint
ALTER TABLE "todo12" ADD CONSTRAINT "todo12_email_unique" UNIQUE("email");