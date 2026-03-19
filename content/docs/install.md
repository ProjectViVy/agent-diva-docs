---
title: 安装
description: 各平台安装 Agent Diva 的方式：源码构建、预构建安装包、依赖说明。
---

# 安装

## 前置依赖

- **Rust 稳定版**：推荐通过 [rustup](https://rustup.rs) 安装
- **just**（可选）：`cargo install just`，用于执行 `just run` 等命令

## 各平台安装方式

### macOS / Linux

**从源码构建并安装**

```bash
git clone https://github.com/ProjectViVy/agent-diva.git
cd agent-diva
just build
just install
```

等价命令：

```bash
cargo build --release -p agent-diva-cli
cargo install --path agent-diva-cli
```

**仅构建不安装**

```bash
just build
just run onboard   # 使用 target/release/agent-diva 或 target/debug/agent-diva
```

### Windows

**从源码构建（PowerShell）**

```powershell
git clone https://github.com/ProjectViVy/agent-diva.git
cd agent-diva
just build
just install
```

**预构建 GUI 安装包**

- 从 Release 页面下载 Windows 安装包（约 15M）
- 双击安装，按向导完成
- 安装后可直接启动 GUI，无需配置 Rust 环境

### 预构建安装包说明

Agent Diva 提供预构建的安装包，体积控制在约 **15M**（Windows），远小于多数 200M+ 的桌面 Agent 方案。适用于：

- 快速体验，无需安装 Rust
- 分发给非技术用户
- 在受限环境中部署

具体下载地址见项目 Release 页面。

## 验证安装

```bash
agent-diva --help
agent-diva status
```

若输出正常，说明安装成功。

## 多实例与自定义路径

使用 `--config` 或 `--config-dir` 可指定不同实例：

```bash
agent-diva --config ~/.agent-diva-telegram/config.json onboard
agent-diva --config-dir ~/.agent-diva-discord gateway
```

详见 [环境变量](/help/environment)。
