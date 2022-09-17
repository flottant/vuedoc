export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"博客主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"icon\":\"home\",\"title\":\"博客主页\",\"heroImage\":\"/f.svg\",\"heroText\":\"Flot 的知识库\",\"heroFullScreen\":null,\"tagline\":\"把事件变成事故，把悲剧变成美谈。\",\"projects\":[{\"icon\":\"project\",\"name\":\"查看知识库\",\"desc\":\"点击跳转到目录结构\",\"link\":\"/notes/aboout-website.html\"},{\"icon\":\"friend\",\"name\":\"掌控物质\",\"desc\":\"MMD LSP\",\"link\":\"https://zk-wz.gitee.io\"}],\"footer\":\"萌ICP备20220890号\",\"bgImage\":\"./bg.webp\",\"summary\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://flot.moe/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Flot 的知识库\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"博客主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.27,\"words\":81},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
