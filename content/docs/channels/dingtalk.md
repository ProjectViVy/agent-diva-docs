---
title: 钉钉（DingTalk）
description: 配置 Agent Diva 连接钉钉企业机器人。
---

# 钉钉通道

## 前置条件

- 在 [钉钉开放平台](https://open.dingtalk.com/) 创建应用
- 获取 **Client ID** 和 **Client Secret**
- 创建机器人并获取 **Robot Code**
- 配置机器人权限与消息接收

## 配置示例

```json
{
  "channels": {
    "dingtalk": {
      "enabled": true,
      "client_id": "xxx",
      "client_secret": "xxx",
      "robot_code": "xxx",
      "dm_policy": "open",
      "group_policy": "mention",
      "allow_from": ["userid_xxx"]
    }
  }
}
```

- **client_id**：钉钉应用 Client ID
- **client_secret**：钉钉应用 Client Secret
- **robot_code**：机器人 Code
- **dm_policy**：单聊策略，`open` 或 `allowlist`
- **group_policy**：群聊策略，`open` 或 `mention`（仅 @ 时响应）
- **allow_from**：用户 ID 白名单，当策略为 `allowlist` 时生效

## 启动

```bash
agent-diva gateway
```

在钉钉群或单聊中 @机器人 或发送消息即可开始对话。需在钉钉开放平台配置回调地址指向 Gateway。

## 常见问题

**Q：如何获取用户 ID？**

通过钉钉服务端 API 或管理后台查询。单聊与群聊的用户 ID 格式不同。

**Q：群聊中 @ 无响应？**

确认 `group_policy` 为 `mention` 时已正确 @机器人，且机器人已加入该群并拥有相应权限。
