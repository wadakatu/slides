<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground, resolveAssetUrl } from '../layoutHelper'

const props = defineProps<{
  class?: string
  image?: string
  logo?: string
}>()

const resolvedImage = computed(() => props.image ? resolveAssetUrl(props.image) : undefined)
</script>

<template>
  <div class="slidev-layout image-right" :class="$props.class">
    <div class="grid grid-cols-2 gap-8 h-full">
      <div class="flex flex-col justify-center">
        <slot />
      </div>
      <div class="flex items-center justify-center">
        <img v-if="resolvedImage" :src="resolvedImage" class="max-h-full max-w-full rounded-lg shadow-lg" />
        <slot v-else name="right" />
      </div>
    </div>

    <!-- Logo -->
    <div v-if="logo" class="absolute bottom-8 right-8">
      <img :src="logo" class="w-16 filter invert opacity-30" />
    </div>
  </div>
</template>

<style scoped>
.image-right {
  @apply h-full text-gray-100;
  background: black;
}
</style>
