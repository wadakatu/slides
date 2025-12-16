---
theme: ./
logo: /logo.png
layout: cover
---

<h1 class="text-cyan-400 font-bold">Studio テーマプレビュー</h1>

<div class="text-4xl font-bold text-white mt-6">
  シンプルでモダンなプレゼンテーション
</div>

<div class="text-2xl text-gray-400 mt-8">
  黒背景 × シアンのアクセントカラー
</div>

---

# デフォルトレイアウト

- リスト項目1
- リスト項目2
- リスト項目3

**強調テキスト** と [リンク](https://example.com)

---
layout: section
---

# セクションタイトル

次のセクションへ

---
layout: center
---

<h1 class="text-6xl font-bold text-white">
  <span class="text-cyan-400">中央配置</span>レイアウト
</h1>

<div class="text-2xl text-gray-300 mt-6">
  このテキストは中央に配置されます
</div>

---
layout: two-cols
---

# 左カラム

<div class="space-y-4 mt-4">
  <div>左側のコンテンツ</div>
  <div class="text-cyan-400">シアンカラーのテキスト</div>
</div>

::right::

# 右カラム

<div class="space-y-4 mt-4">
  <div>右側のコンテンツ</div>
  <div class="text-gray-400">グレーのテキスト</div>
</div>

---

# コードブロック

```typescript
interface User {
  name: string
  age: number
}

const greet = (user: User): string => {
  return `Hello, ${user.name}!`
}
```

---
layout: end
---

# ありがとうございました

@wadakatu
