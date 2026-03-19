---
title: WhatsApp
description: 配置 Agent Diva 通过 Bridge 连接 WhatsApp。
---

# WhatsApp 通道

## 前置条件

- **WhatsApp Bridge**：Agent Diva 通过 WebSocket 连接独立的 Node.js Bridge，Bridge 使用 [@whiskeysockets/baileys](https://github.com/WhiskeySockets/Baileys) 与 WhatsApp Web 通信
- 需先单独部署并运行 Bridge 服务
- Bridge 默认连接地址：`ws://localhost:3001`

## 配置示例

```json
{
  "channels": {
    "whatsapp": {
      "enabled": true,
      "bridge_url": "ws://localhost:3001",
      "allow_from": ["+15555550123"]
    }
  }
}
```

- **bridge_url**：Bridge WebSocket 地址，默认 `ws://localhost:3001`
- **allow_from**：允许交互的手机号列表（E.164 格式）；`["*"]` 表示允许所有人

## 配对与登录

1. 启动 Bridge 服务

2. 运行 Gateway 并执行登录：

```bash
agent-diva gateway
agent-diva channels login whatsapp
```

3. 按提示扫码（Bridge 会显示 QR 码或链接）

4. 配对成功后，向该 WhatsApp 发送消息即可与 Agent 对话

## 启动

```bash
agent-diva gateway
```

确保 Bridge 已运行且已完成扫码配对。

## 常见问题

**Q：Bridge 在哪里？**

Bridge 为独立组件，需从 agent-diva 仓库或相关 Bridge 项目单独部署。详见项目文档或 `agent-diva channels login whatsapp` 的提示。

**Q：Bridge 断开后怎么办？**

重新启动 Bridge 并确保 Gateway 能连接。若会话已断开，可能需要重新执行 `channels login whatsapp` 扫码。
