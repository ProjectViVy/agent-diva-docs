---
title: Ollama
description: 本地 Ollama 模型。
---

# Ollama

连接本地 [Ollama](https://ollama.ai/) 服务，在本地运行 Llama、Mistral、Qwen 等模型，无需外网 API Key。

## 前置条件

- 已安装并启动 Ollama：`ollama serve`
- 已拉取模型：`ollama pull llama3.2`

## 配置

```json
{
  "providers": {
    "ollama": {
      "api_key": "",
      "api_base": "http://localhost:11434/v1"
    }
  },
  "agents": {
    "defaults": {
      "provider": "ollama",
      "model": "llama3.2"
    }
  }
}
```

- **api_key**：Ollama 本地无需 Key，可留空
- **api_base**（可选）：默认 `http://localhost:11434/v1`，若 Ollama 在其他主机或端口，需相应修改

## 模型 ID

使用 Ollama 中的模型名，例如：

- `llama3.2`
- `mistral`
- `qwen2.5`
- `deepseek-r1`

运行 `ollama list` 查看已安装模型。

## 常见问题

**Q：连接失败？**

确认 Ollama 已启动（`ollama serve`），且 `api_base` 地址正确。
