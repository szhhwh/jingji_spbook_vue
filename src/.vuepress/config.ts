import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/jingji/sp/",

  lang: "zh-CN",
  title: "荆棘鸟文学社",
  description: "荆棘鸟文学社高三特刊",

  head: [
    [
      'link', { rel: 'icon', href: '/favicon.ico' }
    ]
  ],

  theme,
});
