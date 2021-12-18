import * as core from "./core.ts";

export function createArticle(authUser: string, articleInput: any) {
	core.createArticle(authUser, articleInput);
}

export function getArticles() {
	return core.getArticles();
}
