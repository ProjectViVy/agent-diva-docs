---
title: 故障排查
description: 系统化排错流程与常见问题。
---

# 故障排查

## 诊断命令

```bash
agent-diva status          # 查看配置路径、Provider、Channel 状态
agent-diva config doctor   # 完整诊断
agent-diva config validate # 验证配置
agent-diva config show     # 打印当前配置（敏感信息脱敏）
```

## Gateway 不启动

**现象**：`agent-diva gateway` 启动失败或立即退出。

**排查步骤**：

1. 检查端口占用：`lsof -i :18789`（或你配置的端口）
2. 检查配置文件：`agent-diva config validate`
3. 查看日志：`RUST_LOG=debug agent-diva gateway`
4. 检查 Provider：至少一个 Provider 需配置 `api_key`

**常见原因**：

- 端口被占用 → 修改 `gateway.port` 或关闭占用进程
- 配置 JSON 格式错误 → 修正 JSON 语法
- 缺少 Provider 配置 → 运行 `agent-diva onboard` 或手动添加 `providers.<id>.api_key`

## Channel 无响应

**现象**：Gateway 已启动，但 Telegram/Discord 等收不到回复或发不出消息。

**排查步骤**：

1. 确认通道已启用：`channels.<name>.enabled` 为 `true`
2. 检查凭证：token、app_id、secret 等是否正确
3. 检查白名单：`allow_from` 是否包含你的用户 ID
4. 群聊策略：若 `group_policy` 为 `mention`，需 @Bot 才会触发

**常见原因**：

- Token 错误或过期 → 重新获取
- 用户 ID 不在 `allow_from` → 添加你的 ID 或使用 `["*"]`（谨慎）
- 群聊未 @Bot → 在消息中 @Bot

## Provider 报错

**现象**：对话时提示 API 错误、401、429 等。

**排查步骤**：

1. 检查 `api_key` 是否正确、未过期
2. 检查 `api_base`（若自定义）是否可访问
3. 查看日志：`RUST_LOG=debug agent-diva gateway`
4. 使用 `agent-diva provider status` 查看当前 Provider 状态

**常见原因**：

- API Key 无效 → 重新获取
- 余额不足 → 充值或更换 Provider
- 网络超时 → 检查网络或代理

## 模型 ID 问题

**现象**：提示模型不存在或格式错误。

**规则**：

- **直连原生接口**（如 DeepSeek、OpenAI）：使用原始模型 ID，如 `deepseek-chat`、`gpt-4o`，**不要**加 `provider/model` 前缀
- **通过 OpenRouter**：使用 `provider/model` 形式，如 `anthropic/claude-sonnet-4`

详见 [Provider 模型 ID 规则](/docs/providers/index#模型-id-规则重要)。

## 工具执行失败

**现象**：Agent 调用工具时报错或超时。

**排查步骤**：

1. **read_file / write_file**：检查 `restrict_to_workspace`，路径是否在允许范围内
2. **exec**：检查是否触发安全拦截（如 `rm -rf`），或超时（`tools.exec.timeout`）
3. **web_search**：检查 `api_key` 与 `provider` 配置
4. **MCP**：确认 MCP 服务器可启动，检查 `mcp_servers` 配置

## 日志与调试

```bash
RUST_LOG=debug agent-diva gateway   # 调试级别日志
RUST_LOG=agent_diva=debug agent-diva gateway  # 仅 agent-diva 相关
```

## 进一步帮助

- [常见问题](/docs/help/faq)
- [环境变量](/docs/help/environment)
- [架构说明](/docs/concepts/architecture)
