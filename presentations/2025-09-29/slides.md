---
layout: cover
theme: default
background: 'black'
highlighter: shiki
lineNumbers: false
info: |
  ## Serena MCPのすすめ
  最良のアウトプットを無駄なく得るために
drawings:
  persist: false
css: unocss
fonts:
  sans: 'Noto Sans JP:300,400,500,700,900'
  mono: 'JetBrains Mono:400,500,600,700'
---

<h1 class="text-cyan-400 font-bold">Serena MCPのすすめ</h1>

<div class="text-4xl font-bold text-white mt-6">
  最良のアウトプットを無駄なく得るために
</div>

<div class="text-2xl text-gray-400 mt-8">
  頑張りすぎずにAIを味方にする、コンテキスト設計の実践へ。
</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30">
</div>

<!--
先ほど、sasakunaさんの発表でコンテキストエンジニアリングとは何か

それでは、Serena MCPのすすめ  最良のアウトプットを無駄なく得るためにの発表を始めさせていただきます
-->

---
layout: two-cols
class: bg-black
style: 'background: black'
---

<div class="flex items-center justify-center h-full">
  <img src="/assets/product_isono.png" class="h-80 object-contain rounded-lg" alt="wadakatu" />
</div>

::right::

# 自己紹介

<div class="space-y-8 mt-8">

<div>
<p class="text-2xl">Name: <span class="text-cyan-400 text-4xl">wadakatu</span></p>
<div class="text-xl text-gray-400">Backend Engineer at Studio Inc.</div>
</div>

<div class="space-y-5 text-lg leading-relaxed">

既存プロダクト**Studio**のバックエンド開発をメインに、
<span class="text-cyan-400">共通認証基盤構築</span>や<span class="text-cyan-400">海外向けプロダクト開発</span>にも携わっています。

社内でのAI活動が活発で、
**Slackチャンネル**などを通して
<span class="text-cyan-400">毎日エンジニア全員でより効率の良い開発</span>を目指しています。

<div class="bg-gray-800/30 rounded-lg p-4 mt-6">
<div class="text-cyan-300 font-semibold mb-2">💝 好きなもの</div>
<div class="text-base">
HHKB・バグ修正・ライブラリアップデート
</div>
</div>

</div>
</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30" />
</div>

<!--
まずは自己紹介から
皆様初めまして、wadakatuと申します
現在Studio株式会社にてバックエンド開発に従事しています
既存プロダクトのStudioのバックエンド開発をメインに、共通認証基盤構築や海外向けプロダクト開発にも携わっています

社内でのAI活動が活発なので、日々Slackチャンネルなどで意見交換をしながらAIを使った効率の良い開発とは何かを模索しています

好きなものはHHKB、バグ修正、ライブラリアップデートです
-->

---
layout: image
image: /assets/studio.png
class: bg-black
---

<!--
Studioを知らない方のために少し説明をさせていただくと
弊社のStudioはノーコードWebプラットフォームです
HTML、CSSといったコードを使ったサイト作成ってなかなか難しいですよね。弊社のStudioを使っていただくと、コードを書かずにサイト作成、公開、運用ができるので、もしWebサイト作ってみたいなと思ってらっしゃる方がいればぜひ使ってみてください
-->

---
layout: image
image: /assets/studio-hosting.png
class: bg-black
---

<!--
スタートアップから官公庁といった様々な方にご利用いただいており、現在ではStudioで作成、公開しているサイトの数は11万件を超えているそうです。
ぜひ一度使ってみてください。
それでは、本題に戻ります
-->

---
layout: center
class: bg-black text-center
---

<h1 class="text-[4.5rem] font-black leading-tight tracking-tight text-white font-sans mb-8">
  <span class="text-cyan-400">Serena MCP</span>のすすめ
</h1>

<div class="text-2xl text-gray-300 font-sans">
  最良のアウトプットを無駄なく得るために
</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30">
</div>

<!--
Serena MCPのすすめ、最良のアウトプットを無駄なく得るために 
まずみなさん、日々AIを使っててこう思ったことはないですか？
-->

---
layout: center
class: bg-black text-center
---

<h1 class="text-[3.6rem] font-black leading-tight tracking-tight text-white font-sans">
  AIを活用している中で、<br>
  <span class="text-cyan-300">前のほうが精度良かった</span>気がする…<br>
  って感じたことないですか？
</h1>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30">
</div>

<!--
前の方が精度良かったな...? 前より凄さを感じないな みたいなことあると思います。
自分も実際にClaude Codeを使って開発を進めていると、Claude Codeのバージョン自体はアップデートされてるけど、回答精度に関しては昔の方が好きだったなみたいなことがあります。
-->

---
layout: default
class: bg-black
---

<h2 class="text-4xl font-bold mb-8 text-white mt-0 font-sans">その原因は様々...</h2>

<div class="flex flex-col items-center justify-center space-y-8">
<!-- 上段: モデルのリグレッション と システムプロンプトの改定 -->
<div class="grid grid-cols-2 gap-8 max-w-4xl w-full px-8">
<div class="rounded-[2rem] border border-amber-400/30 bg-amber-400/5 px-8 py-10 shadow-[0_15px_35px_-15px_rgba(251,191,36,0.4)] text-center">
<div class="text-[1.6rem] leading-relaxed text-white font-medium font-sans"><span class="text-amber-400 font-bold">モデルの<br>リグレッション</span></div>
</div>

<div class="rounded-[2rem] border border-purple-400/30 bg-purple-400/5 px-8 py-10 shadow-[0_15px_35px_-15px_rgba(147,51,234,0.4)] text-center">
<div class="text-[1.6rem] leading-relaxed text-white font-medium font-sans"><span class="text-purple-400 font-bold">システムプロンプト<br>の改定</span></div>
</div>
</div>

<!-- 下段: コンテキスト枯渇問題 -->
<div class="flex justify-center max-w-md w-full px-8">
<div class="rounded-[2rem] border border-red-400/30 bg-red-400/5 px-8 py-10 shadow-[0_15px_35px_-15px_rgba(239,68,68,0.4)] text-center w-full">
<div class="text-[1.8rem] leading-relaxed text-white font-medium font-sans"><span class="text-red-400 font-bold">コンテキスト枯渇問題</span></div>
</div>
</div>
</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30">
</div>

<!--
その原因ってなんだろう？と深掘りしていくと、いくつか有力な可能性が見えてきます。

まず一つ目は モデルのリグレッション です。モデルは常に進化しますが、アップデートの際に、以前は正しく答えていたケースに対して誤答を返すようになることがあります。つまり、モデル改良の副作用で“逆行”が起きるわけです。

次に、システムプロンプトの改定 です。例えば、Claude Code や Cursor、Codex などのエージェントは、それぞれ内部に独自のシステムプロンプト（AIの設計図）が設定されています。このプロンプトが変わると、同じ入力文でも AI の出力スタイルが変わることがあります。たとえば、以前は「すべて詳しく説明してください」とシステムプロンプトに書かれているAIが、改定後は「要点だけ簡潔に答える」ように振る舞うようになるような変化です。そうなると、「詳細に答えていた時の方が精度が良かった」と感じてしまうことも起こりえます。

そして、最後に取り上げたいのが コンテキスト枯渇の問題。モデルのリグレッションやシステムプロンプト改定とは異なり、コンテキスト枯渇 はユーザー側でハンドリングが可能な問題です。
今回はこの問題の解決にフォーカスします！
-->

---
layout: center
class: bg-black text-center
---

<div class="flex flex-col items-center justify-center space-y-12">
  <h1 class="text-[3.2rem] font-black leading-tight tracking-tight text-gray-300 font-sans">
    ユーザーが解決できる問題といえば...
  </h1>

  <div class="relative">
    <div class="absolute inset-0 bg-gradient-to-r from-red-400/20 to-orange-400/20 blur-xl rounded-full transform scale-150"></div>
    <div class="relative bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/30 rounded-[3rem] px-16 py-12 shadow-[0_20px_50px_-15px_rgba(239,68,68,0.6)]">
      <h2 class="text-[4.5rem] font-black leading-tight tracking-tight text-red-400 drop-shadow-[0_0_20px_rgba(239,68,68,0.8)] font-sans">
        コンテキスト枯渇問題
      </h2>
    </div>
  </div>
</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30">
</div>

<!--
ではまず、コンテキスト枯渇問題とは何だ？というところから説明できればと思います
-->

---
layout: default
class: bg-black
---

<h1 class="text-4xl font-bold text-center mb-8 text-white font-sans">コンテキスト枯渇問題とは</h1>

<div class="flex justify-center">
<div class="max-w-6xl px-8">

<div class="mb-10 text-center">
<div class="text-2xl text-gray-300 font-sans mb-4">
AIに大量のコードを送ることで、<span class="text-red-400 font-bold">必要な情報が見落とされてしまう</span>問題
</div>
</div>

<div class="grid grid-cols-3 gap-8 mb-8">
<div class="text-center">
<div class="text-6xl mb-4">📄</div>
<div class="text-xl font-bold text-cyan-400 mb-2 font-sans">大量の情報を送信</div>
<div class="text-lg text-gray-300 font-sans">プロジェクト全体のコードを<br>一度に送ってしまう</div>
</div>

<div class="text-center">
<div class="text-6xl mb-4">🧠</div>
<div class="text-xl font-bold text-amber-400 mb-2 font-sans">AIが混乱</div>
<div class="text-lg text-gray-300 font-sans">重要な情報を<br>見落としてしまう</div>
</div>

<div class="text-center">
<div class="text-6xl mb-4">❌</div>
<div class="text-xl font-bold text-red-400 mb-2 font-sans">精度が低下</div>
<div class="text-lg text-gray-300 font-sans">回答がズレたり<br>抜けが発生する</div>
</div>
</div>

<div class="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/30 rounded-xl p-6 mb-8">
<div class="text-center">
<div class="text-2xl font-bold text-red-400 mb-3 font-sans">💡 この問題解決には</div>
<div class="text-lg text-gray-300 font-sans">
<span class="text-cyan-400 font-bold">必要な情報だけを的確に抽出</span>して<br>
AIに渡すことが重要です
</div>
</div>
</div>

</div>
</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30" alt="logo">
</div>

<!--
コンテキスト枯渇問題は「AIに大量のコード、情報を送ることで必要な情報が見落とされてしまう問題です」
人間だと、大量の情報の中から大事な情報を取捨選択するということが可能ですが、AIにとってはまだまだ苦手分野です
大量の情報があると、その中からどれが重要な情報かわからなくなってしまい、回答の精度が低下します
この問題を解決するためには、必要な情報だけを的確に抽出してAIに渡すことが重要です。
これは、ユーザーが入力するプロンプトで一定改善が可能ですが、できるだけ楽をして改善していきたいですよね？
そこで登場するのが今日の主役Serena MCPです
-->

---
layout: center
class: bg-black text-center
---

<div class="space-y-10">
  <h1 class="text-[2.8rem] font-black leading-tight tracking-tight text-gray-300 font-sans">
    この問題を解決するのが
  </h1>

  <div class="relative inline-block">
    <div class="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-xl rounded-full transform scale-150"></div>
    <h1 class="relative text-[9rem] font-black leading-tight tracking-tight text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.6)] font-sans">
      Serena MCP
    </h1>
  </div>

</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30">
</div>

---
layout: default
class: bg-black
---

<div class="flex h-full flex-col items-center justify-center px-6 py-10 text-center space-y-6">
  <h1 class="text-[3.6rem] font-black leading-tight tracking-tight text-white font-sans">Serena MCPとは</h1>
  <div class="max-w-5xl text-3xl text-gray-200 leading-tight font-sans">
    LLMやコーディングエージェントに、<br><span class="text-cyan-300 font-bold">コードを意味論的に理解し操作する能力</span><br>を与えるMCPツールキット。
  </div>
</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30">
</div>

---
layout: center
class: bg-black text-center
---

<h1 class="font-sans font-black text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">意味論的に理解し、操作する</span><br><span>とは、どういうこと？</span></h1>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30">
</div>

---
layout: default
class: bg-black
---

<h1 class="text-4xl font-bold text-center mb-20 text-white font-sans">簡単に例えると</h1>

<div class="flex justify-center items-center space-x-8 mt-16">

<!-- メモ帳での開発 -->
<div class="rounded-[2rem] border border-gray-400/30 bg-gray-900/30 px-12 py-16 text-center">
<div class="text-6xl mb-6">📝</div>
<div class="text-2xl font-bold text-gray-300 font-sans">メモ帳で開発</div>
</div>

<!-- VS -->
<div class="text-5xl font-bold text-white px-8">VS</div>

<!-- IDEでの開発 -->
<div class="rounded-[2rem] border border-cyan-400/30 bg-cyan-900/20 px-12 py-16 text-center">
<div class="text-6xl mb-6">💻</div>
<div class="text-2xl font-bold text-cyan-300 font-sans">IDEで開発</div>
</div>

</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30">
</div>

<!--
エンジニアの方向けに簡単に例えると、メモ帳で開発するか、IDEで開発するかということです。
メモ帳はみなさんご存知だと思いますが、
IDEとは統合開発環境のことで、「プログラムを書く」「実行する」「エラーを見つけて直す」など、開発に必要な作業をすべて一つのソフトでできる便利なアプリケーションです。
これなしで開発しているエンジニアは多分現代には存在しないんじゃないかと思うレベルです。
今の時代で、メモ帳を使っての開発はかなりしんどいですよね。
Serena MCPを使わずにClaude Codeを使って開発するのは、メモ帳使って開発しているということに非常に近いと思っています
もう少し詳しくみていきましょう
-->

---
layout: default
class: bg-black
---

<h1 class="text-3xl font-bold mb-8 text-center text-white font-sans">コードを"文字"ではなく<span class="text-cyan-400">"意味"</span>で扱う</h1>

<div class="grid grid-cols-2 gap-8 not-prose">
  <div class="border border-red-500/30 bg-red-500/5 p-6 rounded-lg">
    <h2 class="text-3xl font-bold text-red-400 mb-4 font-sans">❌ 従来の扱い方</h2>
    <h3 class="text-2xl text-cyan-300 font-bold mb-3 font-sans">テキストとしてのコード</h3>

```js
function add(a, b) {
  return a + b
}
```

<div class="text-xl mt-4 mb-2 font-sans">↓ LLMにとって</div>
<div class="text-2xl text-cyan-400 font-bold mb-4 font-sans">"ただの文字の羅列"</div>

<div class="mt-4 space-y-2 font-sans">
  <div>• 構文の意味が理解できない</div>
  <div>• 関数の役割が分からない</div>
  <div>• コードの構造を把握できない</div>
</div>
  </div>

  <div class="border border-green-500/30 bg-green-500/5 p-6 rounded-lg">
    <h2 class="text-3xl font-bold text-green-400 mb-4 font-sans">✅ Serena MCPの場合</h2>
    <h3 class="text-2xl text-cyan-300 font-bold mb-3 font-sans">意味的な理解</h3>

```js
function add(a, b) {
  return a + b
}
```

<div class="text-xl mt-4 mb-2 font-sans">↓ Serena MCPの理解</div>

<div class="mt-4 space-y-2 font-sans">
  <div><span class="text-cyan-400 font-bold">関数名:</span> add</div>
  <div><span class="text-cyan-400 font-bold">引数:</span> a, b</div>
  <div><span class="text-cyan-400 font-bold">戻り値:</span> a + b</div>
  <div><span class="text-cyan-400 font-bold">機能:</span> 数値の加算</div>
</div>
  </div>
</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30">
</div>

---
layout: default
class: bg-black
---

<h1 class="text-3xl font-bold mb-8 text-center text-white">
  <span class="text-cyan-400">意味で捉える</span>ことの利点
</h1>

<div class="flex justify-center">
<div class="space-y-4 max-w-5xl">
<div class="rounded-[2rem] border border-emerald-400/30 bg-emerald-400/5 px-8 py-4 shadow-[0_15px_35px_-15px_rgba(16,185,129,0.4)]">
  <h3 class="text-xl font-bold text-emerald-400 mb-2 font-sans">✅ 安全にリファクタリング</h3>
  <div class="text-[1.4rem] leading-relaxed text-white font-sans">関数やクラス単位で操作できるから、誤置換や壊れを防ぎやすい</div>
</div>

<div class="rounded-[2rem] border border-cyan-400/30 bg-cyan-400/5 px-8 py-4 shadow-[0_15px_35px_-15px_rgba(0,255,255,0.4)]">
  <h3 class="text-xl font-bold text-cyan-400 mb-2 font-sans">✅ 影響範囲を自動把握</h3>
  <div class="text-[1.4rem] leading-relaxed text-white font-sans">参照や呼び出し元をまとめて追跡。関連箇所の漏れを減らせる</div>
</div>

<div class="rounded-[2rem] border border-amber-400/30 bg-amber-400/5 px-8 py-4 shadow-[0_15px_35px_-15px_rgba(251,191,36,0.4)]">
  <h3 class="text-xl font-bold text-amber-400 mb-2 font-sans">✅ 効率的なやりとり</h3>
  <div class="text-[1.4rem] leading-relaxed text-white font-sans">情報を絞るから、AIが混乱しない＝精度が落ちない</div>
</div>
</div>
</div>


<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30" alt="logo">
</div>

---
layout: center
class: bg-black text-center
---

<h1 class="text-6xl font-bold text-white font-sans">
  <span class="text-cyan-400">Serena MCP</span>の他の利点は？
</h1>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30" alt="logo">
</div>

---
layout: default
class: bg-black
---

<h1 class="text-4xl font-bold mb-16 text-center text-white mt-8 font-sans">
  Serena MCPの<span class="text-cyan-400">その他の利点</span>
</h1>

<div class="flex justify-center items-start">
<div class="grid grid-cols-2 gap-12 max-w-5xl">

<div class="rounded-[2rem] border border-emerald-400/30 bg-emerald-400/5 px-10 py-10 shadow-[0_15px_35px_-15px_rgba(16,185,129,0.4)] flex flex-col items-center text-center">
  <div class="text-6xl mb-6">🔒</div>
  <h3 class="text-3xl font-bold text-emerald-400 mb-4 font-sans">ローカル完結</h3>
  <div class="text-xl leading-relaxed text-gray-300 font-sans">全処理がローカル環境で実行<br>外部送信なし<br>セキュリティとプライバシーを確保</div>
</div>

<div class="rounded-[2rem] border border-purple-400/30 bg-purple-400/5 px-10 py-10 shadow-[0_15px_35px_-15px_rgba(147,51,234,0.4)] flex flex-col items-center text-center">
  <div class="text-6xl mb-6">🤖</div>
  <h3 class="text-3xl font-bold text-purple-400 mb-4 font-sans">複数AIエージェント対応</h3>
  <div class="text-xl leading-relaxed text-gray-300 font-sans">Claude Code、Cursor、Cline など<br>MCPプロトコルで汎用的に接続<br>幅広いAI開発ツールで活用可能</div>
</div>

</div>
</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30" alt="logo">
</div>

---
layout: center
class: bg-black text-center
---

<h1 class="text-5xl font-bold text-white mb-12 font-sans">
  Serena MCPの良さがわかってきたところで<br>
  <span class="text-cyan-400">実際に使ってみましょう！</span>
</h1>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30" alt="logo">
</div>

---
layout: default
class: bg-black
---

<h1 class="text-4xl font-bold mb-10 text-center text-white font-sans">
  まずは <span class="text-cyan-400">uv</span> をインストール
</h1>

<div class="flex justify-center">
<div class="w-full max-w-5xl space-y-6">

<div class="rounded-lg bg-gray-900/50 border border-cyan-400/30 p-4">
<div class="mb-3 text-lg text-cyan-300 font-semibold font-sans">方法1: curl経由</div>

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

<div class="mt-2 text-sm text-gray-400 font-sans">最短で導入。システムに直接スクリプトを実行します。</div>
</div>

<div class="rounded-lg bg-gray-900/50 border border-cyan-400/30 p-4">
<div class="mb-3 text-lg text-cyan-300 font-semibold font-sans">方法2: Homebrew経由</div>

```bash
brew install uv
```

<div class="mt-2 text-sm text-gray-400 font-sans">Mac環境でおすすめ。アップデート運用も楽です。</div>
</div>

<div class="mt-10 text-center text-xl text-gray-300 font-sans">
  uvは高速なPythonパッケージマネージャーです
</div>

</div>
</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30" alt="logo">
</div>

<!--
まずは、UVというPythonパッケージマネージャーをインストールしましょう
Serena MCP 自体もPythonというプログラミング言語で処理が書かれています
そのためSerena MCPを使うためにこのパッケージが必要です。
普段業務ではPHPしか書かないので、全然このパッケージの存在を知りませんでした。
Pythonと聞くとpipが有名ですが、そのpipより100倍動作が早いみたいです。

インストール方法はcurl経由、Homebrew経由が主に２つあります
この他の方法もあると思います
インストールが完了したら次に進みましょう
-->

---
layout: default
class: bg-black
---

<h1 class="text-4xl font-bold mb-8 text-center text-white font-sans">
  Claude Codeに<span class="text-cyan-400">Serena MCP</span>を導入
</h1>

<div class="flex justify-center">
<div class="w-full max-w-6xl">

<div class="rounded-lg bg-gray-900/50 border border-cyan-400/30 p-4 mb-8">

```bash
claude mcp add serena -- uvx \
  --from git+https://github.com/oraios/serena \
  serena-mcp-server \
  --context ide-assistant \
  --project $(pwd)
```

</div>

<div class="space-y-4">
<div class="text-lg text-white font-semibold mb-2 font-sans">コマンドの解説</div>

<div class="grid grid-cols-1 gap-3">
<div class="flex items-start gap-3">
  <span class="text-cyan-400 font-mono text-sm whitespace-nowrap">claude mcp add serena</span>
  <span class="text-gray-400">→</span>
  <span class="text-gray-300 text-sm font-sans">Claude CodeにSerenaという名前のMCPサーバーを追加</span>
</div>

<div class="flex items-start gap-3">
  <span class="text-cyan-400 font-mono text-sm whitespace-nowrap">uvx</span>
  <span class="text-gray-400">→</span>
  <span class="text-gray-300 text-sm font-sans">Pythonパッケージを一時的に実行するコマンド</span>
</div>

<div class="flex items-start gap-3">
  <span class="text-cyan-400 font-mono text-sm whitespace-nowrap">--from git+https://...</span>
  <span class="text-gray-400">→</span>
  <span class="text-gray-300 text-sm font-sans">GitHubリポジトリから直接インストール</span>
</div>

<div class="flex items-start gap-3">
  <span class="text-cyan-400 font-mono text-sm whitespace-nowrap">--context ide-assistant</span>
  <span class="text-gray-400">→</span>
  <span class="text-gray-300 text-sm font-sans">IDEアシスタントとしてのコンテキスト設定</span>
</div>

<div class="flex items-start gap-3">
  <span class="text-cyan-400 font-mono text-sm whitespace-nowrap">--project $(pwd)</span>
  <span class="text-gray-400">→</span>
  <span class="text-gray-300 text-sm font-sans">現在のディレクトリをプロジェクトとして指定</span>
</div>
</div>

</div>

</div>
</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30" alt="logo">
</div>

<!--
uv --versionとか入力して出力が出てきたら、次はClaude codeにSerena MCPを導入しましょう

コマンド１つで完結します

ちょっと長いので、分解して説明します

まず最初のclaude mcp add serena は

uvxは

--from git+httpsは

--contextに選択できるのは、`ide-assistant`の他に`agent`(より自律的なエージェント運用向け) 
`desktop-app`(GUIアプリケーション向け)のコンテキストが存在しています
あなたの環境に合わせて変えてみてください
-->

---
layout: default
class: bg-black
---

<h1 class="text-4xl font-bold mb-8 text-center text-white font-sans">
  Claudeを起動して<span class="text-cyan-400">Serena MCP</span>の状態を確認
</h1>

<div class="flex justify-center">
<div class="w-full max-w-6xl space-y-6">

<div class="rounded-lg bg-gray-900/50 border border-cyan-400/30 p-4">
<div class="mb-3 text-lg text-cyan-300 font-semibold font-sans">1. Claude Codeを起動</div>

```bash
claude
```

<div class="mt-2 text-sm text-gray-400 font-sans">Claude Codeのインタラクティブセッションが開始されます</div>
</div>

<div class="rounded-lg bg-gray-900/50 border border-emerald-400/30 p-4">
<div class="mb-3 text-lg text-emerald-300 font-semibold font-sans">2. MCPサーバーの状態確認と出力</div>

<div class="mb-3">
```bash
/mcp
```
</div>

<div class="mt-4 mb-2 text-sm text-gray-400 font-sans">期待される出力例：</div>

```bash
Manage MCP servers

❯ 1. serena            ✔ connected · Enter to view details
```
</div>

</div>
</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30" alt="logo">
</div>

---
layout: default
class: bg-black
---

<h1 class="text-4xl font-bold mb-8 text-center text-white font-sans">
  Serena MCPが起動すると<br>
  <span class="text-cyan-400">localhost</span>ページが自動で開きます
</h1>

<div class="grid grid-cols-3 gap-6 mb-8 px-8">
  <div class="rounded-lg bg-cyan-900/20 border border-cyan-400/30 p-4 text-center">
    <h3 class="text-xl font-bold text-cyan-400 font-sans">🔒 セキュアな監視</h3>
  </div>

  <div class="rounded-lg bg-purple-900/20 border border-purple-400/30 p-4 text-center">
    <h3 class="text-xl font-bold text-purple-400 font-sans">📊 透明性の確保</h3>
  </div>

  <div class="rounded-lg bg-emerald-900/20 border border-emerald-400/30 p-4 text-center">
    <h3 class="text-xl font-bold text-emerald-400 font-sans">⚡ リアルタイム更新</h3>
  </div>
</div>

<div class="flex justify-center px-12">
  <div class="max-w-xl w-full">
    <img src="/assets/serena_localhost.png" class="w-full rounded-lg shadow-lg border border-gray-700" alt="Serena MCP localhost画面" />
  </div>
</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30" alt="logo">
</div>

---
layout: default
class: bg-black
---

<h1 class="text-4xl font-bold mb-10 text-center text-white font-sans">
  Serena MCPの<span class="text-cyan-400">初期プロンプト</span>を入力
</h1>

<div class="flex justify-center">
<div class="w-full max-w-5xl">

<div class="mb-8 text-xl text-gray-300 text-center font-sans">以下のいずれかの方法で初期設定を実行：</div>

<div class="grid grid-cols-2 gap-8">
<div class="rounded-lg bg-gray-900/50 border border-cyan-400/30 p-6">
<div class="text-2xl text-cyan-400 mb-4 font-semibold text-center font-sans">コマンドを使用</div>

<div class="bg-gray-900/70 rounded-lg p-4">

```bash
/mcp__serena__initial_instructions
```

</div>
</div>

<div class="rounded-lg bg-gray-900/50 border border-emerald-400/30 p-6">
<div class="text-2xl text-emerald-400 mb-4 font-semibold text-center font-sans">自然言語で指示</div>

<div class="bg-gray-900/70 rounded-lg p-4">

```text
read Serena's initial instructions
```

</div>
</div>
</div>

<div class="mt-12 text-center">
<p class="text-2xl text-gray-300 font-sans">どちらの方法でも同じ結果が得られます</p>
</div>

</div>
</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30" alt="logo">
</div>

---
layout: default
class: bg-black
---

<h1 class="text-4xl font-bold mb-10 text-center text-white font-sans">
  SerenaMCPが<span class="text-cyan-400">実行する処理</span>
</h1>

<div class="flex justify-center">
<div class="w-full max-w-5xl space-y-6">

<div class="rounded-lg bg-indigo-900/50 border border-indigo-400/30 p-6">
<div class="flex items-start">
<span class="text-indigo-400 mr-4 text-3xl">📊</span>
<div class="flex-1">
<div class="text-2xl text-gray-200 font-semibold mb-2 font-sans">プロジェクト構造の解析</div>
<div class="text-lg text-gray-400 font-sans">現在のコードベースの構造を読み込み、全体像を把握</div>
</div>
</div>
</div>

<div class="rounded-lg bg-purple-900/50 border border-purple-400/30 p-6">
<div class="flex items-start">
<span class="text-purple-400 mr-4 text-3xl">📝</span>
<div class="flex-1">
<div class="text-2xl text-gray-200 font-semibold mb-2 font-sans">情報の整理とファイル出力</div>
<div class="text-lg text-gray-400 font-sans">CLAUDE.mdやAGENTS.mdのような形式で情報を整理して出力</div>
</div>
</div>
</div>

<div class="rounded-lg bg-cyan-900/50 border border-cyan-400/30 p-6">
<div class="flex items-start">
<span class="text-cyan-400 mr-4 text-3xl">🔧</span>
<div class="flex-1">
<div class="text-2xl text-gray-200 font-semibold mb-2 font-sans">開発環境の理解</div>
<div class="text-lg text-gray-400 font-sans">プロジェクトの依存関係や設定を把握し、最適な開発支援を準備</div>
</div>
</div>
</div>

</div>
</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30" alt="logo">
</div>

<!--
先ほどsasakunaさんが仰っていた「重要な情報を記憶させましょう」といった部分ですね。
Serena MCPも全知全能ではないので、プロジェクトの重要な情報をファイルにまとめて後から参照できるようにしています
-->

---
layout: center
class: bg-black text-center
---

<h1 class="text-4xl font-bold text-white mb-12 font-sans">
  <span class="text-cyan-400">Serena MCP</span>準備完了！
</h1>

<div class="max-w-5xl mx-auto">
<div class="rounded-[2rem] border border-cyan-400/30 bg-gray-900/70 px-10 py-8 shadow-[0_20px_40px_-15px_rgba(0,255,255,0.5)]">
<div class="text-2xl text-gray-300 mb-6 font-sans">以下のプロンプトを入力するだけ：</div>

<div class="bg-black/50 rounded-lg px-6 py-4 mb-6 border border-gray-700">
<code class="text-xl text-cyan-400 font-mono">
"Serena MCPを使って、〇〇関数の使われている箇所について調べてください"
</code>
</div>

<div class="text-xl text-gray-400 font-sans">
Serena MCPが自動的に動作して、<br>
コードベース全体から該当箇所を正確に検索します
</div>
</div>
</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30" alt="logo">
</div>

<!--
先ほどの初期設定で記憶した重要な情報をもとに、Serena MCPが動作してLLMに必要な情報を渡してくれます
-->

---
layout: default
class: bg-black
---

<h1 class="text-4xl font-bold mb-8 text-center text-white font-sans">
  Serena MCPが適切に応答すると<br>
  <span class="text-cyan-400">ツールの実行許可</span>を求めてきます
</h1>

<div class="flex justify-center items-center">
  <div class="max-w-2xl">
    <img src="/assets/serena_mcp.png" class="w-full rounded-lg shadow-lg border border-gray-700" alt="Serena MCP ツール実行許可画面" />
  </div>
</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30" alt="logo">
</div>

---
layout: default
class: bg-black
---

<h1 class="text-4xl font-bold mb-10 text-center text-white font-sans">
  <span class="text-cyan-400">Serena MCP</span>のトークン効率化効果
</h1>

<div class="flex justify-center">
<div class="w-full max-w-6xl">

<div class="grid grid-cols-2 gap-12 mb-8">
<div class="text-center">
<div class="rounded-lg bg-red-900/30 border border-red-400/30 p-8">
<h2 class="text-3xl font-bold text-red-400 mb-6 font-sans">❌ 従来の方法</h2>
<div class="text-xl text-gray-300 mt-4 font-sans">コードベース全体を送信<br>大量のトークンを消費</div>
</div>
</div>

<div class="text-center">
<div class="rounded-lg bg-green-900/30 border border-green-400/30 p-8">
<h2 class="text-3xl font-bold text-green-400 mb-6 font-sans">✅ Serena MCP</h2>
<div class="text-xl text-gray-300 mt-4 font-sans">必要な情報のみを抽出<br>効率的なトークン使用</div>
</div>
</div>
</div>

<div class="text-center bg-cyan-900/20 border border-cyan-400/30 rounded-lg p-6">
<div class="text-2xl text-cyan-400 font-bold mb-2 font-sans">🎯 トークン使用量を約3分の1に削減</div>
<div class="text-lg text-gray-300 font-sans">※コードベースの規模や構造により効果は変動します</div>
</div>

</div>
</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30" alt="logo">
</div>

---
layout: center
class: bg-black text-center
---

<h1 class="text-7xl font-bold text-white font-sans">
  <span class="text-orange-400">📝 番外編</span>
</h1>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30" alt="logo">
</div>

---
layout: default
class: bg-black
---

<h1 class="text-4xl font-bold mb-16 text-center text-white font-sans mt-8">
  Serena MCPを<span class="text-cyan-400">より効率的に</span>使う方法
</h1>

<div class="flex justify-center">
<div class="w-full max-w-6xl">

<div class="grid grid-cols-2 gap-8 mb-16 px-8">
<div class="rounded-[2rem] border border-purple-400/30 bg-purple-400/5 px-6 py-8 shadow-[0_15px_35px_-15px_rgba(147,51,234,0.4)]">
  <div class="text-center">
    <span class="text-4xl block mb-4">⚡</span>
    <h3 class="text-xl font-bold text-purple-400 mb-3 font-sans">Slash Command</h3>
    <div class="text-base text-gray-300 font-sans">コマンド一発でSerena MCPを起動</div>
  </div>
</div>

<div class="rounded-[2rem] border border-blue-400/30 bg-blue-400/5 px-6 py-8 shadow-[0_15px_35px_-15px_rgba(59,130,246,0.4)]">
  <div class="text-center">
    <span class="text-4xl block mb-4">🤖</span>
    <h3 class="text-xl font-bold text-blue-400 mb-3 font-sans">Sub Agent</h3>
    <div class="text-base text-gray-300 font-sans">専用エージェントで自動化</div>
  </div>
</div>
</div>

<div class="px-8">
<div class="bg-gradient-to-r from-gray-900/70 to-gray-800/70 border border-cyan-400/20 rounded-2xl p-6">
<div class="flex items-center justify-between">
<div class="flex items-center gap-3">
<span class="text-2xl">📖</span>
<div>
<div class="text-lg text-cyan-400 font-bold font-sans">詳しい設定方法</div>
<div class="text-sm text-gray-400 font-sans mt-1">実装手順とサンプルコード</div>
</div>
</div>
<div class="bg-black/50 rounded-lg px-4 py-2 border border-cyan-400/30">
<code class="text-cyan-300 text-sm">zenn.dev/sc30gsw/articles/ff81891959aaef</code>
</div>
</div>
</div>
</div>

</div>
</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30" alt="logo">
</div>

---
layout: default
class: bg-black
---

<h1 class="text-4xl font-bold mb-24 text-center text-white font-sans mt-12">
  Serena MCPの<span class="text-cyan-400">これから</span>に期待すること
</h1>

<div class="flex justify-center">
<div class="w-full max-w-7xl">

<div class="grid grid-cols-3 gap-8 px-8">
<div class="rounded-[2rem] border border-emerald-400/30 bg-emerald-400/5 px-6 py-8 shadow-[0_15px_35px_-15px_rgba(16,185,129,0.4)]">
  <div class="text-center">
    <span class="text-4xl block mb-4">🖱️</span>
    <h3 class="text-lg font-bold text-emerald-400 mb-3 font-sans">GUIからの編集追跡、ロールバック</h3>
    <div class="text-sm text-gray-300 font-sans">視覚的なインターフェースで変更履歴を管理</div>
  </div>
</div>

<div class="rounded-[2rem] border border-amber-400/30 bg-amber-400/5 px-6 py-8 shadow-[0_15px_35px_-15px_rgba(251,191,36,0.4)]">
  <div class="text-center">
    <span class="text-4xl block mb-4">🔗</span>
    <h3 class="text-lg font-bold text-amber-400 mb-3 font-sans">他MCPとの連携強化</h3>
    <div class="text-sm text-gray-300 font-sans">MCPエコシステム全体での協調動作</div>
  </div>
</div>

<div class="rounded-[2rem] border border-pink-400/30 bg-pink-400/5 px-6 py-8 shadow-[0_15px_35px_-15px_rgba(236,72,153,0.4)]">
  <div class="text-center">
    <span class="text-4xl block mb-4">📦</span>
    <h3 class="text-lg font-bold text-pink-400 mb-3 font-sans">複数言語が混在するモノレポでの活躍</h3>
    <div class="text-sm text-gray-300 font-sans">多様な技術スタックを統合管理</div>
  </div>
</div>

</div>

</div>
</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30" alt="logo">
</div>

---
layout: center
class: bg-black text-center
---

<h1 class="text-5xl font-bold text-white mb-12 font-sans">
  あなたも今日から<span class="text-cyan-400">Serena MCP</span>を<br>使ってみましょう！
</h1>

<div class="max-w-7xl mx-auto">
<div class="grid grid-cols-3 gap-8">
<div class="rounded-[2rem] border border-emerald-400/30 bg-emerald-400/5 px-6 py-8 shadow-[0_15px_35px_-15px_rgba(16,185,129,0.4)] text-center">
  <div class="text-5xl mb-4">🎯</div>
  <h3 class="text-2xl font-bold text-emerald-400 font-sans">無駄なトークンを使わない</h3>
</div>

<div class="rounded-[2rem] border border-blue-400/30 bg-blue-400/5 px-6 py-8 shadow-[0_15px_35px_-15px_rgba(59,130,246,0.4)] text-center">
  <div class="text-5xl mb-4">🔒</div>
  <h3 class="text-2xl font-bold text-blue-400 font-sans">ローカル完結なセキュア環境</h3>
</div>

<div class="rounded-[2rem] border border-purple-400/30 bg-purple-400/5 px-6 py-8 shadow-[0_15px_35px_-15px_rgba(147,51,234,0.4)] text-center">
  <div class="text-5xl mb-4">🛠️</div>
  <h3 class="text-2xl font-bold text-purple-400 font-sans">MCPサーバーなので汎用性が高い</h3>
</div>
</div>
</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30" alt="logo">
</div>

---
layout: center
class: bg-black text-center
---

<h1 class="text-6xl font-bold text-white mb-8 font-sans">
  Reference
</h1>

<div class="max-w-5xl mx-auto space-y-6">
<div class="text-left space-y-6">

<div class="flex items-center">
<span class="text-cyan-400 mr-4">•</span>
<code class="text-cyan-300 text-lg">https://github.com/oraios/serena</code>
</div>

<div class="flex items-center">
<span class="text-cyan-400 mr-4">•</span>
<code class="text-cyan-300 text-lg">https://zenn.dev/studio/articles/431afa748fbed1</code>
</div>

<div class="flex items-center">
<span class="text-cyan-400 mr-4">•</span>
<code class="text-cyan-300 text-lg">https://zenn.dev/sc30gsw/articles/ff81891959aaef</code>
</div>

<div class="flex items-center">
<span class="text-cyan-400 mr-4">•</span>
<code class="text-cyan-300 text-lg">https://azukiazusa.dev/blog/serena-coding-agent/</code>
</div>

<div class="flex items-center">
<span class="text-cyan-400 mr-4">•</span>
<code class="text-cyan-300 text-lg">https://note.com/boostconsulting/n/n39d193157be9</code>
</div>

</div>
</div>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30" alt="logo">
</div>

---
layout: center
class: bg-black text-center
---

<h1 class="text-6xl font-bold text-white mb-8 font-sans">
  ご清聴ありがとうございました
</h1>

<div class="absolute bottom-8 right-8 m-8">
  <img src="/assets/logo_symbol_japan_black.png" class="w-16 filter invert opacity-30" alt="logo">
</div>
