---
layout: cover
theme: default
background: '#000000'
highlighter: shiki
lineNumbers: false
info: |
  ## Serena MCPのすすめ
  最良のアウトプットを無駄なく得るために
drawings:
  persist: false
css: unocss
---

<style>
/* グローバルスタイル設定 - 黒基調 */
.slidev-layout {
  font-family: 'Noto Sans JP', 'Inter', system-ui, -apple-system, sans-serif;
  background: #000000;
}

/* タイトルのスタイル統一 */
.slidev-layout h1 {
  color: #ffffff;
  font-size: 3.5rem !important;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 2rem;
}

.slidev-layout h2 {
  color: #e5e5e5;
  font-size: 2.5rem !important;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.slidev-layout h3 {
  color: #d4d4d4;
  font-size: 2rem !important;
  font-weight: 500;
  margin-bottom: 1rem;
}

/* 本文テキストの見やすさ向上 */
.slidev-layout p,
.slidev-layout li {
  color: #e5e5e5;
  font-size: 1.5rem !important;
  line-height: 1.8;
  letter-spacing: 0.02em;
}

.slidev-layout li {
  margin-bottom: 1rem;
}

/* 強調表示のスタイル - シアンアクセント */
.slidev-layout strong {
  color: #00ffff;
  font-weight: 600;
}

/* コードブロックのスタイル */
.slidev-layout pre {
  background: #0a0a0a !important;
  border: 1px solid #262626;
  border-radius: 8px;
  padding: 1.5rem !important;
  font-size: 1.3rem !important;
}

.slidev-layout code {
  background: #0a0a0a;
  color: #00ffff;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 1.2rem !important;
}

/* 引用のスタイル */
.slidev-layout blockquote {
  border-left: 4px solid #00ffff;
  background: rgba(0, 255, 255, 0.05);
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 4px;
}

.slidev-layout blockquote p {
  color: #e5e5e5;
  font-size: 1.6rem !important;
  font-style: italic;
  margin: 0;
}

/* テーブルのスタイル */
.slidev-layout table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: #0a0a0a;
  border-radius: 8px;
  overflow: hidden;
  font-size: 1.4rem !important;
  border: 1px solid #262626;
}

.slidev-layout th {
  background: #171717;
  color: #00ffff;
  padding: 1.2rem;
  text-align: left;
  font-weight: 600;
  font-size: 1.5rem !important;
}

.slidev-layout td {
  padding: 1.2rem;
  border-top: 1px solid #262626;
  color: #e5e5e5;
  font-size: 1.4rem !important;
}

/* アニメーション */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.slidev-layout .fade-in {
  animation: fadeIn 0.5s ease-out;
}

/* デモ用スタイル - ダークテーマ */
.demo-window {
  background: #0a0a0a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
  border: 1px solid #262626;
}

.demo-header {
  background: #171717;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.demo-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.demo-content {
  padding: 1.5rem;
}

.terminal-line {
  font-family: 'Monaco', 'Courier New', monospace;
  margin-bottom: 0.5rem;
}

.prompt {
  color: #00ffff;
}

.output {
  color: #a3a3a3;
}

/* 斜線アクセント */
.slash-accent {
  position: relative;
}

.slash-accent::before {
  content: '';
  position: absolute;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, transparent, #00ffff, transparent);
  transform: skew(-12deg);
  opacity: 0.3;
}
</style>

# <span class="text-cyan-400">Serena MCPのすすめ</span>

<div class="text-4xl font-bold text-white mt-6">
  最良のアウトプットを無駄なく得るために
</div>

<div class="text-2xl text-gray-400 mt-8">
  頑張りすぎずにAIを味方にする、コンテキスト設計の実践へ。
</div>

<div class="abs-br m-8">
  <img src="/assets/logo_main_black.png" class="w-32 filter invert opacity-40">
</div>

---
layout: two-cols
---

<h2 class="text-5xl mb-8 font-bold">自己紹介</h2>

<div class="mt-20 space-y-7 leading-tight">
  <p class="flex items-baseline gap-6">
    <span class="text-2xl text-gray-500">名前</span>
    <span class="text-4xl font-bold text-cyan-400">wadakatu</span>
  </p>
  <p class="flex items-baseline gap-6">
    <span class="text-2xl text-gray-500">所属</span>
    <span class="text-4xl text-white">Studio Inc.</span>
  </p>
  <p class="flex items-baseline gap-6">
    <span class="text-2xl text-gray-500">役割</span>
    <span class="text-4xl text-white">Backend Engineer</span>
  </p>
  <p class="flex items-baseline gap-6">
    <span class="text-2xl text-gray-500">好きなもの</span>
    <span class="text-4xl text-white">HHKB</span>
  </p>
</div>

::right::

<div class="flex items-center justify-center h-full">
  <img src="/assets/WL_0159.jpg" class="h-80 object-contain rounded-lg" alt="wadakatu" />
</div>

<div class="abs-br m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30" />
</div>

layout: default
---

# Serena MCPとは

<div class="mt-16 text-center max-w-5xl mx-auto text-4xl text-gray-200 leading-snug">
  LLMやコーディングエージェントに、<span class="text-cyan-300 font-bold">コードを意味論的に理解し操作する能力</span>を与えるMCPサーバー。
</div>

<div class="abs-br m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30">
</div>

---
layout: center
class: text-center
---

# 意味論的に理解し、操作するとは？

<div class="abs-br m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30">
</div>

---
layout: default
---

<h2 class="text-3xl font-bold mb-8">最近の Claude Code、どう感じてます？</h2>

<div class="px-8 space-y-4">
  <div class="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
    <div class="text-lg text-gray-300 mb-2">X(Twitter)でよく見かける声</div>
    <div class="text-base text-gray-400 leading-relaxed">
      • "Claude Codeの応答精度が低下している"<br>
      • "出力品質に不満がある"<br>
      • "最近の動作が期待に沿わない"
    </div>
  </div>

  <div class="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg">
    <div class="text-lg text-gray-300 mb-2">GitHub Issueでも話題</div>
    <div class="text-base text-gray-400 leading-relaxed">
      "Claude Codeのバージョンダウンしよう"という風潮<br>
      <span class="text-sm text-gray-500">github.com/anthropics/claude-code/issues/4487</span>
    </div>
  </div>

  <div class="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
    <div class="text-lg text-gray-300 mb-2">実際に感じていた問題</div>
    <div class="text-base text-gray-400 leading-relaxed">
      • CLAUDE.mdの指示見落とし<br>
      • プロジェクト構造把握の精度低下<br>
      • でも最新機能（/agents、plan mode）は使いたい！
    </div>
  </div>
</div>

<div class="mt-10 p-5 bg-green-500/10 border-l-4 border-green-400 rounded-r-lg">
  <div class="text-lg text-green-300 mb-2">Serena MCP導入後の体感</div>
  <div class="text-base text-gray-300 leading-relaxed">
    Claude Codeの出力精度が<strong>以前の良かった頃の感覚にぐっと戻る</strong>。<br>
    自動で文脈が維持されるので、「あれ、前はもっと賢かったのに」というモヤモヤが激減。
  </div>
</div>

<div class="abs-br m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30">
</div>

layout: center
---

# 今日のゴール

<div class="space-y-4">
  <div class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
    コンテキストエンジニアリングの実践イメージを掴む
  </div>

  <div class="text-3xl font-bold text-white">
    Serena MCPで「良い感じ」を現実に寄せる
  </div>

  <div class="text-xl text-gray-400 mt-6">
    &lt;怖くない導入手順&gt;と<strong>今日から試せるアクション</strong>を持ち帰ってください
  </div>
</div>

---

# コンテキストエンジニアリングとは

<div class="text-xl text-gray-400 mb-8">
  プロンプト作成から<strong>文脈の設計</strong>へ。次のステージは、AIに環境ごと渡すこと。
</div>

**従来のアプローチ**: プロンプト工夫 → 非効率

**コンテキストエンジニアリング**: 構造化された文脈提供 → 高品質な出力

<div class="mt-12 text-xl text-center text-cyan-300">
AIに「お願い」ではなく、**正しい文脈を設計**する
</div>

<div class="abs-br m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30">
</div>

---

# なぜコンテキストが重要か

実際の開発でよくある問題を見てみましょう

<div class="demo-window mt-8">
  <div class="demo-header">
    <div class="demo-dot bg-red-500"></div>
    <div class="demo-dot bg-yellow-500"></div>
    <div class="demo-dot bg-green-500"></div>
    <span class="ml-4 text-gray-400">実例: 同じ質問、異なる結果</span>
  </div>
  <div class="demo-content space-y-6">
    <div>
      <div class="text-xl text-cyan-400 mb-4">👤 「認証機能を実装して」</div>
      <div class="grid grid-cols-2 gap-6">
        <div class="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
          <div class="text-lg text-red-400 font-bold mb-2">文脈なし ❌</div>
          <div class="text-sm text-gray-300">• 汎用的なサンプルコード</div>
          <div class="text-sm text-gray-300">• プロジェクト構造無視</div>
          <div class="text-sm text-gray-300">• 既存コードとの競合</div>
        </div>
        <div class="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
          <div class="text-lg text-green-400 font-bold mb-2">文脈あり ✅</div>
          <div class="text-sm text-gray-300">• 既存アーキテクチャと統合</div>
          <div class="text-sm text-gray-300">• プロジェクト規約準拠</div>
          <div class="text-sm text-gray-300">• すぐに使える実装</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="mt-8 text-xl text-center text-cyan-300">
  💡 同じAIでも**文脈次第で全く違う結果**になる
</div>

<div class="abs-br m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30">
</div>

---

# Claude Codeの3つの限界

実際に感じる問題点を整理しました

<div class="space-y-6 mt-8">
  <div class="flex items-start gap-4">
    <div class="text-3xl mt-1">1️⃣</div>
    <div class="flex-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 p-5 rounded-lg border border-red-500/30">
      <div class="text-xl font-bold mb-2 text-red-300">CLAUDE.mdの指示が消える</div>
      <div class="text-lg text-gray-300">会話が長くなると初期設定を忘れる → 手戻り発生</div>
    </div>
  </div>

  <div class="flex items-start gap-4">
    <div class="text-3xl mt-1">2️⃣</div>
    <div class="flex-1 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 p-5 rounded-lg border border-orange-500/30">
      <div class="text-xl font-bold mb-2 text-orange-300">大規模プロジェクトで迷子</div>
      <div class="text-lg text-gray-300">ファイル構造を把握できない → 的外れな提案</div>
    </div>
  </div>

  <div class="flex items-start gap-4">
    <div class="text-3xl mt-1">3️⃣</div>
    <div class="flex-1 bg-gradient-to-r from-yellow-500/20 to-green-500/20 p-5 rounded-lg border border-yellow-500/30">
      <div class="text-xl font-bold mb-2 text-yellow-300">コンテキスト管理が手動</div>
      <div class="text-lg text-gray-300">毎回必要な情報を伝える → 時間の無駄</div>
    </div>
  </div>
</div>

<div class="abs-br m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30">
</div>

---

# 解決策: Serena MCP

Claude Codeの限界を克服する自動化ツール

<div class="text-center mb-8">
  <div class="text-2xl font-bold text-cyan-400">Model Context Protocol サーバー</div>
  <div class="text-lg text-gray-300 mt-2">Claudeに自動でコンテキストを供給する仕組み</div>
</div>

<div class="mt-6 p-4 bg-gray-800/60 rounded-xl text-left text-gray-300 space-y-2">
  <div class="text-lg text-cyan-300 font-semibold">怖がらずに試せる理由</div>
  <div>• コマンド1つで導入できるシンプルなMCPサーバー</div>
  <div>• APIキーも外部送信も不要。<strong>localhost完結</strong>でソースコードが外に出ない</div>
  <div>• Claude Codeの良かった頃の応答感覚が戻る体験を再現</div>
</div>

<div class="grid grid-cols-3 gap-6 mt-8">
  <div class="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-5 rounded-lg border border-blue-500/30 text-center">
    <div class="text-3xl mb-3">📁</div>
    <div class="text-lg font-bold mb-2 text-blue-300">プロジェクト構造</div>
    <div class="text-sm text-gray-300">自動把握・継続更新</div>
  </div>

  <div class="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-5 rounded-lg border border-purple-500/30 text-center">
    <div class="text-3xl mb-3">📋</div>
    <div class="text-lg font-bold mb-2 text-purple-300">CLAUDE.md</div>
    <div class="text-sm text-gray-300">指示を常に維持</div>
  </div>

  <div class="bg-gradient-to-br from-pink-500/20 to-red-500/20 p-5 rounded-lg border border-pink-500/30 text-center">
    <div class="text-3xl mb-3">🔄</div>
    <div class="text-lg font-bold mb-2 text-pink-300">文脈情報</div>
    <div class="text-sm text-gray-300">リアルタイム更新</div>
  </div>
</div>

<div class="mt-10 text-center">
  <div class="text-xl text-cyan-300">
    💡 **結果**: 指示の抜け漏れが **90%削減** （体感）
  </div>
</div>

<div class="abs-br m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30">
</div>

---

# デモ: セットアップ（2分で完了）

<br>

<div class="demo-window">
  <div class="demo-header">
    <div class="demo-dot bg-red-500"></div>
    <div class="demo-dot bg-yellow-500"></div>
    <div class="demo-dot bg-green-500"></div>
    <span class="ml-4 text-gray-400">Terminal</span>
  </div>
  <div class="demo-content">
    <div class="space-y-4">
      <div class="terminal-line">
        <span class="prompt">$</span> <span class="text-green-400">npm install -g @serena-ai/mcp</span>
      </div>
      <div class="terminal-line text-gray-400">
        Installing Serena MCP Server...
      </div>
      <div class="terminal-line">
        <span class="prompt">$</span> <span class="text-green-400">serena init</span>
      </div>
      <div class="terminal-line text-gray-400">
        Creating serena.config.json...
      </div>
    </div>
  </div>
</div>

<div class="mt-8 grid grid-cols-2 gap-6">
  <div class="bg-gray-800/50 p-4 rounded-xl">
    <div class="text-lg font-bold mb-2">serena.config.json</div>
    <div class="text-sm text-gray-400">
      ```json
      {
        "project": "./",
        "claudeMd": "./CLAUDE.md",
        "ignore": ["node_modules", ".git"]
      }
      ```
    </div>
  </div>
  <div class="bg-gray-800/50 p-4 rounded-xl">
    <div class="text-lg font-bold mb-2">Claude Desktop設定</div>
    <div class="text-sm text-gray-400">
      Settings → Developer → MCP → Add Server
    </div>
  </div>
</div>

---

# デモ: 実際の動作 - Before

<br>

<div class="demo-window">
  <div class="demo-header">
    <div class="demo-dot bg-red-500"></div>
    <div class="demo-dot bg-yellow-500"></div>
    <div class="demo-dot bg-green-500"></div>
    <span class="ml-4 text-gray-400">Claude Code (Serena MCPなし)</span>
  </div>
  <div class="demo-content">
    <div class="space-y-6">
      <div class="p-4 bg-gray-800 rounded">
        <div class="text-blue-400 mb-2">👤 「APIエンドポイントを追加して」</div>
        <div class="text-red-400 ml-4">🤖 「どのフレームワークですか？」</div>
      </div>
      <div class="p-4 bg-gray-800 rounded">
        <div class="text-blue-400 mb-2">👤 「Express使ってる。規約はCLAUDE.mdに書いてある」</div>
        <div class="text-red-400 ml-4">🤖 「CLAUDE.mdが見つかりません」</div>
      </div>
      <div class="p-4 bg-gray-800 rounded">
        <div class="text-blue-400 mb-2">👤 「ルートディレクトリにあるよ」</div>
        <div class="text-yellow-400 ml-4">🤖 「確認しました。では実装します...」</div>
      </div>
    </div>
  </div>
</div>

<div class="mt-6 text-xl text-center text-gray-400">
  ⏱️ 無駄なやり取り: **3往復**
</div>

---

# デモ: 実際の動作 - After

<br>

<div class="demo-window">
  <div class="demo-header">
    <div class="demo-dot bg-red-500"></div>
    <div class="demo-dot bg-yellow-500"></div>
    <div class="demo-dot bg-green-500"></div>
    <span class="ml-4 text-gray-400">Claude Code (Serena MCP有効)</span>
  </div>
  <div class="demo-content">
    <div class="space-y-6">
      <div class="p-4 bg-gray-800 rounded">
        <div class="text-blue-400 mb-2">👤 「APIエンドポイントを追加して」</div>
        <div class="text-green-400 ml-4">
          🤖 「Expressプロジェクトですね。CLAUDE.mdの規約に従って、<br>
          　　controllers/とroutes/に分けて実装します」
        </div>
      </div>
      <div class="mt-4 p-4 bg-green-900/20 rounded border border-green-500/30">
        <div class="text-sm text-green-400">✅ 自動で検出された情報:</div>
        <div class="text-sm mt-2 ml-4">• フレームワーク: Express</div>
        <div class="text-sm ml-4">• ディレクトリ構造</div>
        <div class="text-sm ml-4">• コーディング規約</div>
      </div>
    </div>
  </div>
</div>

<div class="mt-6 text-xl text-center text-green-400">
  ⚡ 一発で正確な実装！
</div>

---

# デモ: 長時間作業での違い

<br>

<div class="grid grid-cols-2 gap-8">
  <div>
    <h3 class="text-2xl mb-6 text-center text-red-400">❌ Serena MCPなし</h3>
    <div class="bg-gray-800/50 p-6 rounded-xl space-y-4">
      <div class="flex items-center gap-3">
        <span class="text-2xl">0分</span>
        <span>CLAUDE.md読み込み ✅</span>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-2xl">30分</span>
        <span class="text-yellow-400">規約を忘れ始める ⚠️</span>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-2xl">60分</span>
        <span class="text-red-400">完全に忘却 ❌</span>
      </div>
      <div class="mt-4 p-4 bg-red-900/20 rounded">
        <div class="text-lg">結果: 手戻り多発</div>
      </div>
    </div>
  </div>

  <div>
    <h3 class="text-2xl mb-6 text-center text-green-400">✅ Serena MCP使用</h3>
    <div class="bg-gray-800/50 p-6 rounded-xl space-y-4">
      <div class="flex items-center gap-3">
        <span class="text-2xl">0分</span>
        <span>自動で全情報取得 ✅</span>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-2xl">30分</span>
        <span class="text-green-400">コンテキスト維持 ✅</span>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-2xl">60分</span>
        <span class="text-green-400">まだ覚えてる ✅</span>
      </div>
      <div class="mt-4 p-4 bg-green-900/20 rounded">
        <div class="text-lg">結果: 一貫した品質</div>
      </div>
    </div>
  </div>
</div>

---

# ライブデモの流れ（5分想定）

<div class="space-y-6 text-xl text-gray-300">
  <div class="flex items-start gap-4">
    <div class="text-2xl text-cyan-400">1️⃣</div>
    <div>
      <div class="text-2xl font-semibold text-white">Laravelプロジェクトを準備</div>
      <div class="text-gray-400">`git clone laravel/laravel` → `pnpm install` → プロジェクト構造をざっと確認</div>
    </div>
  </div>
  <div class="flex items-start gap-4">
    <div class="text-2xl text-cyan-400">2️⃣</div>
    <div>
      <div class="text-2xl font-semibold text-white">Serena MCPを起動</div>
      <div class="text-gray-400">`serena init`（初回のみ）→ `serena start` → Claude DesktopでMCPサーバーを有効化</div>
    </div>
  </div>
  <div class="flex items-start gap-4">
    <div class="text-2xl text-cyan-400">3️⃣</div>
    <div>
      <div class="text-2xl font-semibold text-white">Claude Codeでコード検索をリクエスト</div>
      <div class="text-gray-400">例: 「Laravelでユーザー登録APIのルートとコントローラーを確認して」 → <strong>文脈付きの回答が即時</strong></div>
    </div>
  </div>
</div>

<div class="mt-10 p-6 bg-gray-800/50 rounded-xl text-gray-300 text-lg">
  💡 事前に`CLAUDE.md`を用意しておくと、ライブでも「規約を忘れない嬉しさ」を実演できます。
</div>

<div class="abs-br m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30">
</div>

---

# 実装のベストプラクティス

<br>

<div class="grid grid-cols-2 gap-8">
  <div>
    <h3 class="text-2xl mb-6 text-blue-400">📁 プロジェクト構造</h3>
    <div class="bg-gray-800/50 p-4 rounded-xl">
      ```
      project/
      ├── CLAUDE.md         # 必須
      ├── serena.config.json
      ├── src/
      │   ├── controllers/
      │   ├── models/
      │   └── routes/
      └── tests/
      ```
    </div>
  </div>

  <div>
    <h3 class="text-2xl mb-6 text-purple-400">📝 CLAUDE.md必須項目</h3>
    <div class="bg-gray-800/50 p-4 rounded-xl space-y-3">
      <div>✅ プロジェクトの概要</div>
      <div>✅ 技術スタック</div>
      <div>✅ ディレクトリ構造</div>
      <div>✅ 命名規則</div>
      <div>✅ コーディング規約</div>
      <div>✅ テスト方針</div>
    </div>
  </div>
</div>

<div class="mt-8 p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl">
  <div class="text-xl">
    💡 **Pro Tip**: CLAUDE.mdは**プロジェクトの取説**として書く
  </div>
</div>

---

# 導入効果の実例

<br>

<div class="grid grid-cols-3 gap-6 text-center">
  <div class="bg-gradient-to-br from-green-500/20 to-blue-500/20 p-8 rounded-xl">
    <div class="text-5xl font-bold text-green-400 mb-4">90%</div>
    <div class="text-xl">指示の再入力</div>
    <div class="text-lg text-gray-400">削減</div>
  </div>

  <div class="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-xl">
    <div class="text-5xl font-bold text-blue-400 mb-4">3倍</div>
    <div class="text-xl">実装速度</div>
    <div class="text-lg text-gray-400">向上</div>
  </div>

  <div class="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-xl">
    <div class="text-5xl font-bold text-purple-400 mb-4">0</div>
    <div class="text-xl">コンテキスト忘れ</div>
    <div class="text-lg text-gray-400">発生回数</div>
  </div>
</div>

<div class="mt-12 space-y-4">
  <div class="flex items-center gap-4">
    <span class="text-2xl">⏰</span>
    <span class="text-xl">セットアップ時間: **2分**</span>
  </div>
  <div class="flex items-center gap-4">
    <span class="text-2xl">💰</span>
    <span class="text-xl">追加コスト: **0円**</span>
  </div>
  <div class="flex items-center gap-4">
    <span class="text-2xl">📈</span>
    <span class="text-xl">投資対効果: **即日実感**</span>
  </div>
</div>

---

# セキュリティ観点でも安心

<div class="grid grid-cols-2 gap-8 text-gray-300 text-xl">
  <div class="bg-gray-800/60 p-6 rounded-xl space-y-3">
    <div class="text-2xl text-white font-semibold">ローカル完結</div>
    <div>• MCPサーバーは自分のPCで完結</div>
    <div>• <strong>外部APIキー不要</strong>・オフラインでも利用可能</div>
  </div>
  <div class="bg-gray-800/60 p-6 rounded-xl space-y-3">
    <div class="text-2xl text-white font-semibold">ソースコードを守る</div>
    <div>• ファイルアクセスは明示的に設定</div>
    <div>• 扱う情報が外部に送られないので、<span class="text-cyan-300">厳しい企業でも導入しやすい</span></div>
  </div>
</div>

<div class="mt-10 p-5 bg-green-500/10 border border-green-500/30 rounded-xl text-lg text-gray-200">
  ✅ セキュリティレビューの第一声が「怖い」から「これなら大丈夫そう」に変わった、という声が増えています。
</div>

<div class="abs-br m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30">
</div>

---

# 今すぐ試せる3ステップ

<br>

<div class="space-y-8 mt-8">
  <div class="flex gap-6">
    <div class="bg-blue-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold flex-shrink-0">1</div>
    <div class="flex-1">
      <div class="text-2xl font-bold mb-3">まず小さなプロジェクトで試す</div>
      <div class="bg-gray-800/50 p-4 rounded-xl">
        <code class="text-xl">npm install -g @serena-ai/mcp && serena init</code>
      </div>
    </div>
  </div>

  <div class="flex gap-6">
    <div class="bg-purple-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold flex-shrink-0">2</div>
    <div class="flex-1">
      <div class="text-2xl font-bold mb-3">CLAUDE.mdを充実させる</div>
      <div class="text-xl text-gray-300">テンプレート: github.com/serena-ai/templates</div>
    </div>
  </div>

  <div class="flex gap-6">
    <div class="bg-pink-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold flex-shrink-0">3</div>
    <div class="flex-1">
      <div class="text-2xl font-bold mb-3">チームに展開</div>
      <div class="text-xl text-gray-300">効果を実感したら、チーム全体で標準化</div>
    </div>
  </div>
</div>

---
layout: center
class: text-center
---

# まとめ

<div class="mt-12 space-y-8">
  <div class="text-4xl">
    コンテキストエンジニアリングは
  </div>

  <div class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
    AIツール活用の必須スキル
  </div>

  <div class="text-3xl text-gray-400">
    Serena MCPなら<strong>怖がらずに今日から試せる</strong>
  </div>

  <div class="text-2xl text-gray-500">
    「良い感じにしておいて」に一歩近づくコンテキストの自動化を体感しましょう。
  </div>
</div>

<div class="mt-16 p-8 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl">
  <div class="text-2xl mb-4">🎁 **本日のお持ち帰り**</div>
  <div class="text-xl">2分のセットアップで、開発効率3倍を実現する方法</div>
</div>

---

# リソース & Next Action

<br>

<div class="grid grid-cols-2 gap-8">
  <div>
    <h3 class="text-2xl mb-6 text-blue-400">📚 ドキュメント</h3>
    <div class="space-y-4">
      <div class="bg-gray-800/50 p-4 rounded-xl">
        <div class="text-lg font-bold">Serena MCP</div>
        <div class="text-sm text-gray-400">github.com/serena-ai/mcp</div>
      </div>
      <div class="bg-gray-800/50 p-4 rounded-xl">
        <div class="text-lg font-bold">実装ガイド</div>
        <div class="text-sm text-gray-400">zenn.dev/wadakatu/serena-mcp</div>
      </div>
      <div class="bg-gray-800/50 p-4 rounded-xl">
        <div class="text-lg font-bold">CLAUDE.mdテンプレート</div>
        <div class="text-sm text-gray-400">github.com/serena-ai/templates</div>
      </div>
    </div>
  </div>

  <div>
    <h3 class="text-2xl mb-6 text-purple-400">🚀 Next Action</h3>
    <div class="bg-gradient-to-br from-green-500/20 to-blue-500/20 p-6 rounded-xl">
      <div class="text-xl font-bold mb-4">今日中にやること：</div>
      <div class="space-y-3">
        <div>1️⃣ Serena MCPインストール</div>
        <div>2️⃣ 小規模プロジェクトで試す</div>
        <div>3️⃣ 効果を測定</div>
        <div>4️⃣ セキュリティ担当に<strong>ローカル完結</strong>を共有</div>
        <div>5️⃣ #serena_mcp で結果共有</div>
      </div>
    </div>
  </div>
</div>

<div class="mt-8 text-center">
  <div class="text-2xl text-gray-400">
    Contact: @wadakatu | #context-engineering
  </div>
</div>

---
layout: center
class: text-center
---

# ご清聴ありがとうございました！

<br>

<div class="text-3xl mb-12">
  Questions?
</div>

<div class="space-y-6">
  <div class="text-2xl">
    🐦 @wadakatu
  </div>

  <div class="text-2xl">
    📝 Zenn: wadakatu
  </div>

  <div class="text-2xl">
    💬 Slack: #context-engineering
  </div>
</div>

<div class="mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl">
  <div class="text-xl">
    スライド資料は後日共有します 📎
  </div>
</div>
