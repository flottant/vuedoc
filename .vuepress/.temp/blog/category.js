export const categoryMap = {"category":{"/":{"path":"/category/","map":{"介绍":{"path":"/category/%E4%BB%8B%E7%BB%8D/","keys":["v-38a99084"]},"软件配置":{"path":"/category/%E8%BD%AF%E4%BB%B6%E9%85%8D%E7%BD%AE/","keys":["v-348002e0"]}}}},"tag":{"/":{"path":"/tag/","map":{"自述":{"path":"/tag/%E8%87%AA%E8%BF%B0/","keys":["v-38a99084"]},"cpp":{"path":"/tag/cpp/","keys":["v-348002e0"]},"C++":{"path":"/tag/c++/","keys":["v-348002e0"]},"IDE":{"path":"/tag/ide/","keys":["v-348002e0"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
