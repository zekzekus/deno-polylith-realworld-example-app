import { db } from "./deps.ts";

export function insertArticle(authUser: string, articleInput: string) {
	db.collection("articles").insertOne({ userName: authUser, content: articleInput });
	console.log("Article inserted for " + authUser + " with " + articleInput);
}

