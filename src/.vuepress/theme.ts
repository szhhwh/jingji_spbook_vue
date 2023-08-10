import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "http://szhh.hr98.net/",

  author: {
    name: "荆棘鸟文学社",
    url: "https://github.com/szhhwh/",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.webp",
  logoDark: '/logo-dark.webp',

  repo: "szhhwh/jingji_spbook_vue",

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  // footer: "荆棘鸟文学社",

  displayFooter: true,

  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //   },
  // },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    // You should generate and use your own comment service
    // comment: {
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    // },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: false,
      attrs: false,
      chart: false,
      codetabs: false,
      demo: false,
      echarts: false,
      figure: true,
      flowchart: false,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: false,
      mark: true,
      mermaid: false,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: false,
    },
  },
});
