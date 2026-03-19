# Agent Diva 文档 / Agent Diva Docs

[Agent Diva](https://github.com/ProjectViVy/agent-diva) 的官方文档站点，基于 [Fumadocs](https://fumadocs.dev) 与 Next.js 构建。

The official documentation site for [Agent Diva](https://github.com/ProjectViVy/agent-diva), built with [Fumadocs](https://fumadocs.dev) and Next.js.

---

## 快速开始 / Quick Start

```bash
# 安装依赖 / Install dependencies
pnpm install

# 启动开发服务器 / Start dev server
pnpm dev
```

在浏览器中打开 http://localhost:3000 查看文档。  
Open http://localhost:3000 in your browser to view the docs.

---

## 构建与部署 / Build & Deploy

```bash
# 生产构建 / Production build
pnpm build

# 启动生产服务 / Start production server
pnpm start
```

---

## 项目结构 / Project Structure

| 路径 Path | 说明 Description |
|-----------|------------------|
| `content/docs/` | 文档 Markdown / MDX 源文件 · Doc source files |
| `app/docs/` | 文档页面路由 · Docs routes |
| `app/(home)/` | 首页与落地页 · Home & landing |
| `app/api/search/` | 全文搜索 API · Full-text search API |
| `app/api/chat/` | AI 对话 API · AI chat API |
| `lib/` | 内容源、布局等共享逻辑 · Shared logic |
| `components/` | UI 组件 · UI components |

---

## 技术栈 / Tech Stack

- **框架 Framework**：Next.js 16
- **文档 Docs**：Fumadocs（MDX、搜索、AI 对话 · MDX, search, AI chat）
- **样式 Styling**：Tailwind CSS

---

## 相关链接 / Links

- [Agent Diva 主仓库 / Main Repo](https://github.com/ProjectViVy/agent-diva) — Rust 多通道 AI 助手网关 · Rust multi-channel AI assistant gateway
- [Fumadocs 文档 / Fumadocs Docs](https://fumadocs.dev) — 文档框架说明 · Documentation framework
