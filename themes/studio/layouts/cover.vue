<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps<{
  background?: string
  class?: string
  logo?: string
}>()

const style = computed(() => handleBackground(props.background))
</script>

<template>
  <div
    class="slidev-layout cover"
    :class="$props.class"
    :style="style"
  >
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
.cover {
  @apply h-full;
  background: black;
}

.cover :deep(h1) {
  @apply text-6xl font-black mb-4;
  color: #22d3ee;
}

.cover :deep(p) {
  @apply text-xl text-gray-300;
}
</style>
