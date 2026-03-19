---
title: 环境变量
description: Agent Diva 支持的环境变量与路径覆盖。
---

# 环境变量

## 配置路径覆盖

**CLI**

- `--config <path>`：指定配置文件路径（如 `config.json`）
- `--config-dir <path>`：指定配置目录（替代默认 `~/.agent-diva`）

示例：

```bash
agent-diva --config /path/to/config.json onboard
agent-diva --config-dir ~/.agent-diva-instance2 gateway
```

**GUI**

- `AGENT_DIVA_CONFIG_DIR`：指定配置目录，GUI 会从该目录加载 `config.json`

## 配置项覆盖（AGENT_DIVA__*）

配置可通过环境变量覆盖，格式为 `AGENT_DIVA__SECTION__KEY` 或 `AGENT_DIVA__SECTION__SUBSECTION__KEY`，使用双下划线表示嵌套。

示例：

- `AGENT_DIVA__AGENTS__DEFAULTS__MODEL`：覆盖默认模型
- `AGENT_DIVA__AGENTS__DEFAULTS__PROVIDER`：覆盖默认 Provider
- `AGENT_DIVA__AGENTS__DEFAULTS__TEMPERATURE`：覆盖温度
- `AGENT_DIVA__CHANNELS__TELEGRAM__ENABLED`：覆盖 Telegram 启用状态
- `AGENT_DIVA__CHANNELS__TELEGRAM__TOKEN`：覆盖 Telegram Token
- `AGENT_DIVA__PROVIDERS__OPENAI__API_KEY`：覆盖 OpenAI API Key
- `AGENT_DIVA__PROVIDERS__OPENROUTER__API_KEY`：覆盖 OpenRouter API Key

环境变量优先级高于配置文件。

## 默认路径

- 配置目录：`~/.agent-diva`（或 `%USERPROFILE%\.agent-diva` on Windows）
- 配置文件：`<config_dir>/config.json`
- Workspace：由 `agents.defaults.workspace` 指定，默认 `~/.agent-diva/workspace`
