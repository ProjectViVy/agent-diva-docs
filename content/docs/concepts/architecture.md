---
title: 架构与哲学
description: 从 nanobot 的最小 agent loop 出发，Agent Diva 用 Rust 把这套体系拆成了哪些 crate，以及消息流与实验性特性的预留。
---

# 架构与哲学

## 概览

- **Agent Diva 这套东西，底层是怎么拼出来的？**
- **为什么要这么拆？跟 nanobot 相比，到底多了什么？**

## nanobot 的最小 agent loop

在 [nanobot](https://github.com/HKUDS/nanobot) 里，核心逻辑可以压缩成一条链路：

```
Channel 输入 → Agent Loop → Provider 调用（可能带 Tool）→ 输出回 Channel
```

Agent Diva 把这条最小链路保留，在两边和中间挂上：更强的日志、Provider 管理、多通道路由、UI、以及情感系统 / 多 Agent 协同等能力。

## Agent Diva 的 8 大核心 crate

| Crate | 职责 |
|-------|------|
| `agent-diva-core` | 配置加载、会话与记忆、心跳、事件总线、错误类型 |
| `agent-diva-agent` | Agent loop、上下文构建、Skill 加载、Subagent 管理 |
| `agent-diva-providers` | Provider trait、注册表、模型 ID 规则 |
| `agent-diva-channels` | ChannelHandler trait、Telegram/Discord/Slack 等适配 |
| `agent-diva-tools` | 文件、Shell、Web、Spawn、Cron、MCP 等工具 |
| `agent-diva-cli` | onboard、gateway、agent、tui、status 等命令 |
| `agent-diva-gui` | Tauri + 前端桌面应用 |
| `agent-diva-manager` | 远程管理 API |
| `agent-diva-migration` | 从旧版本迁移 |

一句话：**core 管地基，agent 管脑子，providers / channels / tools 管手脚，cli / gui / manager 管入口和皮肤。**

## 消息流

```
Channel Handler
    ↓（入站消息）
Message Bus（Inbound）
    ↓
Agent Loop（agent-diva-agent）
    ↓
Context Builder（组 prompt）
    ↓
Provider（agent-diva-providers）
    ↓（需要时）
Tool Execution（agent-diva-tools）
    ↓
Message Bus（Outbound）
    ↓
Channel Handler（回发到 Telegram / Discord / ...）
```

## 为什么选 Rust 重写？

- **性能与资源占用**：Tokio + Rust 在高并发、多通道场景下表现稳定
- **部署体积**：Windows 安装包约 15M，远小于 200M+ 的 Electron 方案
- **工程可维护性**：强类型、明确错误模型、多 crate 热插拔

## 比 nanobot 多了什么？

- **日志与观测**：`tracing` 结构化日志，CLI/TUI/GUI 可观测
- **模块化**：Provider / Channel / Tool 拆进各自 crate，扩展有固定套路
- **UI 是一等公民**：CLI / TUI / GUI 平行设计
- **实验性预留**：情感系统、多 Agent 协同的架构基础

详见 [Labs](/labs/index)。
