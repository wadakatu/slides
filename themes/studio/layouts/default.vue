<script setup lang="ts">
defineProps<{
  class?: string
  logo?: string
}>()
</script>

<template>
  <div class="slidev-layout default" :class="$props.class">
    <slot />

    <!-- Logo -->
    <div v-if="logo" class="absolute bottom-8 right-8">
      <img :src="logo" class="w-16 filter invert opacity-30" />
    </div>
  </div>
</template>

<style scoped>
.default {
  @apply h-full text-gray-100;
  background: black;
}
</style>
