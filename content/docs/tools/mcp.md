---
title: MCP 协议
description: 通过 MCP 协议扩展 Agent 工具能力。
---

# MCP 工具

Agent Diva 支持 [Model Context Protocol (MCP)](https://modelcontextprotocol.io/)，可动态加载外部 MCP 服务器提供的工具。

## 配置

在 `config.json` 的 `tools.mcp_servers` 中声明 MCP 服务器：

```json
{
  "tools": {
    "mcp_servers": {
      "filesystem": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/dir"],
        "env": {},
        "url": "",
        "tool_timeout": 30
      },
      "github": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-github"],
        "env": {
          "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxx"
        },
        "url": "",
        "tool_timeout": 30
      }
    },
    "mcp_manager": {
      "disabled_servers": []
    }
  }
}
```

## 连接方式

### stdio（默认）

通过 `command` 和 `args` 启动子进程，经 stdin/stdout 与 MCP 服务器通信。

- **command**：可执行文件（如 `npx`、`python`）
- **args**：参数列表
- **env**：环境变量

### HTTP

通过 `url` 连接远程 MCP 服务器。若 `url` 非空，则使用 HTTP 模式，忽略 `command` 和 `args`。

## 字段说明

- **tool_timeout**：单次工具调用超时（秒），默认 30
- **mcp_manager.disabled_servers**：要禁用的服务器名称列表，用于临时关闭某个 MCP 服务

## 常见 MCP 服务器

- `@modelcontextprotocol/server-filesystem`：文件系统访问
- `@modelcontextprotocol/server-github`：GitHub API
- `@modelcontextprotocol/server-sqlite`：SQLite 查询

更多见 [MCP 官方服务器列表](https://github.com/modelcontextprotocol/servers)。

## 常见问题

**Q：MCP 服务器启动失败？**

确认 `command` 和 `args` 正确，且所需运行时（Node、Python 等）已安装。查看 Gateway 日志获取详细错误。

**Q：如何临时禁用某个 MCP 服务器？**

在 `mcp_manager.disabled_servers` 中加入服务器名称，如 `["filesystem"]`。
