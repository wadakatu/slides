<script setup lang="ts">
defineProps<{
  class?: string
  logo?: string
}>()
</script>

<template>
  <div class="slidev-layout two-cols" :class="$props.class">
    <div class="grid grid-cols-2 gap-8 h-full">
      <div class="flex flex-col justify-center">
        <slot name="default" />
      </div>
      <div class="flex flex-col justify-center">
        <slot name="right" />
      </div>
    </div>

    <!-- Logo -->
    <div v-if="logo" class="absolute bottom-8 right-8">
      <img :src="logo" class="w-16 filter invert opacity-30" />
    </div>
  </div>
</template>

<style scoped>
.two-cols {
  @apply h-full text-gray-100;
  background: black;
}
</style>
