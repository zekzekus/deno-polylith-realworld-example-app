import { db } from "./deps.ts";

export async function insertArticle(authUser: string, articleInput: string) {
	await db.collection("articles").insertOne({ userName: authUser, content: articleInput });
	console.log("Article inserted for " + authUser + " with " + articleInput);
}

export async function getArticles() {
	const results = await db.collection("articles").find({}).toArray();
	return results;
}
