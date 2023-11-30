// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './styles/rainbow.css'
import './styles/custom.scss'
import "./styles/site.scss"; // 网址导航页面样式

import siteList from "../components/siteList.vue";
import siteFooter from "../components/siteFooter.vue";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      // 自定义文档底部，使用doc-after插槽
      // "doc-after": () => h(siteFooter),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component("SiteList", siteList)
  }
}
