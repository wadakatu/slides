<script setup lang="ts">
// $slidevはVueのグローバルプロパティとしてテンプレートで使用可能
// coverとendレイアウトではロゴを非表示にする
</script>

<template>
  <div
    v-if="$slidev?.configs?.logo && $slidev?.nav?.currentLayout !== 'cover' && $slidev?.nav?.currentLayout !== 'end'"
    class="absolute bottom-8 right-8 z-10"
  >
    <img
      :src="$slidev.configs.logo"
      class="w-16 invert opacity-50"
    />
  </div>
</template>
