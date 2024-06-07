import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { db, ToTable } from "@/db/schema";
import { eq } from "drizzle-orm";

//sql
// export async function GET(req: NextRequest) {
//   try {
//     const { rows } = await sql`select * from todo`;
//     return NextResponse.json(rows, { status: 200 });
//   } catch (err) {
//     return NextResponse.json(err, { status: 500 });
//   }
// }
//drizzle
export async function GET(req: NextRequest) {
  try {
    // const { rows } = await sql`select * from todo`;
    const rows = await db.select().from(ToTable);
    return NextResponse.json(rows, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}

//create POST which accept id, text and completed then insert into todo table
// export async function POST(req: NextRequest) {
//   const { id, text, completed } = await req.json();
//   try {
//     const { rows } =
//       await sql`insert into todo values(${id}, ${text}, ${completed}) returning *`;
//     return NextResponse.json(rows, { status: 200 });
//   } catch (err) {
//     return NextResponse.json(err, { status: 500 });
//   }
// }
export async function POST(req: NextRequest) {
  const { id, text, completed } = await req.json();
  try {
    // const { rows } =
    //   await sql`insert into todo values(${id}, ${text}, ${completed}) returning *`;
    const rows = await db
      .insert(ToTable)
      .values({ id, text, completed })
      .returning();
    return NextResponse.json(rows, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}

// //create DELETE which accept id then delete id's record from todo table
// export async function DELETE(req: NextRequest) {
//   const { id } = await req.json();
//   try {
//     const { rows } = await sql`delete from todo where id = ${id} returning *`;
// const data =.............
// console.log(data.rows)
//     return NextResponse.json({ "Record deleted =": rows }, { status: 200 });
//   } catch (err) {
//     return NextResponse.json(err, { status: 500 });
//   }
// }
//create DELETE which accept id then delete id's record from todo table
export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  try {
    const rows = await db.delete(ToTable).where(eq(ToTable.id, id)).returning();
    return NextResponse.json({ "Record deleted =": rows }, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}

//create PATCH which accept id and completed then updates the id's record from todo table
export async function PATCH(req: NextRequest) {
  const { id, completed } = await req.json();
  try {
    // const { rows } =
    //   await sql`update todo set completed = ${completed} where id = ${id} returning *`;
    const rows = await db
      .update(ToTable)
      .set({ completed })
      .where(eq(ToTable.id, id))
      .returning();
    return NextResponse.json({ "updated=": rows }, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}

//create PUT which accept id and text then updates the id's record from todo table
export async function PUT(req: NextRequest) {
  const { id, text } = await req.json();
  try {
    // const { rows } =
    //   await sql`update todo set text = ${text} where id = ${id} returning *`;
    const rows = await db
      .update(ToTable)
      .set({ text })
      .where(eq(ToTable.id, id))
      .returning();
    return NextResponse.json({ "updated=": rows }, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
