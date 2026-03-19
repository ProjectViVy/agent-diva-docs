---
title: OpenAI
description: 直连 OpenAI API。
---

# OpenAI

直连 OpenAI 官方 API，支持 GPT-4o、GPT-4、o1 等模型。

## 配置

```json
{
  "providers": {
    "openai": {
      "api_key": "sk-xxx"
    }
  },
  "agents": {
    "defaults": {
      "provider": "openai",
      "model": "gpt-4o"
    }
  }
}
```

- **api_key**：OpenAI API Key
- **api_base**（可选）：默认 `https://api.openai.com/v1`，可改为代理或兼容端点

## 模型 ID

直连时使用原始模型 ID，例如：

- `gpt-4o`
- `gpt-4o-mini`
- `gpt-4-turbo`
- `o1-preview`
- `o1-mini`

**不要**添加 `openai/` 前缀。

## 环境变量

`OPENAI_API_KEY` 可覆盖 `api_key`。
