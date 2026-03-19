---
title: DeepSeek
description: 直连 DeepSeek API。
---

# DeepSeek

直连 DeepSeek 官方 OpenAI 兼容 API。

## 配置

```json
{
  "providers": {
    "deepseek": {
      "api_key": "sk-xxx",
      "api_base": "https://api.deepseek.com/v1"
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

- **api_key**：DeepSeek API Key
- **api_base**（可选）：默认 `https://api.deepseek.com/v1`，一般无需修改

## 模型 ID 规则（重要）

直连 DeepSeek 时，使用**原始模型 ID**：

- `deepseek-chat`
- `deepseek-coder`
- `deepseek-reasoner`

**不要**自动添加 `deepseek/` 前缀。仅当通过 OpenRouter 等 LiteLLM 网关时，才使用 `deepseek/deepseek-chat` 形式。

## 环境变量

`DEEPSEEK_API_KEY` 可覆盖 `api_key`。
