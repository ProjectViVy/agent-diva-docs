---
title: Cron 定时任务
description: Cron 工具与 agent-diva cron CLI 的用法。
---

# Cron 工具

Cron 工具允许 Agent 安排定时提醒与周期性任务，由 Agent Loop 在指定时间触发后续对话。

## 工具能力

Agent 在对话中可调用 `cron` 工具：

- **add**：添加定时任务
  - `message`：到时触发的消息内容
  - `every_seconds`：每隔 N 秒执行
  - `cron_expr`：Cron 表达式（如 `0 9 * * *` 每天 9 点）
  - `at`：指定时间（ISO 8601 格式）
  - `timezone`：时区（可选）

- **list**：列出当前任务
- **remove**：删除任务

**限制**：在 Cron 触发的对话轮次中，不能再次添加新的 Cron 任务（防止递归）。

## CLI 命令

```bash
agent-diva cron add      # 交互式添加任务
agent-diva cron list     # 列出任务
agent-diva cron remove <job_id>   # 删除任务
agent-diva cron run <job_id>      # 手动执行任务
```

Cron 任务由 `agent-diva cron` 或 Gateway 内的 Cron 服务调度执行。需确保 Cron 服务已启动（通常由 `agent-diva gateway` 一并启动）。

## 会话上下文

Cron 任务触发时，会使用创建任务时的会话（channel、chat_id）作为回复目标。因此添加任务时需在有效会话上下文中（如 TUI、GUI 或 Channel 对话中），否则会提示 "no session context"。

## 相关工具

- **message**：向指定通道发送消息
- **spawn**：启动异步子任务

这些工具与 Cron 配合，可实现「到时提醒」「定时执行脚本」等能力。
