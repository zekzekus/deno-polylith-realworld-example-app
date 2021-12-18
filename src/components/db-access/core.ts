import { MongoClient } from "./deps.ts";

const client = new MongoClient();

export const db = await client.connect("mongodb://localhost:27017");
