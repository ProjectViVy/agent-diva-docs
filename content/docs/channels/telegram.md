---
title: Telegram
description: 配置 Agent Diva 连接 Telegram Bot。
---

# Telegram 通道

## 前置条件

- 从 [@BotFather](https://t.me/BotFather) 获取 Bot Token
- 获取你的 Telegram User ID（可在设置或通过 @userinfobot 查看）

## 配置示例

```json
{
  "channels": {
    "telegram": {
      "enabled": true,
      "token": "YOUR_BOT_TOKEN",
      "allow_from": ["YOUR_USER_ID"]
    }
  }
}
```

- **token**：BotFather 提供的 Bot Token
- **allow_from**：允许与 Bot 交互的用户 ID 列表，推荐先只填自己；空数组表示拒绝所有，`["*"]` 表示允许所有人
- **proxy**（可选）：代理 URL，如 `socks5://127.0.0.1:1080`

## 群聊与私聊

- 私聊：仅 `allow_from` 中的用户可触发回复
- 群聊：仅 `allow_from` 中的用户可触发回复；群内其他用户的消息会被忽略

## 启动

```bash
agent-diva gateway
```

在 Telegram 中向你的 Bot 发送消息即可开始对话。

## 常见问题

**Q：Bot 不响应？**

检查 `enabled` 为 `true`、`token` 正确，且你的 User ID 在 `allow_from` 中。若 `allow_from` 为空，会拒绝所有消息。

**Q：如何获取 User ID？**

在 Telegram 中向 [@userinfobot](https://t.me/userinfobot) 发送任意消息，或使用 `@getidsbot` 获取。
