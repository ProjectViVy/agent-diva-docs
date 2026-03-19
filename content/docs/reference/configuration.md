---
title: 配置参考
description: config.json 字段级参考。
---

# 配置参考

配置文件位于 `~/.agent-diva/config.json`。可通过 `--config`、`--config-dir` 或环境变量 `AGENT_DIVA__*` 覆盖。

## 顶层结构

```json
{
  "agents": {},
  "channels": {},
  "providers": {},
  "gateway": {},
  "tools": {},
  "logging": {}
}
```

## agents

### agents.defaults

| 字段 | 类型 | 默认 | 说明 |
|------|------|------|------|
| workspace | string | `~/.agent-diva/workspace` | 工作目录 |
| provider | string | - | 默认 Provider ID |
| model | string | `deepseek-chat` | 默认模型 |
| max_tokens | number | 8192 | 最大 token 数 |
| temperature | number | 0.7 | 温度 |
| max_tool_iterations | number | 20 | 最大工具调用轮数 |
| reasoning_effort | string | - | 推理模型强度：`low`、`medium`、`high` |

### agents.soul

| 字段 | 类型 | 默认 | 说明 |
|------|------|------|------|
| enabled | bool | true | 是否启用 Soul 注入 |
| max_chars | number | 4000 | 单文件最大字符数 |
| notify_on_change | bool | true | Soul 变更时是否通知 |
| bootstrap_once | bool | true | BOOTSTRAP 是否仅执行一次 |

## channels

各通道配置见 [通道文档](/docs/channels)。通用字段：

- **enabled**：是否启用
- **allow_from**：用户 ID 白名单，`["*"]` 表示允许所有人
- **token** / **api_key** 等：通道凭证

## providers

### 内置 Provider

在 `providers.<provider_id>` 下配置，如 `providers.openrouter`、`providers.deepseek`：

| 字段 | 类型 | 说明 |
|------|------|------|
| api_key | string | API Key |
| api_base | string | API 基础 URL（可选） |
| extra_headers | object | 额外 HTTP 头（可选） |

### providers.custom_providers

自定义 Provider，key 为 Provider ID：

| 字段 | 类型 | 说明 |
|------|------|------|
| display_name | string | 展示名称 |
| api_type | string | `openai` |
| api_key | string | API Key |
| api_base | string | API 基础 URL |
| default_model | string | 默认模型 |
| models | string[] | 模型列表（可选） |

## gateway

| 字段 | 类型 | 默认 | 说明 |
|------|------|------|------|
| host | string | `127.0.0.1` | 监听地址 |
| port | number | 18789 | 监听端口 |

## tools

| 字段 | 类型 | 默认 | 说明 |
|------|------|------|------|
| restrict_to_workspace | bool | false | 文件工具是否限制在 workspace |
| web.search.enabled | bool | true | 是否启用 web_search |
| web.search.provider | string | `bocha` | 搜索提供商 |
| web.search.api_key | string | - | 搜索 API Key |
| web.search.max_results | number | 5 | 最大结果数 |
| web.fetch.enabled | bool | true | 是否启用 web_fetch |
| exec.timeout | number | 60 | exec 超时（秒） |
| mcp_servers | object | {} | MCP 服务器配置 |
| mcp_manager.disabled_servers | string[] | [] | 禁用的 MCP 服务器 |

## logging

| 字段 | 类型 | 默认 | 说明 |
|------|------|------|------|
| level | string | `info` | 日志级别：trace/debug/info/warn/error |
| format | string | `text` | 格式：text/json |
| dir | string | `logs` | 日志目录 |
| overrides | object | {} | 模块级覆盖 |

## 环境变量

格式：`AGENT_DIVA__SECTION__KEY` 或 `AGENT_DIVA__SECTION__SUBSECTION__KEY`。

示例：

- `AGENT_DIVA__AGENTS__DEFAULTS__MODEL` → `agents.defaults.model`
- `AGENT_DIVA__PROVIDERS__OPENROUTER__API_KEY` → `providers.openrouter.api_key`

详见 [环境变量](/docs/help/environment)。
