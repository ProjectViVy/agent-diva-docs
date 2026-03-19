---
title: 快速开始
description: 从零开始，用最少步骤完成第一次与 Agent Diva 的对话。
---

# 快速开始

**目标**：从零开始，用最少步骤完成第一次与 Agent Diva 的对话。

> **最快聊天方式**：无需配置 Channel，直接运行 `agent-diva tui` 或启动 GUI，在本地即可与 Agent 对话。若使用 GUI 安装包，安装后首次启动即可开始聊天。详见下方 Step 4。

## 前置条件

- **Rust 稳定版**（推荐用 [rustup](https://rustup.rs) 安装）
- **just**（可选，推荐，用于执行 `just run` 等命令）
- 或：直接使用预构建的 **GUI 安装包**（Windows 约 15M，无需 Rust）

## 快速设置（CLI）

### Step 1：安装 Agent Diva

**macOS / Linux（从源码）**

```bash
git clone https://github.com/ProjectViVy/agent-diva.git
cd agent-diva
just build
just install
```

或使用 `cargo` 直接安装：

```bash
cargo install --path agent-diva-cli
```

**Windows（PowerShell）**

从源码构建：

```powershell
git clone https://github.com/ProjectViVy/agent-diva.git
cd agent-diva
just build
just install
```

或下载预构建的 GUI 安装包（约 15M），双击安装即可。

> 更多安装方式见 [安装](/install)。

### Step 2：运行 onboard

```bash
agent-diva onboard
```

或使用 just：

```bash
cd agent-diva
just run onboard
```

onboard 会配置基础设置、创建 workspace，并可选配置 Provider 与 Channel。详见 [配置与引导](/start/onboarding)。

### Step 3：配置 Provider

在 `~/.agent-diva/config.json` 中填入至少一个 Provider 的 `apiKey`。例如使用 OpenRouter：

```json
{
  "providers": {
    "openrouter": {
      "apiKey": "sk-or-v1-xxxx"
    }
  },
  "agents": {
    "defaults": {
      "provider": "openrouter",
      "model": "anthropic/claude-sonnet-4"
    }
  }
}
```

> 直连 DeepSeek / OpenAI 等原生接口时，使用原始模型 ID（如 `deepseek-chat`），不要加 `provider/model` 前缀。详见 [Providers](/providers)。

### Step 4：启动聊天

**TUI（推荐，无需 Channel）**

```bash
agent-diva tui
```

**CLI 单条消息**

```bash
agent-diva agent -m "Hello from Agent Diva"
```

**GUI**

若已安装桌面 GUI，直接启动应用即可。

若 Control UI / TUI 能正常加载并对话，说明 Gateway 与 Agent 已就绪。

## 可选检查与进阶

### 在前台运行 Gateway

用于快速测试或排查问题：

```bash
agent-diva gateway
```

### 检查状态

```bash
agent-diva status
```

### 配置 Channel 后收发消息

在 `channels` 中配置 Telegram / Discord 等后，运行 `agent-diva gateway`，即可通过对应平台与 Agent 对话。详见 [Channels](/channels)。

## 环境变量

若需自定义配置或状态路径：

- `--config`：指定配置文件路径（如 `agent-diva --config /path/to/config.json onboard`）
- `--config-dir`：指定配置目录（替代 `~/.agent-diva`）
- `AGENT_DIVA__*`：按 `AGENT_DIVA__SECTION__KEY` 格式覆盖配置项（如 `AGENT_DIVA__AGENTS__DEFAULTS__MODEL`）

完整说明见 [环境变量](/help/environment)。

## 深入阅读

| 文档 | 说明 |
|------|------|
| [配置与引导](/start/onboarding) | onboard 详解与首次配置向导 |
| [安装](/install) | 各平台安装方式、安装包、从源码构建 |

## 完成后你将拥有

- 已初始化的配置与 workspace
- 至少一个可用的 Provider
- 可通过 TUI / CLI / GUI 与 Agent 对话

## 下一步

- 连接更多通道：[Channels](/channels)
- 配置 Provider 与模型：[Providers](/providers)
- 从源码构建与高级用法：[Install](/install)
