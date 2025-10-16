<template>
  <div
    :class="[
      'bg-neutral-variant/60 backdrop-blur-md rounded-xl shadow-md border border-white/50',
      'hover:border-primary/40 hover:shadow-lg hover:scale-[1.02]',
      'transition-all duration-300',
      customClass
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  customClass?: string
}>()
</script>

