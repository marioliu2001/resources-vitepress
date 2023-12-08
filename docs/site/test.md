---
pageClass: site-layout
---

<videoList :data="videoData" />
<script setup>
// 网址导航页面的数据
import videoData from "../visual/json/妃光莉, 妃ひかり.json";
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