# 已经弃用脚本 使用(github action & github pages)自动化搭建和部署
## 自动部署脚本
## /bin/bash
#
## 确保脚本抛出遇到的错误
#set -e
#
## 打包生成静态文件
#npm run docs:build
#
## 进入待发布的 dist/ 目录
##cd docs/.vitepress/dist
#cd ../docs/dist
#
#git init
#git add .
#git commit -m 'deploy'
#
## 部署到 https://.github.io/
#git push -f https://github.com/marioliu2001/vitepress-test.git master:github-pages
#
## 提交所有代码到github
##cd ../../../
##git add .
##git cm -m 'update'
##git push
