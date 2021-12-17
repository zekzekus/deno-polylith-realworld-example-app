import { rootHandler } from "./handlers.ts";

export const routes = [{
	method: "GET", path: "/", handler: rootHandler,
}]
