import { defineConfig } from 'vitepress'
import topNav from "./topNav/index.js";
import {vitePressNote} from "./sideBar/vitePressBar.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress-test/", // 设置github部署的路径，解决css样式失效问题
  title: "Memorandum document",
  description: "备忘录文档",
  outDir: './dist', // 打包目录
  // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
  // lastUpdated: true, // string | boolean

  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: "/橘子.svg", // 导航上的logo
    siteTitle: '备忘录文档', // false(隐藏logo右边的标题)
    nav: topNav, // 头部导航栏配置

    //本地搜索
    search: {
      provider: 'local'
    },
    //返回顶部文字修改
    returnToTopLabel:'返回顶部',

    // 左侧导航栏
    sidebar: {
      "/note/vitePress": vitePressNote,
    },

    // 站点页脚配置
    footer: {
      message: "只教有用的",
      copyright: "Copyright © 2023-present Echo",
    },

    outlineTitle: "本页目录", // 右侧边栏配置，默认值是"On this page"
    lastUpdatedText: "最后更新", // string

    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/' }
    ]
  }
})
