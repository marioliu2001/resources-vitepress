---
pageClass: site-layout
---

<videoList :data="videoData" />
<script setup>
// 网址导航页面的数据
// import videoData from "./data/这个是八抓鱼直接保存的.json";
// import videoData from "./data/[焱焱] 声音满分·娇喘声·呻吟声·喊叫声.json";
import videoData from "./data/宍戸里帆.json";
</script>

<style>
/**
  网址导航页面样式
**/
.site-layout {
  /*布局调整*/
  .VPDoc {
    .container {
      max-width: 100% !important;
      justify-content: flex-start !important;
      .aside {
        order: 1;
      }
      .content {
        order: 2;
        max-width: 100% !important;
        .content-container {
          max-width: 100% !important;
        }
      }
      .main {
        height: auto;
        overflow: hidden;
        .vp-doc h2 {
          margin: 0;
        }
      }
    }
  }
  /* 隐藏底部的在 github 上编辑此页模块*/
  .VPDocFooter {
    display: none;
  }
}
</style>