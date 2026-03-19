---
title: 技能系统
description: Skill 的加载、编写与 Agent 的关系。
---

# 技能系统

## 概览

**Skill** 是 Markdown 文件（`SKILL.md`），用于扩展 Agent 能力。每个 Skill 包含 YAML frontmatter 元数据与 Markdown 正文，教 Agent 如何使用特定工具或完成特定任务。

## 加载位置

Skill 从两个位置加载，**workspace 优先**：

1. **workspace/skills/&lt;name&gt;/SKILL.md** — 用户自定义，优先级最高
2. **skills/&lt;name&gt;/SKILL.md** — 内置 Skill（随 agent-diva 仓库分发）

同名 Skill 时，workspace 覆盖内置。

## Frontmatter

```yaml
---
name: skill-name
description: 简短描述，用于 summary 展示
homepage: https://example.com
always: false
metadata: '{"nanobot":{"emoji":"🌤️","requires":{"bins":["curl"]}}}'
---
```

- **name**：Skill 名称（目录名）
- **description**：描述，用于 Agent 的 skills summary
- **homepage**：可选，参考链接
- **always**：为 `true` 时，Skill 内容全量注入到每次对话的 prompt
- **metadata**：可选 JSON，可含 `requires.bins`、`requires.env` 等依赖声明

## 与 Agent 的关系

- **always 技能**：`always: true` 且依赖满足的 Skill，其完整内容会注入到 Agent 的 system prompt
- **按需技能**：其余 Skill 以 XML summary 形式展示（name、description、location、available），Agent 可通过 `read_file` 按需加载完整内容
- **依赖检查**：`requires_bins`、`requires_env` 未满足时，`available="false"`，Agent 会看到缺失依赖提示

## 创建 Skill

1. 在 `~/.agent-diva/workspace/skills/` 下新建目录，如 `my-skill`
2. 创建 `SKILL.md`，写入 frontmatter 与正文
3. 重启 Gateway 或 TUI 后生效

示例目录结构：

```
workspace/skills/my-skill/
├── SKILL.md          # 必需
├── scripts/          # 可选，可执行脚本
├── references/       # 可选，参考文档
└── assets/           # 可选，模板等
```

## 内置 Skill 示例

- **weather**：天气查询（wttr.in、Open-Meteo）
- **github**：GitHub API 操作
- **cron**：定时任务说明
- **skill-creator**：创建 Skill 的指南

## 进一步阅读

- [架构说明](/docs/concepts/architecture)
- [工具系统](/docs/tools)
