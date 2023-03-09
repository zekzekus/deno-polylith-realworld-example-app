import * as store from "./store.ts";
import { isEmail } from "../validation/interface.ts";

export interface CreateArticleObj {
  title: string,
  description: string,
  body: string,
  tagList: Array<string>,
}

export async function createArticle(authUser: string, articleInput: CreateArticleObj) {
  const { success, errors } = await isEmail(authUser);
  console.log("Username validation: " + success + " errors: " + errors);
  store.insertArticle(authUser, articleInput);
}

export function getArticles() {
  return store.getArticles();
}
