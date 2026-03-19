---
title: Shell 执行工具
description: exec 工具的用法、超时与安全限制。
---

# Shell 执行工具

`exec` 工具允许 Agent 在宿主机上执行 Shell 命令，用于运行脚本、构建、测试等。

## 参数

- `command`（必填）：要执行的命令（通过 `sh -c` 执行）

**示例**：`{"command": "ls -la /tmp"}`

## 配置

```json
{
  "tools": {
    "exec": {
      "timeout": 60
    }
  }
}
```

- **timeout**：命令超时时间（秒），默认 60。超时后进程会被终止。

## 安全限制

以下类型的命令会被**拦截**，不会执行：

- `rm -r`、`rm -rf`、`rm -fr`
- `del /f`、`del /q`（Windows）
- `rmdir /s`
- `format`、`mkfs`、`diskpart`
- `dd if=`
- 重定向到 `/dev/sd*`
- `shutdown`、`reboot`、`poweroff`
- Fork bomb 等危险模式

若命令被拦截，工具会返回错误提示。

## 工作目录

- 若配置了 `restrict_to_workspace`，命令在 workspace 目录下执行
- 否则使用系统默认工作目录

## 常见问题

**Q：命令执行超时？**

增大 `tools.exec.timeout`，或优化命令本身（如避免长时间阻塞）。

**Q：命令被 "blocked by safety guard"？**

命令触发了内置安全规则。若确需执行类似操作，需通过其他方式（如手动执行或自定义工具）完成。
