<script setup lang="ts">
defineProps<{
  class?: string
  logo?: string
}>()
</script>

<template>
  <div class="slidev-layout section" :class="$props.class">
    <div class="flex flex-col justify-center items-center h-full">
      <slot />
    </div>

    <!-- Logo -->
    <div v-if="logo" class="absolute bottom-8 right-8">
      <img :src="logo" class="w-16 filter invert opacity-30" />
    </div>
  </div>
</template>

<style scoped>
.section {
  @apply h-full;
  background: black;
}

.section :deep(h1) {
  @apply text-6xl font-bold text-center;
  color: #22d3ee;
}

.section :deep(p) {
  @apply text-xl text-gray-400 mt-4 text-center;
}
</style>
