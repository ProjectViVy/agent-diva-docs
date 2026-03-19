---
title: 常见问题
description: Agent Diva 安装、配置、运行中的常见问题与排查。
---

# 常见问题

## 安装与环境

**Q：Windows 上安装失败？**

确保已安装 Rust（rustup）和 Visual Studio Build Tools。若使用预构建 GUI 安装包，无需 Rust。

**Q：`just run` 找不到命令？**

安装 just：`cargo install just`。或直接用 `cargo run -p agent-diva-cli -- <子命令>`。

**Q：和 nanobot 能共存吗？**

可以。Agent Diva 使用 `~/.agent-diva/`，nanobot 使用 `~/.nanobot/`，配置路径不同，不会冲突。

## 配置与运行

**Q：`agent-diva status` 显示 Provider 未配置？**

运行 `agent-diva onboard`，在 `~/.agent-diva/config.json` 的 `providers` 中填入至少一个 `apiKey`。

**Q：模型 ID 报错？**

直连 DeepSeek / OpenAI 等原生接口时，使用原始模型 ID（如 `deepseek-chat`），不要加 `provider/model` 前缀。详见 [Providers](/providers/index)。

**Q：Gateway 启动后 Telegram 没反应？**

检查 `channels.telegram.enabled` 为 `true`，`token` 正确，`allowFrom` 包含你的 User ID。

## 性能与资源

**Q：安装包有多大？**

Windows GUI 约 15M，CLI 二进制更小。远小于多数 200M+ 的 Electron 方案。

**Q：日志会打印敏感信息吗？**

API Key 等敏感字段在日志中会脱敏。可通过 `logging` 配置调整日志级别与输出。

## 多实例

**Q：如何跑多个实例？**

使用 `--config` 或 `--config-dir` 指定不同配置路径，例如：

```bash
agent-diva --config ~/.agent-diva-telegram/config.json gateway
agent-diva --config ~/.agent-diva-discord/config.json gateway
```

每个实例需使用不同端口（若涉及 HTTP 服务）。
