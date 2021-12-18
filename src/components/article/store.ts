import { Bson, db } from "./deps.ts";

interface ArticleSchema {
  _id: Bson.ObjectId;
  userId: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

const articles = db.collection<ArticleSchema>("artticles");

export async function insertArticle(authUser: string, articleInput: any) {
  const { title, description, body, tagList } = articleInput;
  await articles.insertOne({
    userId: authUser,
    title,
    description,
    body,
    tagList,
  });
}

export async function getArticles() {
  const results = await articles.find({}).toArray();
  return results;
}
