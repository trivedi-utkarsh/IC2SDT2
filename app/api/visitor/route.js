// /app/api/visitor/route.js
import {connectDB} from '../db/connectDb.js'; // your DB connection
import Visitor from '../models/Visitor.js';     // your schema

export async function GET() {
  await connectDB();

  let doc = await Visitor.findOne();
  console.log("Visitor count document:", doc);
  if (!doc) {
    doc = await Visitor.create({ count: 1 });
  } else {
    console.log("Current visitor count:", doc.count);
    doc.count += 1;
    await doc.save();
  }

  return Response.json({ count: doc.count });
}
