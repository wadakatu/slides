<script setup lang="ts">
defineProps<{
  class?: string
  logo?: string
}>()
</script>

<template>
  <div class="slidev-layout center" :class="$props.class">
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
.center {
  @apply h-full text-gray-100;
  background: black;
}
</style>
