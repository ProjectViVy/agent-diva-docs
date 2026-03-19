---
title: 通道
description: Agent Diva 支持的聊天通道总览：Telegram、Discord、Slack、Email、QQ、Feishu、DingTalk 等。
---

# 通道总览

Agent Diva 通过 **Channel** 连接各类聊天平台，将用户消息接入消息总线，并将 Agent 回复回发到对应平台。

## 支持的通道

| 通道 | 说明 | 配置要点 |
|------|------|----------|
| [Telegram](/channels/telegram) | Telegram Bot | `token`、`allow_from` |
| Discord | Discord Bot | `token`、`allowFrom`、`groupPolicy` |
| Slack | Slack App（Socket Mode） | `botToken`、`appToken`、`allowFrom` |
| Email | IMAP + SMTP | `imapHost`、`smtpHost`、`allowFrom` |
| QQ | QQ 单聊 | `appId`、`secret`、`allowFrom` |
| Feishu | 飞书 Bot | `appId`、`appSecret`、`allowFrom` |
| DingTalk | 钉钉 Bot | `clientId`、`clientSecret`、`allowFrom` |
| WhatsApp | WhatsApp（需 bridge） | `allowFrom`，需 `agent-diva channels login` |
| Matrix | Matrix 协议 | `homeserver`、`userId`、`accessToken` |

## 通用配置

- **allow_from**：允许交互的用户 ID 白名单，空数组表示拒绝所有，`["*"]` 表示允许所有人
- **group_policy**（部分通道支持）：群聊策略，`mention`（仅 @ 时响应）、`open`（响应所有消息）、`allowlist`（指定群组）

## 通道路由

- 会话按 `channel:chat_id` 隔离，每个 channel+chat_id 独立对话历史
- 详见 [会话管理](/docs/concepts/session)

## 启用通道

在 `~/.agent-diva/config.json` 的 `channels` 中设置 `enabled: true` 并填入凭证，然后运行：

```bash
agent-diva gateway
```

## 相关文档

- [Telegram 配置](/channels/telegram)
- [快速开始](/start/getting-started)
