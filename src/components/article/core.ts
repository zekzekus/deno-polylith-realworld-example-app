import * as store from "./store.ts";

export function createArticle(authUser: string, articleInput: string) {
  store.insertArticle(authUser, articleInput);
}

export function getArticles() {
  return store.getArticles();
}
