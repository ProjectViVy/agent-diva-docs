---
title: 飞书（Feishu）
description: 配置 Agent Diva 连接飞书（Lark）Bot。
---

# 飞书通道

## 前置条件

- 在 [飞书开放平台](https://open.feishu.cn/) 创建应用
- 获取 **App ID** 和 **App Secret**
- 启用「机器人」能力，配置消息与事件订阅
- 可选：配置 **Encrypt Key**、**Verification Token**（事件订阅验证用）

## 配置示例

```json
{
  "channels": {
    "feishu": {
      "enabled": true,
      "app_id": "cli_xxx",
      "app_secret": "xxx",
      "encrypt_key": "",
      "verification_token": "",
      "allow_from": ["ou_xxx"]
    }
  }
}
```

- **app_id**：飞书应用 App ID
- **app_secret**：飞书应用 App Secret
- **encrypt_key**（可选）：事件订阅加密密钥
- **verification_token**（可选）：事件订阅验证 Token
- **allow_from**：允许交互的用户/群组 ID 列表；`["*"]` 表示允许所有人

## 启动

```bash
agent-diva gateway
```

在飞书群聊或私信中 @Bot 或发送消息即可开始对话。需在飞书开放平台配置请求 URL 指向 Gateway 的 HTTP 端点。

## 常见问题

**Q：如何获取用户 ID？**

在飞书管理后台或通过 API 查询。群组 ID 格式类似 `oc_xxx`。

**Q：事件订阅验证失败？**

确认 `verification_token` 与飞书应用后台配置一致，且 Gateway 的 HTTP 端点可从飞书服务器访问。
