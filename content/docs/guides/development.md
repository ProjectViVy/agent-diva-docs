---
title: 开发指南
description: 从源码构建、扩展 Provider/Channel/Tool、测试与 CI。
---

# 开发指南

## 前置条件

- **Rust 稳定版**（[rustup](https://rustup.rs)）
- **just**（`cargo install just`）
- **Node.js**（可选，仅 GUI 开发需要）

## 构建与验证

```bash
just build          # 构建所有 crate
just build-release  # Release 构建
just test           # 运行测试
just check          # Clippy 检查
just fmt            # 格式化
just ci             # fmt-check + check + test（完整 CI）
```

无 just 时：

```bash
cargo build --all
cargo test --all
cargo clippy --all -- -D warnings
cargo fmt --all
```

## 本地运行

```bash
just run gateway    # 启动 Gateway
just run tui        # 启动 TUI
just run onboard    # 运行 onboard
```

或直接：

```bash
cargo run -p agent-diva-cli -- gateway
```

## 扩展 Provider

1. 实现 `LLMProvider` trait（`agent-diva-providers/src/base.rs`）
2. 在 `providers.yaml` 中注册，或通过 `custom_providers` 配置
3. 遵守 [Provider 模型 ID 规则](/docs/providers/index#模型-id-规则重要)

关键方法：`chat`、`chat_stream`、`get_default_model`。

## 扩展 Channel

1. 实现 `ChannelHandler` trait（`agent-diva-channels/src/base.rs`）
2. 在 `ChannelsConfig` 中增加配置结构体
3. 在 Channel Manager 中注册并启动

关键方法：`name`、`is_running`、`start`、`stop`，以及订阅 Message Bus 的入站/出站消息。

## 扩展 Tool

1. 实现 `Tool` trait（`agent-diva-tools/src/base.rs`）
2. 在 Agent Loop 的 `loop_tools.rs` 中注册到 `ToolRegistry`

关键方法：`name`、`description`、`parameters`、`execute`、`validate_params`。

## 测试

```bash
cargo test -p agent-diva-core     # 单 crate
cargo test message_bus            # 按名称匹配
cargo test -- --nocapture         # 显示 stdout
```

## 相关

- [架构说明](/docs/concepts/architecture)
- [配置参考](/docs/reference/configuration)
