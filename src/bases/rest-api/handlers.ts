import { getArticles } from "../../components/article/interface.ts";

export function rootHandler() {
  return "Hello World!\n";
}

export function articlesHandler() {
  return getArticles();
}
