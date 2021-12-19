import { getArticles } from "./cli.ts";

if (Deno.args[1] === "articles") {
  console.log(await getArticles());
} else {
	console.log("Wrong parameters!");
}
