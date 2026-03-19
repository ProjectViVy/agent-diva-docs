---
title: Web 搜索与抓取
description: web_search、web_fetch 的配置与用法。
---

# Web 工具

## web_search

根据查询词搜索网页，返回摘要与链接。

**参数**：

- `query`（必填）：搜索关键词

**示例**：`{"query": "Rust async runtime"}`

**配置**：

```json
{
  "tools": {
    "web": {
      "search": {
        "enabled": true,
        "provider": "bocha",
        "api_key": "",
        "max_results": 5
      }
    }
  }
}
```

- **provider**：搜索提供商，默认 `bocha`。支持 `bocha`、`brave`、`zhipu` 等
- **api_key**：部分提供商需要 API Key；也可通过环境变量 `BOCHA_API_KEY`、`BRAVE_API_KEY`、`ZHIPU_API_KEY` 配置
- **max_results**：返回结果数量，默认 5；bocha/zhipu 最高 50，其他最高 10

## web_fetch

抓取指定 URL 的网页内容，并提取正文（去除 HTML 标签）。

**参数**：

- `url`（必填）：要抓取的 URL，仅支持 http/https

**示例**：`{"url": "https://example.com/article"}`

**配置**：

```json
{
  "tools": {
    "web": {
      "fetch": {
        "enabled": true
      }
    }
  }
}
```

- **enabled**：是否启用 web_fetch，默认 `true`

## 常见问题

**Q：web_search 返回空或报错？**

检查 `provider` 与 `api_key` 是否正确。部分提供商需单独申请 API Key。

**Q：web_fetch 超时？**

默认有超时与重定向限制。若目标站点响应慢，可能无法完整抓取。
