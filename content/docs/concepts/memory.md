---
title: 记忆系统
description: MEMORY.md、HISTORY.md 与长期记忆注入。
---

# 记忆系统

## 概览

长期记忆存放在 `workspace/memory/` 目录，由 Agent 在构建 prompt 时注入，用于跨会话保留重要事实与历史记录。

## 文件说明

| 文件 | 说明 |
|------|------|
| **MEMORY.md** | 持久事实，直接注入到 Agent 的 system prompt |
| **HISTORY.md** | append-only 历史日志，记录重要事件 |
| **{date}.md** | 可选，按日期命名的每日笔记 |

## MEMORY.md

- 存储需要长期保留的事实（用户偏好、项目背景等）
- Agent 每次对话都会加载并注入到 prompt 的「Long-term Memory」区块
- 可由 Agent 通过工具更新，或用户手动编辑

## HISTORY.md

- append-only，每行一条记录
- 格式示例：`[2026-03-18 09:00] 事件描述`
- 用于审计与回溯，不直接注入 prompt

## PROFILE.md

位于 workspace 根目录（`workspace/PROFILE.md`），用于用户偏好与身份信息，与 memory 目录并列。

## 工作区模板

`agent-diva onboard` 或 `config refresh` 会创建默认模板：

- `memory/MEMORY.md` — 初始为「# Long-term Memory」
- `memory/HISTORY.md` — 空文件
- `PROFILE.md` — 用户信息模板

## 相关

- [会话管理](/docs/concepts/session)
- [配置与引导](/docs/start/onboarding)
