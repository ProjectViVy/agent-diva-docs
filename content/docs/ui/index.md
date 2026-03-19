---
title: UI 与体验
description: TUI 与 GUI 设计、安装、功能说明、与 Gateway 的关系。
---

# UI 与体验

## 概览

Agent Diva 把 **CLI / TUI / GUI** 当成一等公民设计，在保证轻量的前提下，把调试、配置、监控搬进 UI。

## TUI：终端里的控制中心

TUI 提供会话列表、当前对话内容、日志/事件视图、工具调用状态。

```bash
agent-diva tui
```

适合：SSH 终端观察、调试 Provider/Channel/Tool、无需 GUI 的环境。

## GUI：超轻量桌面应用

### 安装方式

- **Windows**：从 Release 页面下载预构建安装包（约 15M），双击安装即可，无需 Rust
- **macOS / Linux**：从源码构建，需先 `just build`，再在 `agent-diva-gui` 目录运行 `npm run tauri build` 或 `npm run tauri dev`

### 首次启动

1. 若未配置，GUI 会引导完成 Provider 与 workspace 设置
2. 配置完成后即可在 GUI 中聊天
3. GUI 与 CLI 共用 `~/.agent-diva/config.json`，在任一入口修改都会同步

### 与 Gateway 的关系

- **本地模式**：GUI 可内置启动 Agent 进程，无需单独运行 `agent-diva gateway`
- **远程模式**：可连接已运行的 Gateway（如 `agent-diva gateway` 或远程服务），用于多端共享同一实例

### 功能说明

- **会话列表**：查看、切换、删除会话
- **对话**：发送消息、流式回复、停止生成
- **配置**：Provider、Channel、模型切换
- **Cron**：定时任务管理
- **日志**：查看请求链路与工具调用

### 平台差异

| 平台 | 安装包 | 说明 |
|------|--------|------|
| Windows | 约 15M | 预构建安装包，无需 Rust |
| macOS / Linux | 从源码 | 需 Rust + Node，运行 `npm run tauri build` |

## 一套核心，多种入口

CLI / TUI / GUI 共用 `~/.agent-diva/config.json`，会话、记忆、HEARTBEAT 共享。在 GUI 里改 Provider，回到 CLI 会生效。

## 与其他框架对比

- **上手**：15M 安装包 + 引导式配置，比多容器/多进程方案简单
- **日常**：UI 是默认路径，不是附属壳
- **调试**：`tracing` 结构化日志，CLI/TUI/GUI 都能看清请求链路
