import * as store from "./store.ts";
import { isEmail } from "../validation/interface.ts";

export async function createArticle(authUser: string, articleInput: string) {
  const { success, errors } = await isEmail(authUser);
  console.log("Username validation: " + success + " errors: " + errors);
  store.insertArticle(authUser, articleInput);
}

export function getArticles() {
  return store.getArticles();
}
