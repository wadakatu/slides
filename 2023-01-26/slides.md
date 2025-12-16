---
# try also 'default' to start simple
theme: seriph
title: Lancers Digital Academy
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: /image/bg_ft2.png
favicon: /image/favicon.ico
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS
css: unocss
colorSchema: "light"
---

# 仕事連動型・教育サービス始めました。

~ 資格ではなく実務で活かせる技術を学ぶ ~

<LdaLogo />

<style>
  .slidev-layout.cover h1{
    font-size: 2.5rem;
  }
</style>

<!--
タイトルコール
-->

---​

# 自己紹介

<div class="flex justify-center mt-16">
  <ul class="list-inside">
    <li v-click="1" class="mb-10 text-3xl"><span class="text-xl">名前：</span>磯野 公耀（イソノ コウヨウ）</li>
    <li v-click="2" class="mb-10 text-3xl"><span class="text-xl">好きなもの：</span>Laravel, HHKB</li>
    <li v-click="3" class="mb-10 text-3xl"><span class="text-xl">豆知識：</span>30種類以上のアレルギー持ち</li>
  </ul>
</div>

<LdaLogo />

<!--
軽く自己紹介（30秒くらい）
-->

---

# 仕事連動型・教育サービス

<div class="flex justify-center">
  <img src="/image/ogp.png" width="700">
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://lancers.academy" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <img src="/image/favicon.ico" width="50">
  </a>
</div>

<!--
LDA紹介
去年8月リリース
他の数多ある教育サービスと何が違うのかを以降のスライドを交えて話す
-->

---

# 1. 実務を想定した学習

<div class="flex justify-center mt-16 content-start">
  <div v-click="0" class="m-2"><img src="/image/study_night_boy.png" width="300"></div>
  <div v-click="1" class="m-2"><img src="/image/business.png" width="350"></div>
</div>

<LdaLogo />

<!--
LDAの学習は、資格のためではなく実務のための学習
従って、コース修了後すぐに案件を受注することができる
（教習所のようなイメージしてもらうとわかりやすい。筆記(資格)だけでの運転(実務)は企業・個人ともに不安）

現在の実績として、コース修了後１週間ほどで案件を獲得しているランサーさんがいる
-->

---

# 2. プロからのフィードバック

<div class="flex justify-center mt-8 content-start">
  <img src="/image/feedback_aws.png" width="800">
</div>

<LdaLogo />

<!--
各教材を作成した会社からのフィードバックを受けることができる
自分の強み、弱点を第三者の目線から指摘してもらえる
-->

---

# 3. スキルを証明できる限定デジタルバッジ

<div class="flex justify-center mt-16 content-start">
  <div><img src="/image/prof.png" width="400"></div>
  <div><img class="mt-10" src="/image/badge_aws.png" width="150"></div>
</div>

<LdaLogo />

<!--
デジタルバッジは、一発勝負の修了試験で良い結果を残した受講生のみに与えられる。
なので、コースを受講したからといって全員が貰えるわけではない。

バッジを獲得した方はランサーズにて軒並み高単価の案件を獲得することができている。
-->

---

# 技術スタック

<div grid="~ cols-3 gap-2" m="-t-2">
 <div name="backend">
  <h3>バックエンド</h3>
  <div name="stuck" class="mt-8">
    <img src="https://www.php.net/images/logos/new-php-logo.svg" class="mb-5" width="180">
    <img src="/image/laravel.png" class="mb-3" width="200">
    <img src="/image/mysql.png" width="190">
  </div>
 </div>
 <div name="frontend">
    <h3>フロントエンド</h3>
    <div name="stuck" class="mt-8">
      <img src="/image/typescript.png" class="mb-5" width="150">
      <img src="/image/vue.png" class="mb-5" width="100">
      <img src="/image/inertia.png" width="180">
    </div>
 </div>
 <div name="infra">
    <h3>インフラ/CI</h3>
    <div name="stuck" class="mt-8">
      <img src="/image/aws.png" width="180">
      <img src="/image/terraform.png" class="mb-3" width="200">
      <img src="/image/circleci.png" width="150">
    </div>
 </div>
</div>

<LdaLogo />

<!--
技術スタックの説明（30秒くらい）
TOP周りを除くページは全てinertia.jsを用いてSPAで構築している
-->

---

# 好きなところ

- inertia.js のおかげで、SPA を意識せずに書ける

> Build single-page apps, without building an API.<br>

<v-clicks>

```php
use Inertia\Inertia;

class EventsController extends Controller
{
    public function show(Event $event)
    {
        return Inertia::render('Event/Show', [
            'event' => $event->only(
                'id',
                'title',
                'description'
            ),
        ]);
    }
}
```

</v-clicks>

<LdaLogo />

<!--
APIを作成する手間が省ける
MPAを作成する際と同じような書き方ができるので、慣れが早い
Propsの渡し方もBladeファイルに値を渡すように書けるので良い
vue-routerなど使わず、Laravelのルーティングに寄せることができるのも非常に良い
-->

---

# 嫌いなところ

<div class="h-[35vh] w-[45vw] flex justify-center items-center">
  <p>inertia.jsが意外と辛い</p>
</div>

<LdaLogo />

<!--
inertiaの思想は、現代的なモノリスなのでバックエンドとフロントエンドが密結合している
なので、backendから渡される値のモックに公式で対応していない（フロントエンドのUTなど書きづらい）

使ってる人が基本的に少ないので情報も少ない
頼れる情報が基本inertia.jsのリポジトリしかない
そこになければ、自分でinertiaのファイルを眺めるという鬼のデバッグ作業が待っている

ただ、最近v1.0（メジャーバージョン）がリリースされたのでこれからのinertia.js人口拡大に期待
-->

---

# 最後に

<div grid="~ cols-2 gap-4">
<v-clicks>
<div>

### 2023 年 4 月から新コースが仲間入り

<div class="mt-25">
<p class="text-2xl pb-20">1. UI/UXデザインマスターコース</p>

<p class="text-2xl">2. カスタマーサクセスマスターコース</p>

</div>

</div>
<div>

### アズサ・ランちゃんもいるよ！

<Tweet id="1609384056453464066" scale="1.05" />

</div>
</v-clicks>
</div>

<LdaLogo />

<!--
UI/UXとカスタマーサクセスの２コース追加されること

アズサランちゃんのTwitterもあるのでチェックしてみてください。
当日のツイートにリプするとAIで自動返信するのでリプも送ってみてください。

ココナラさんも個人や法人研修などでLDAの利用を検討してみてはいかがでしょうか？
-->
