# vin-place

vin 的个人博客 — 基于 [Hexo](https://hexo.io/) + [hexo-theme-linen](https://github.com/LynanBreeze/hexo-theme-linen)，托管在 GitHub Pages。

线上地址：<https://vincent-tang-123.github.io>

## 本地开发

```bash
npm install        # 首次安装依赖
npm run dev        # 启动本地预览 → http://localhost:4000
```

## 写文章

```bash
npx hexo new "标题"          # 在 source/_posts/ 下生成新文件
```

文章 front-matter 常用字段：

```yaml
---
title: 标题
date: 2026-05-27 10:00:00
categories: [分类]
tags: [标签1, 标签2]
cover: https://images.unsplash.com/...    # 封面图
coverInfo:
  author: Unsplash
  url: https://unsplash.com/
---
```

## 构建与部署

推送到 `main` 分支后，GitHub Actions 会自动：

1. `npm ci` 安装依赖
2. `hexo generate` 生成 `public/`
3. 通过 `actions/deploy-pages` 部署到 GitHub Pages

首次部署前，请到 GitHub 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。

## 启用 Giscus 评论

linen 主题原生只支持 Gitalk；本站用 [Giscus](https://giscus.app/) 通过 `scripts/giscus.js` 注入。启用步骤：

1. 在 GitHub 仓库 **Settings → General → Features** 勾选 **Discussions**
2. 到 <https://giscus.app/zh-CN> 按提示填写仓库，复制 `data-repo-id` 与 `data-category-id`
3. 编辑 `_config.yml` 的 `giscus:` 节点：
   ```yaml
   giscus:
     enable: true
     repo: vincent-tang-123/vincent-tang-123.github.io
     repo_id: '<填入>'
     category: Announcements
     category_id: '<填入>'
   ```

## 目录结构

```
.
├── _config.yml            # Hexo 主配置
├── _config.linen.yml      # linen 主题配置
├── source/
│   ├── _posts/            # 文章
│   ├── about/             # 关于页
│   ├── gallery/           # 图库页
│   ├── tags/              # 标签索引页
│   └── categories/        # 分类索引页
├── scripts/giscus.js      # Giscus 注入脚本
└── .github/workflows/deploy.yml
```
