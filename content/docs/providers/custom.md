---
title: 自定义 Provider
description: 连接任意 OpenAI 兼容 API。
---

# 自定义 Provider

通过 `custom_providers` 配置任意 OpenAI 兼容的 HTTP API，包括自托管模型、代理、私有网关等。

## 配置

在 `config.json` 的 `providers.custom_providers` 中定义：

```json
{
  "providers": {
    "custom_providers": {
      "my-local": {
        "display_name": "My Local LLM",
        "api_type": "openai",
        "api_key": "",
        "api_base": "http://localhost:8000/v1",
        "default_model": "my-model",
        "models": []
      }
    }
  },
  "agents": {
    "defaults": {
      "provider": "my-local",
      "model": "my-model"
    }
  }
}
```

## 字段说明

- **display_name**：展示名称
- **api_type**：`openai` 表示 OpenAI 兼容接口
- **api_key**：API Key（若端点需要）
- **api_base**：API 基础 URL，如 `http://localhost:8000/v1`
- **default_model**：默认模型
- **models**：可选，模型列表（用于发现与校验）
- **extra_headers**：可选，额外 HTTP 头

## 模型 ID

使用端点实际支持的模型 ID，无需加前缀。

## 示例：vLLM 自托管

```json
{
  "providers": {
    "custom_providers": {
      "vllm": {
        "display_name": "vLLM Local",
        "api_type": "openai",
        "api_base": "http://localhost:8000/v1",
        "default_model": "meta-llama/Llama-2-7b-chat-hf",
        "models": []
      }
    }
  }
}
```
