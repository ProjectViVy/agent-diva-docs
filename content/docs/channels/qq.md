---
title: QQ
description: 配置 Agent Diva 连接 QQ 频道机器人。
---

# QQ 通道

## 前置条件

- 在 [QQ 开放平台](https://q.qq.com/) 创建机器人应用
- 获取 **App ID** 和 **App Secret**
- 将机器人接入 QQ 频道或 Guild

## 配置示例

```json
{
  "channels": {
    "qq": {
      "enabled": true,
      "app_id": "xxx",
      "secret": "xxx",
      "allow_from": ["user_id_xxx"]
    }
  }
}
```

- **app_id**：QQ 机器人应用 App ID
- **secret**：QQ 机器人应用 Secret
- **allow_from**：允许交互的用户 ID 列表；`["*"]` 表示允许所有人

## 启动

```bash
agent-diva gateway
```

在 QQ 频道中 @Bot 或发送消息即可开始对话。需在 QQ 开放平台配置机器人回调地址指向 Gateway。

## 常见问题

**Q：QQ 机器人支持哪些场景？**

以 QQ 开放平台当前能力为准，通常支持频道（Guild）与私信。具体以官方文档为准。

**Q：如何获取用户 ID？**

通过 QQ 机器人 API 或事件 payload 中的用户标识获取。
