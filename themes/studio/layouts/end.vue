<script setup lang="ts">
defineProps<{
  class?: string
  logo?: string
}>()
</script>

<template>
  <div class="slidev-layout end" :class="$props.class">
    <div class="flex flex-col justify-center items-center h-full text-center">
      <slot />
    </div>

    <!-- Logo -->
    <div v-if="logo" class="absolute bottom-8 right-8">
      <img :src="logo" class="w-16 filter invert opacity-30" />
    </div>
  </div>
</template>

<style scoped>
.end {
  @apply h-full;
  background: black;
}

.end :deep(h1) {
  @apply text-5xl font-bold;
  color: #22d3ee;
}

.end :deep(p) {
  @apply text-xl text-gray-400 mt-4;
}
</style>
