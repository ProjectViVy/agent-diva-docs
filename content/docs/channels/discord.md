---
title: Discord
description: 配置 Agent Diva 连接 Discord Bot。
---

# Discord 通道

## 前置条件

- 在 [Discord Developer Portal](https://discord.com/developers/applications) 创建应用并添加 Bot
- 获取 Bot Token
- 启用 MESSAGE CONTENT INTENT（Bot 需读取消息内容）
- 邀请 Bot 到服务器（需 `bot` 和 `applications.commands` 权限）

## 配置示例

```json
{
  "channels": {
    "discord": {
      "enabled": true,
      "token": "YOUR_BOT_TOKEN",
      "allow_from": ["USER_ID_1", "USER_ID_2"]
    }
  }
}
```

- **token**：Discord Bot Token
- **allowFrom**：允许与 Bot 交互的用户 ID 列表；`["*"]` 表示允许所有人
- **gateway_url**（可选）：自定义 Gateway 地址，默认 `wss://gateway.discord.gg/?v=10&encoding=json`
- **intents**（可选）：Gateway 订阅的 intents，默认已包含 GUILDS、GUILD_MESSAGES、DIRECT_MESSAGES、MESSAGE_CONTENT

## 启动

```bash
agent-diva gateway
```

在 Discord 中向 Bot 发送私信或在已加入的服务器中 @Bot 即可开始对话。

## 群聊策略

Discord 通道使用 `allow_from` 控制可交互用户。在服务器频道中，Bot 会响应来自 `allowFrom` 白名单用户的消息；若 `allowFrom` 为空，则拒绝所有消息。

## 常见问题

**Q：Bot 上线但收不到消息？**

检查 MESSAGE CONTENT INTENT 是否已启用，且 Bot 已被正确邀请到服务器。

**Q：如何获取用户 ID？**

在 Discord 设置中开启「开发者模式」，右键用户选择「复制用户 ID」。
