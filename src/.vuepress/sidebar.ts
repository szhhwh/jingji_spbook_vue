import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "2020级特刊",
      prefix: "2020/",
      link: "2020/",
      children: "structure",
    },
  ],
});
