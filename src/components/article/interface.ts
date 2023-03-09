import * as core from "./core.ts";

export function createArticle(authUser: string, articleInput: core.CreateArticleObj) {
  core.createArticle(authUser, articleInput);
}

export function getArticles() {
  return core.getArticles();
}
