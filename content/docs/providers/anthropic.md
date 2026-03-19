---
title: Anthropic
description: 直连 Anthropic Claude API。
---

# Anthropic

直连 Anthropic 官方 API，支持 Claude 3.5、Claude Opus 等模型。

## 配置

```json
{
  "providers": {
    "anthropic": {
      "api_key": "sk-ant-xxx"
    }
  },
  "agents": {
    "defaults": {
      "provider": "anthropic",
      "model": "claude-sonnet-4-5"
    }
  }
}
```

- **api_key**：Anthropic API Key
- **api_base**（可选）：Anthropic 使用专用协议，一般无需设置

## 模型 ID

直连时使用原始模型 ID，例如：

- `claude-sonnet-4-5`
- `claude-opus-4-5`
- `claude-haiku-4-5`
- `claude-3-5-sonnet-20240620`

**不要**添加 `anthropic/` 前缀。

## 环境变量

`ANTHROPIC_API_KEY` 可覆盖 `api_key`。
