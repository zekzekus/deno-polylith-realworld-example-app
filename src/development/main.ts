import { createArticle } from "../components/article/interface.ts";

console.log(
  createArticle("zekzekus@gmail.com", {
    title: "The title",
    descrption: "The desc",
    body: "That body",
    tagList: ["tag1", "tag2"],
  }),
);
