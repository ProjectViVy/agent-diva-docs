---
title: Slack
description: 配置 Agent Diva 连接 Slack App（Socket Mode）。
---

# Slack 通道

## 前置条件

- 在 [Slack API](https://api.slack.com/apps) 创建应用
- 启用 **Socket Mode**（App 配置 → Socket Mode）
- 获取 **Bot User OAuth Token**（`xoxb-` 开头）和 **App-Level Token**（`xapp-` 开头）
- 订阅事件：`app_mention`（频道中 @Bot 时）、`message`（DM 时，需 `im:history` 等 scope）

## 配置示例

```json
{
  "channels": {
    "slack": {
      "enabled": true,
      "mode": "socket",
      "bot_token": "xoxb-xxx",
      "app_token": "xapp-xxx",
      "group_policy": "mention",
      "dm": {
        "enabled": true,
        "policy": "open",
        "allow_from": []
      }
    }
  }
}
```

- **bot_token**：Bot User OAuth Token

- **app_token**：App-Level Token（Socket Mode 必需）

- **group_policy**：频道中响应策略
  - `mention`：仅 @Bot 时响应
  - `open`：响应所有消息

- **dm.policy**：私信策略
  - `open`：响应所有 DM
  - `allowlist`：仅响应 `dm.allow_from` 中的用户

- **dm.allow_from**：DM 白名单，当 `policy` 为 `allowlist` 时生效

## 启动

```bash
agent-diva gateway
```

在 Slack 中 @Bot 或发送 DM 即可开始对话。回复会以线程形式发送。

## 常见问题

**Q：Socket Mode 连接失败？**

确认 `app_token` 和 `bot_token` 正确，且 App 已启用 Socket Mode。检查防火墙是否放行 WebSocket 连接。

**Q：Bot 在频道中不响应？**

确认已订阅 `app_mention` 事件，且 `group_policy` 为 `mention` 时需 @Bot 才会触发。
