---
title: Email
description: 配置 Agent Diva 通过 IMAP 与 SMTP 收发邮件。
---

# Email 通道

## 前置条件

- 支持 IMAP 的邮箱（如 Gmail、Outlook、企业邮箱）
- 若使用 Gmail，需开启「允许不够安全的应用」或使用应用专用密码（App Password）
- SMTP 凭据（用于发送回复）

## 配置示例

```json
{
  "channels": {
    "email": {
      "enabled": true,
      "consent_granted": true,
      "imap_host": "imap.gmail.com",
      "imap_port": 993,
      "imap_username": "your@email.com",
      "imap_password": "app-password",
      "imap_mailbox": "INBOX",
      "imap_use_ssl": true,
      "smtp_host": "smtp.gmail.com",
      "smtp_port": 587,
      "smtp_username": "your@email.com",
      "smtp_password": "app-password",
      "smtp_use_tls": true,
      "from_address": "your@email.com",
      "allow_from": ["allowed@example.com"]
    }
  }
}
```

- **consent_granted**：必须为 `true` 才会启用自动回复（安全考虑）
- **imap_host** / **imap_port**：IMAP 服务器地址与端口
- **imap_username** / **imap_password**：IMAP 登录凭据
- **smtp_host** / **smtp_port**：SMTP 服务器
- **from_address**：发送回复时使用的发件人地址
- **allow_from**：允许触发 Agent 回复的发件人邮箱白名单；`["*"]` 表示允许所有人
- **poll_interval_seconds**（可选）：轮询间隔，默认 30 秒
- **subject_prefix**（可选）：回复邮件主题前缀，默认 `Re: `

## 启动

```bash
agent-diva gateway
```

Agent 会定期轮询 IMAP 收件箱，对来自 `allowFrom` 的邮件自动回复。

## 常见问题

**Q：Gmail 登录失败？**

使用应用专用密码或 OAuth，不要使用主密码。在 Google 账户设置中启用「两步验证」后可生成应用专用密码。

**Q：收不到回复？**

检查 `consent_granted` 是否为 `true`，`allow_from` 是否包含发件人，以及 SMTP 配置是否正确。
