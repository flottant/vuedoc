import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://flot.moe",

  author: {
    name: "flot",
    url: "https://flot.moe",
  },

  iconAssets: "//at.alicdn.com/t/c/font_3655018_sferhqlyfk.css",
  lastUpdated: true,
  contributors: true,
  

  logo: "/f.svg",

  repo: "flottant/vuedoc",

  //docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: "structure",

  footer: "默认页脚",

  displayFooter: false,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    roundAvatar: true,
    avatar: "logo.svg",
    description: "一个有趣的人",
    intro: "/intro.html",
    medias: {
    //  Baidu: "https://example.com",
    //  Bitbucket: "https://example.com",
    //  Dingding: "https://example.com",
    //  Discord: "https://example.com",
    //  Dribbble: "https://example.com",
      Email: "mailto:flottant1516@gmail.com",
    //  Evernote: "https://example.com",
    //  Facebook: "https://example.com",
    //  Flipboard: "https://example.com",
    //  Gitee: "https://example.com",
      GitHub: "https://github.com/flottant",
    //  Gitlab: "https://example.com",
    //  Gmail: "https://example.com",
    //  Instagram: "https://example.com",
    //  Lines: "https://example.com",
    //  Linkedin: "https://example.com",
    //  Pinterest: "https://example.com",
    //  Pocket: "https://example.com",
    //  QQ: "https://example.com",
    //  Qzone: "https://example.com",
    //  Reddit: "https://example.com",
    //  Rss: "https://example.com",
    //  Steam: "https://example.com",
    //  Twitter: "https://example.com",
    //  Wechat: "https://example.com",
    //  Weibo: "https://example.com",
    //  Whatsapp: "https://example.com",
    //  Youtube: "https://example.com",
    //  Zhihu: "https://example.com",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "flottant/vuedoc",
      repoId: "R_kgDOIAoWkQ",
      category: "Announcements",
      categoryId: "DIC_kwDOIAoWkc4CRe0m",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tex: true,
      vpre: true,
      vuePlayground: true,
    },
  },
});
