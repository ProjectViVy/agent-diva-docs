---
title: 配置与引导
description: onboard 命令详解、配置文件结构、最小配置示例与首次 GUI 引导流程。
---

# 配置与引导

## onboard 命令

`agent-diva onboard` 用于初始化配置与 workspace，首次使用前必须执行一次。

```bash
agent-diva onboard
```

或：

```bash
just run onboard
```

### 交互流程

- 若配置不存在：创建 `~/.agent-diva/config.json` 并引导选择 Provider、模型、workspace
- 若配置已存在：可选择「刷新现有配置」或「覆盖为新设置」
- 使用 `--force` 可非交互式覆盖：`agent-diva onboard --force`

### 创建内容

- 配置文件：`~/.agent-diva/config.json`
- Workspace 目录：默认 `~/.agent-diva/workspace`，包含 `MEMORY.md`、`HISTORY.md`、`HEARTBEAT.md` 等模板

## 配置文件结构

配置文件为 JSON，主要结构如下：

```json
{
  "providers": {
    "openrouter": { "apiKey": "sk-or-v1-xxx" },
    "deepseek": { "apiKey": "sk-xxx", "apiBase": "https://api.deepseek.com/v1" }
  },
  "agents": {
    "defaults": {
      "provider": "openrouter",
      "model": "anthropic/claude-sonnet-4",
      "workspace": "~/.agent-diva/workspace"
    }
  },
  "channels": {
    "telegram": {
      "enabled": true,
      "token": "YOUR_BOT_TOKEN",
      "allowFrom": ["YOUR_USER_ID"]
    }
  }
}
```

## 最小配置示例

仅需一个 Provider 即可在 TUI / CLI 中对话：

```json
{
  "providers": {
    "openrouter": {
      "apiKey": "sk-or-v1-xxxx"
    }
  },
  "agents": {
    "defaults": {
      "provider": "openrouter",
      "model": "anthropic/claude-sonnet-4"
    }
  }
}
```

添加 Channel 后可通过 Telegram / Discord 等收发消息，见 [Channels](/channels)。

## 首次启动 GUI

若使用 GUI 安装包：

1. 安装后首次启动会检测配置
2. 若未配置，会引导完成 Provider 与 workspace 设置
3. 配置完成后即可在 GUI 中聊天

GUI 与 CLI 共用同一套 `~/.agent-diva/config.json`，在任一入口修改都会同步。

## 相关命令

- `agent-diva config path`：查看当前配置路径
- `agent-diva config validate`：验证配置
- `agent-diva config doctor`：运行完整诊断
- `agent-diva config refresh`：刷新配置与 workspace 模板，保留已有值
