---
title: CLI 参考
description: agent-diva 命令行子命令说明：onboard、gateway、agent、tui、status、channels、provider、config、cron 等。
---

# CLI 参考

Agent Diva CLI 入口为 `agent-diva`，支持以下子命令。

## 常用命令

| 命令 | 说明 |
|------|------|
| `agent-diva onboard` | 初始化配置与 workspace |
| `agent-diva gateway` | 启动 Gateway，连接已配置的 Channel |
| `agent-diva agent -m "消息"` | 发送单条消息并获取回复 |
| `agent-diva chat` | 交互式聊天（轻量） |
| `agent-diva tui` | 启动 TUI 界面 |
| `agent-diva status` | 查看状态（Provider、Channel、配置路径等） |

## 全局参数

- `--config <path>`：指定配置文件路径
- `--config-dir <path>`：指定配置目录
- `-w, --workspace <path>`：覆盖 workspace 路径

## 子命令概览

### onboard

初始化配置。详见 [配置与引导](/start/onboarding)。

### gateway

运行 Gateway，连接 Telegram、Discord 等通道。

### agent

```bash
agent-diva agent -m "Hello"
agent-diva agent -m "总结这段文字" --model deepseek-chat
agent-diva agent -m "继续" -s <session_key>
```

- `-m, --message`：要发送的消息
- `-s, --session`：会话 key，用于多轮对话
- `--model`：指定模型
- `--markdown` / `--no-markdown`：是否以 Markdown 渲染
- `--logs` / `--no-logs`：是否显示流式日志

### chat

交互式聊天模式，支持多轮对话。

### tui

启动 TUI，提供会话列表、日志视图等。

### status

输出当前配置路径、Provider、Channel、Cron 等状态。

### channels

- `agent-diva channels login <channel>`：登录通道（如 WhatsApp 需扫码）
- `agent-diva channels status`：通道状态

### provider

- `agent-diva provider list`：列出 Provider
- `agent-diva provider status`：Provider 状态
- `agent-diva provider set --provider <name> --model <model>`：设置当前 Provider 与模型
- `agent-diva provider models --provider <name>`：获取可用模型列表
- `agent-diva provider login <provider>`：OAuth 登录（如 openai-codex）

### config

- `agent-diva config path`：打印配置路径
- `agent-diva config init`：非交互式初始化（等同 onboard）
- `agent-diva config refresh`：刷新配置与模板
- `agent-diva config validate`：验证配置
- `agent-diva config doctor`：完整诊断
- `agent-diva config show`：打印当前配置（敏感信息脱敏）

### cron

- `agent-diva cron add`：添加 Cron 任务
- `agent-diva cron list`：列出任务
- `agent-diva cron remove <job_id>`：删除任务
- `agent-diva cron run <job_id>`：手动执行任务

### service（仅 Windows）

- `agent-diva service install`：安装 Windows 服务
- `agent-diva service start`：启动服务
- `agent-diva service stop`：停止服务
- `agent-diva service status`：服务状态
