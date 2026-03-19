---
title: 提供商
description: Provider 配置、模型 ID 规则、支持的 LLM 提供商列表。
---

# 提供商（Provider）

Agent Diva 通过 **Provider** 连接各类 LLM 服务，支持 OpenRouter、OpenAI、Anthropic、DeepSeek、Groq、Gemini 等。

## 模型 ID 规则（重要）

- **直连原生 OpenAI 兼容接口**（如 DeepSeek `https://api.deepseek.com/v1`）：使用**原始模型 ID**，例如 `deepseek-chat`，**不要**自动添加 `provider/model` 前缀
- **通过 LiteLLM 风格网关**（如 OpenRouter）：使用 `provider/model` 形式，例如 `anthropic/claude-sonnet-4`

详见项目 Rulebook 中的 `provider-model-id-safety` 规则。

## 配置示例

**OpenRouter**

```json
{
  "providers": {
    "openrouter": {
      "apiKey": "sk-or-v1-xxxx"
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

**DeepSeek 直连**

```json
{
  "providers": {
    "deepseek": {
      "apiKey": "sk-xxx",
      "apiBase": "https://api.deepseek.com/v1"
    }
  },
  "agents": {
    "defaults": {
      "provider": "deepseek",
      "model": "deepseek-chat"
    }
  }
}
```

## 支持的 Provider

| Provider | 说明 |
|----------|------|
| openrouter | 聚合多模型，推荐全球用户 |
| openai | OpenAI 直连 |
| anthropic | Anthropic Claude 直连 |
| deepseek | DeepSeek 直连 |
| groq | Groq（含 Whisper 语音转录） |
| gemini | Google Gemini |
| ollama | 本地 Ollama |
| custom | 任意 OpenAI 兼容 API |

## 相关命令

- `agent-diva provider list`：列出已配置 Provider
- `agent-diva provider status`：查看当前 Provider 状态
- `agent-diva provider set`：设置当前 Provider 与模型
