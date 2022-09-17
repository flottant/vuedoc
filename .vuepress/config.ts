import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Flot 的知识库",
  description: "flot 的知识库",

  base: "/",

  theme,
  
});

