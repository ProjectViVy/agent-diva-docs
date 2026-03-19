---
title: Matrix
description: 配置 Agent Diva 连接 Matrix 协议。
---

# Matrix 通道

## 前置条件

- Matrix 账号（如通过 Element 注册）
- 获取 **Access Token**（可通过 Element 设置 → 帮助与关于 → 访问 Token 获取）
- 知道 **Homeserver** 地址（如 `https://matrix.org`）
- **User ID**（格式如 `@user:matrix.org`）

## 配置示例

```json
{
  "channels": {
    "matrix": {
      "enabled": true,
      "homeserver": "https://matrix.org",
      "user_id": "@yourbot:matrix.org",
      "access_token": "syt_xxx",
      "device_id": "optional_device_id",
      "e2ee_enabled": true,
      "allow_from": ["@user:matrix.org"],
      "group_allow_from": []

    }
  }
}
```

- **homeserver**：Matrix Homeserver 地址

- **user_id**：Bot 的 Matrix User ID

- **access_token**：Matrix Access Token

- **device_id**（可选）：设备 ID，用于多设备会话

- **e2ee_enabled**：是否启用端到端加密，默认 `true`

- **allow_from**：允许交互的用户 ID 白名单；`["*"]` 表示允许所有人

- **group_allow_from**：允许交互的群组 ID 白名单

## 启动

```bash
agent-diva gateway
```

在 Matrix 房间或私信中向 Bot 发送消息即可开始对话。

## 常见问题

**Q：如何获取 Access Token？**

使用 Element 客户端：设置 → 帮助与关于 → 访问 Token。或通过 Matrix Client-Server API 登录获取。

**Q：自托管 Homeserver 如何配置？**

将 `homeserver` 设置为你的 Homeserver 地址（如 `https://your-server.com`），确保 Bot 账号在该服务器上注册。
