import { getArticles } from "./cli.ts";

if (Deno.args[0] === "articles") {
  console.log(await getArticles());
} else {
  console.log("Wrong parameters!");
}
