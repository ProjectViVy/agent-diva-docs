---
title: 工具系统
description: Agent Diva 内置工具总览：文件、Shell、Web、MCP、Cron 等。
---

# 工具系统总览

Agent Diva 通过 **Tool** 扩展 Agent 能力，使 LLM 能够读写文件、执行命令、搜索网页、调用 MCP 服务等。

## 内置工具

| 工具 | 说明 | 配置 |
|------|------|------|
| [read_file](/docs/tools/filesystem) | 读取文件内容 | - |
| [write_file](/docs/tools/filesystem) | 写入文件 | - |
| [edit_file](/docs/tools/filesystem) | 编辑文件（search_replace） | - |
| [list_dir](/docs/tools/filesystem) | 列出目录 | - |
| [exec](/docs/tools/shell) | 执行 Shell 命令 | `tools.exec.timeout` |
| [web_search](/docs/tools/web) | 网页搜索 | `tools.web.search` |
| [web_fetch](/docs/tools/web) | 抓取网页内容 | `tools.web.fetch` |
| [cron](/docs/tools/cron) | 定时任务与提醒 | - |
| [message](.) | 发送消息到通道 | - |
| [spawn](.) | 启动子任务 | - |
| MCP 工具 | 通过 MCP 协议动态加载 | `tools.mcp_servers` |

## 启用方式

工具在 Agent Loop 中自动注册，无需额外启用。可通过配置调整行为：

```json
{
  "tools": {
    "restrict_to_workspace": true,
    "web": {
      "search": {
        "enabled": true,
        "provider": "bocha",
        "api_key": "",
        "max_results": 5
      },
      "fetch": {
        "enabled": true
      }
    },
    "exec": {
      "timeout": 60
    },
    "mcp_servers": {},
    "mcp_manager": {
      "disabled_servers": []
    }
  }
}
```

## 安全策略

- **restrict_to_workspace**：为 `true` 时，文件类工具（read_file、write_file、edit_file、list_dir）仅能访问 workspace 目录
- **exec**：内置危险命令拦截（如 `rm -rf`、`format`、`shutdown` 等），超时由 `tools.exec.timeout` 控制
- **web_fetch**：仅允许 http/https，有重定向与超时限制

## 相关文档

- [文件系统工具](/docs/tools/filesystem)
- [Shell 执行](/docs/tools/shell)
- [Web 搜索与抓取](/docs/tools/web)
- [MCP 协议](/docs/tools/mcp)
- [Cron 定时任务](/docs/tools/cron)
