import { defineConfig } from 'vitepress'
import topNav from "./topNav/index.js";
import {vitePressNote, titleFiltering, collectActress} from './sideBar/index.js'
import {baseUrl} from "./base_url.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: baseUrl, // 设置github部署的路径，解决css样式失效问题
  title: "Memorandum document",
  description: "备忘录文档",
  outDir: '../dist', // 打包目录
  // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
  // lastUpdated: true, // string | boolean 开始更新时间

  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/vite.svg' }]
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
    // 返回顶部文字修改
    returnToTopLabel: '返回顶部',

    // 左侧导航栏
    sidebar: {
      "/note/vitePress": vitePressNote, // 示例
      "/note/title-filtering": { base: '/note/title-filtering/', items: titleFiltering },
      "/note/collect-actress": { base: '/note/collect-actress/', items: collectActress }
    },

    // 编辑链接
    editLink: {
      pattern: "https://github.com/marioliu2001/resources-vitepress/edit/master/docs/:path", // 自己项目仓库地址
      text: "在 github 上编辑此页",
    },

    // 站点页脚配置
    footer: {
      message: "只教有用的",
      copyright: "Copyright © 1992-present Echo",
    },

    outlineTitle: "本页目录", // 右侧边栏配置，默认值是"On this page"
    lastUpdatedText: "最后更新", // string

    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  }
})
