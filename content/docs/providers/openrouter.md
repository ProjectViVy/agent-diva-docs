---
title: OpenRouter
description: 通过 OpenRouter 聚合多模型。
---

# OpenRouter

OpenRouter 是模型聚合网关，可访问 Anthropic、OpenAI、DeepSeek、Google 等多厂商模型，统一 API 与计费。

## 适用场景

- 希望一个 API Key 访问多家模型
- 需要快速切换模型而不改配置
- 全球用户推荐（延迟与可用性较好）

## 配置

```json
{
  "providers": {
    "openrouter": {
      "api_key": "sk-or-v1-xxxx"
    }
  },
  "agents": {
    "defaults": {
      "provider": "openrouter",
      "model": "anthropic/claude-sonnet-4"
    }
  }
}
```

- **api_key**：OpenRouter API Key，可从 [openrouter.ai](https://openrouter.ai/) 获取
- **api_base**（可选）：默认 `https://openrouter.ai/api/v1`，一般无需修改

## 模型 ID 规则

OpenRouter 使用 `provider/model` 形式，例如：

- `anthropic/claude-sonnet-4`
- `openai/gpt-4o`
- `deepseek/deepseek-chat`
- `google/gemini-2.0-flash-exp`

## 环境变量

`OPENROUTER_API_KEY` 可覆盖 `api_key`。
