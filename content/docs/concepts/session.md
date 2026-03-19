---
title: 会话管理
description: 会话隔离、持久化与 CLI/TUI 中的使用。
---

# 会话管理

## 概览

会话按 **channel + chat_id** 隔离，每个会话独立持久化到 JSONL 文件。同一 channel 下不同 chat_id（如不同群组、不同用户）拥有独立对话历史。

## 会话 Key

格式：`{channel}:{chat_id}`

示例：

- `telegram:123456789` — Telegram 用户 123456789
- `discord:channel_abc` — Discord 频道或 DM
- `cli:tui:20240318120000` — TUI 本地会话
- `gui:main` — GUI 主会话

## 持久化

- **路径**：`workspace/sessions/{safe_key}.jsonl`
- **格式**：每行一条 JSON 消息（role、content、timestamp 等）
- **safe_key**：将 key 中的 `:`、`/`、`\` 替换为 `_`，如 `telegram_123456789.jsonl`

## CLI 指定会话

```bash
agent-diva agent -m "继续" -s telegram:123456789
```

`-s` 或 `--session` 指定会话 key，用于多轮对话时保持上下文。

## TUI 会话列表

TUI 会列出已有会话，选择后在该会话中继续对话。新建会话时生成 `cli:tui:{timestamp}` 格式的 key。

## 相关

- [记忆系统](/docs/concepts/memory)
- [架构说明](/docs/concepts/architecture)
