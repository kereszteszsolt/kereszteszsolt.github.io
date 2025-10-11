<template>
  <div class="flex-pack-wrapper">
    <slot />
  </div>
</template>

<script setup lang="ts">
// This component uses CSS to intelligently pack flex items
// Items are arranged to minimize rows and unused space
</script>

<style scoped>
.flex-pack-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-start;
}

/* Ensure children are inline-flex to maintain their natural width */
.flex-pack-wrapper > :deep(*) {
  flex-shrink: 0;
}
</style>
