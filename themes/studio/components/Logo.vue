<script setup lang="ts">
defineProps<{
  class?: string
  src?: string
}>()
</script>

<template>
  <div class="absolute bottom-8 right-8 m-8" :class="$props.class">
    <img
      v-if="src"
      :src="src"
      class="w-16 filter invert opacity-30"
    />
    <slot v-else />
  </div>
</template>
