#!/bin/bash

echo "Git 提交脚本"

# 检查当前目录是否为 Git 仓库
if [ ! -d ".git" ]; then
  echo "当前目录不是一个 Git 仓库。初始化新的 Git 仓库..."
  git init
    
  # 提示用户输入远程仓库地址
  echo "请输入远程仓库地址："
  read remote_url

  # 添加远程仓库
  git remote add origin "$remote_url"
  echo "远程仓库已关联：$remote_url"
fi

# 提示用户输入提交信息
echo "请输入提交信息："
read commit_message

# 检查是否有未暂存的更改
if [ -n "$(git status --porcelain)" ]; then
  echo "检测到未暂存的更改..."
  
  # 将所有更改添加到暂存区
  echo "将所有更改添加到暂存区..."
  git add .

  # 提交更改
  echo "提交更改..."
  git commit -m "$commit_message"

  # 推送到远程仓库
  echo "推送更改到远程仓库..."
  git push origin HEAD
  echo "已成功提交更改并推送到远程仓库！"
else
  echo "没有检测到需要提交的更改。"
fi