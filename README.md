## 暂停开发
- 详情见CHANGELOG.md

## 已完成
* 样式重置
* 基本内容填写
* element-plus & sass
* 自定义组件 (avatar头像 & home组件)
* deplo.sh自动化部署脚本
* 自动生成侧边栏github地址(已安装未使用)：https://github.com/jooy2/vitepress-sidebar

## 待完善
* 待增加

# vitePress-project
基于vitePress搭建的个人轻型博客项目，从零开始用vitePress搭建的静态页面项目模板

预览地址：暂无

## 背景介绍

网站是基于VitePress搭建的网站，方便搭建个人静态博客的项目模板


## 目录说明

```shell

vitePress-project
  |-docs
    |─.vitepress         // vitepress配置目录（包含网站基本信息配置、自定义主题、顶部、侧边导航配置等）
      |—components       // 自定组件
      |─sideBar          // 侧边导航配置
      |─theme            // 自定义主题配置
      |─topNav           // 顶部导航配置
      |─config.js        // vitepress网站的基本配置
    |─about              // 存放关于我们文档的目录
    |─examples           // 存放组件使用文档的目录（引入第三方组件使用的案例页面）
    |─guide              // 存放开始使用向导页面文档的目录
    |─note               // 存放技术笔记文档的目录
    |─site               // 存放前端导航文档的目录
    |─public             // 静态资源存放目录（图片）
    |─index.md           // 首页内容配置
```

## 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request

## 代码提交规范
1.安装commitizen

```npm
npm install commitizen --save-dev
```

2.安装并配置 cz-customizable

```npm
npm install cz-customizable --save-dev
```

3.在 `package.json` 中添加以下配置

```json
...
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
}
```

4.在项目根目录下创建 `.cz-config.js` 自定义提示文件

```js
module.exports = {
    // 可选类型
    types: [
        { value: '🚀feat', name: '🚀feat: 新功能' },
        { value: '🐛fix', name: '🐛fix: 修复' },
        { value: '📝docs', name: '📝docs: 文档变更' },
        { value: '🏠style', name: '🏠style: 代码格式(不影响代码运行的变动)' },
        { value: '♻️refactor', name: '♻️refactor: 重构(既不是增加feature，也不是修复bug)' },
        { value: '⚡️perf', name: '⚡️perf: 性能优化' },
        { value: '✅test', name: '✅test: 增加测试' },
        { value: '🔨chore', name: '🔨chore: 构建过程或辅助工具的变动' },
        { value: '⏪revert', name: '⏪revert: 回退' },
        { value: '📦build', name: '📦build: 打包' }
    ],

    // 消息步骤
    messages: {
        type: '请选择提交类型:',
        scope: '选择一个 scope (可选):',
        customScope: '请输入修改范围(可选):',
        subject: '请简要描述提交(必填): \n',
        body: '请输入详细描述，使用"|"换行(可选): \n',
        breaking: '非兼容性说明 (可选): \n',
        footer: '请输入要关闭的issue，例如：#31, #34(可选): \n',
        confirmCommit: '确认使用以上信息提交？(y/n/e/h)',
    },
    // 跳过空的 scope
    skipEmptyScopes: true,
    // 设置为 true，在 scope 选择的时候，会有 empty 和 custom 可以选择
    // 顾名思义，选择 empty 表示 scope 缺省，如果选择 custom，则可以自己输入信息
    allowCustomScopes: true,
    // scopes
    // scopes: [
    //     { name: "方案了解" },
    //     { name: "框架原理" },
    //     { name: "工程设计" },
    //     { name: "框架设计" },
    // ],
	// scopes: ['note', 'folder', 'tag', 'search', 'reminder', 'share', 'settings'],
    // 跳过问题
    // skipQuestions: ['body', 'breaking', 'footer'],
    // 只有我们 type 选择了 feat 或者是 fix，才会询问我们 breaking message.
    allowBreakingChanges: ['🚀feat', '🐛fix'],
    // subject文字长度默认是72
    subjectLimit: 200
}
```

5.最后修改 `package.json` 文件，添加两条命令，一个命令用于手动选择需要提交的文件后，执行 `git-cz`，另一个命令用于自动提交全部文件，然后执行 `git-cz` 。

```js
// package.json
  "scripts": {
    "commit": "git-cz",
    "commit:all": "git add . && git-cz",
  },
  "config": {
    "commitizen": {
      "path": "node_modules/cz-customizable"
    }
  }
```

6.commitlint

安装commitlint

```npm
npm install --save-dev @commitlint/config-conventional @commitlint/cli
```

配置commitlint

```npm
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

安装husky

```bash
//安装
npm install husky -D
//配置
npm set-script prepare "husky install"
npm run prepare
//如果上述配置失败直接执行
husky install
```

添加commitlint到husky

```bash
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

如果使用的是自定义cz-customizable则需要换成以下配置

```bash
# 安装共享配置
npm install commitlint-config-cz --save-dev
# 更改配置
echo "module.exports = {extends: ['cz']}" > commitlint.config.js
```

## 变更日志

使用了 commitizen（cz-customizable） + commitlint（commitlint-config-cz）的组合之后，可以确保团队协作的过程中都生成符合 Augular 规范的提交说明。生成了规范的提交说明之后可以使用 [conventional-changelog-cli](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fconventional-changelog%2Fconventional-changelog%2Ftree%2Fmaster%2Fpackages%2Fconventional-changelog-cli) 自动生成变更日志：

```npm
npm install --save-dev conventional-changelog-cli
```

安装完成后在 `package.json` 中新增 CLI 命令：

```json
"scripts": {
  // 这个是使用angular规范(自定义的type和表情都读不出来)
  "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0",
  // 这个是原始版本(指定生成到doc目录下)
  "changelog": "conventional-changelog -i doc/CHANGELOG.md -s -r 0"
}
```

执行 `npm run changelog` 之后会在根目录下自动生成 [CHANGELOG.md](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fziyi2%2Fmicro-framework%2Fblob%2Fdemo%2Fchangelog%2FCHANGELOG.md) 文件：

需要注意，从上述变更日志可以发现 Angular 规范中的 Body 被日志忽视，由于 Body 不是必须的，因此尽量详细书写 subject 短说明（本课程示例中的短说明写的太短，已经无法说明 commit 提交的目的，导致变更日志看起来不够详细。。。）。

除此之外，上述变更日志中出现了大量重复的 commit 提交说明，有没有什么方式可以合并提交说明呢？合并提交说明对于代码 CR 和 PR 都是非常有用的能力。

在commit之后执行日志(例如 使用husky) --- 以后再说
