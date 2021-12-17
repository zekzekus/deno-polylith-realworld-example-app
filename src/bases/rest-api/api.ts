import { rootHandler, articlesHandler } from "./handlers.ts";

export const routes = [
	{ method: "GET", path: "/", handler: rootHandler },
	{ method: "GET", path: "/articles", handler: articlesHandler},
]
