---
title: 关于本站
date: 2026-05-27 09:00:00
categories:
  - 技术
tags:
  - Hexo
  - GitHub Pages
  - 建站
cover: https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=70
coverInfo:
  author: Unsplash
  url: https://unsplash.com/
---

记录一下 **vin-place** 这个博客是怎么搭起来的。

## 构建与托管

本站使用 [Hexo](https://hexo.io/) 构建生成静态网站文件，仓库托管在 [GitHub](https://github.com/)，通过 GitHub Actions 自动构建后部署到 GitHub Pages。

整套链路：

1. 本地写 Markdown 文章
2. `git push` 到 `main` 分支
3. GitHub Actions 触发：`npm ci` → `hexo generate` → 上传 `public/` 目录
4. Pages 自动发布到 `https://vincent-tang-123.github.io`

### 为什么用 Hexo？

静态博客的好处是 **没有数据库、没有运维负担**，所有内容都是 Markdown 文件。同样的内容，今天用 Hexo，明天换 Hugo / Astro / Next.js，迁移成本都很低。

## 主题

使用 [hexo-theme-linen](https://github.com/LynanBreeze/hexo-theme-linen) — 一个极简、专注阅读体验的主题，灵感来自 Medium。

主要喜欢的几点：

- **小而美**：用尽可能少的资源做事，加载快
- **可访问性好**：禁用 JavaScript、老旧设备、小屏设备都能正常阅读
- **排版克制**：很少花哨的颜色和动效，专注内容

## 插件

- `hexo-generator-feed`：生成 [/feed.xml](/feed.xml)，可用 RSS 阅读器订阅
- 内置懒加载：图片、视频、iframe 都懒加载，省流量

## 评论

使用 [Giscus](https://giscus.app/)，基于 GitHub Discussions。每篇文章的评论会变成仓库里的一条 Discussion，比传统 Issue 方案更现代。

## 写在最后

工具只是手段。重要的是 **真的有内容写进来**。
