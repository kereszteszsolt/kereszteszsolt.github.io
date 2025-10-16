<script setup lang="ts">
interface Props {
  columns?: number;
  columnGap?: string;
  mobileColumns?: number;
  itemClass?: string;
}

// Register props with defaults; no assignment required because styles use v-bind(...) to pick values
withDefaults(defineProps<Props>(), {
  columns: 2,
  columnGap: '1.5rem',
  mobileColumns: 1,
  itemClass: ''
});
</script>

<template>
  <div class="masonry-grid">
    <slot />
  </div>
</template>

<style scoped>
.masonry-grid {
  /* use v-bind to pick up prop values in the component style */
  columns: v-bind(columns);
  column-gap: v-bind(columnGap);
}

.masonry-grid :deep(> *) {
  break-inside: avoid;
  margin-bottom: 1.5rem;
  display: block;
}

@media (max-width: 768px) {
  .masonry-grid {
    columns: v-bind(mobileColumns);
  }
}
</style>
