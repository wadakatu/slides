# Slides

Koyo Isono ([@wadakatu](https://github.com/wadakatu)) の登壇・発表スライド集です。

[Slidev](https://sli.dev/) を使用して作成しています。

## Presentations

| Date | Title | Event |
|------|-------|-------|
| 2025-12-17 | W3C Terminal | W3C Hackathon TPAC 2025 |
| 2025-09-29 | Serena MCPのすすめ | Studio社内LT |
| 2025-07-12 | Backend Engineering Roadmap 2025-2026 | Studio社内共有 |
| 2023-01-26 | 仕事連動型・教育サービス始めました | Lancers Digital Academy |

## Setup

```bash
# Install dependencies
pnpm install

# Run presentation picker
pnpm dev

# Build all presentations
pnpm build
```

## Structure

```
.
├── presentations/     # プレゼンテーション (日付別)
│   ├── 2023-01-26/
│   ├── 2025-07-12/
│   ├── 2025-09-29/
│   └── 2025-12-17/
├── themes/            # カスタムテーマ
│   └── studio/
└── scripts/           # ビルド・選択スクリプト
```
