---
title: 文件系统工具
description: read_file、write_file、edit_file、list_dir 的用法与限制。
---

# 文件系统工具

Agent 可通过以下工具读写与浏览文件系统。

## read_file

读取指定路径的文件内容。

**参数**：

- `path`（必填）：文件路径

**示例**：`{"path": "/path/to/file.txt"}`

**限制**：若 `tools.restrict_to_workspace` 为 `true`，路径必须在 workspace 内。大文件会被截断并返回摘要。

## write_file

将内容写入文件。若文件已存在则覆盖。

**参数**：

- `path`（必填）：文件路径
- `content`（必填）：要写入的内容

**示例**：`{"path": "/path/to/file.txt", "content": "Hello, World!"}`

**限制**：同 read_file，受 `restrict_to_workspace` 约束。

## edit_file

对文件执行 search_replace 编辑。

**参数**：

- `path`（必填）：文件路径
- `old_string`（必填）：要替换的原文（需精确匹配）
- `new_string`（必填）：替换后的内容

**示例**：`{"path": "config.json", "old_string": "\"port\": 8080", "new_string": "\"port\": 9090"}`

**限制**：`old_string` 必须与文件内容完全一致，否则编辑失败。

## list_dir

列出目录下的文件与子目录。

**参数**：

- `path`（必填）：目录路径

**示例**：`{"path": "/workspace/project"}`

**限制**：同 read_file，受 `restrict_to_workspace` 约束。

## 配置

```json
{
  "tools": {
    "restrict_to_workspace": true
  }
}
```

- **restrict_to_workspace**：为 `true` 时，所有文件工具仅能访问 `agents.defaults.workspace` 目录；为 `false` 时可访问任意路径（需谨慎）。

## 常见问题

**Q：提示 "Path is outside allowed directory"？**

启用 `restrict_to_workspace` 时，只能访问 workspace 内的路径。检查路径是否在 workspace 下，或临时关闭该限制进行调试。

**Q：edit_file 提示找不到 old_string？**

确保 `old_string` 与文件中的内容完全一致，包括空格、换行和缩进。
