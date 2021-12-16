import * as core  from "./core.ts";

export function createArticle(authUser: string, articleInput: string) {
	core.createArticle(authUser, articleInput);
}
