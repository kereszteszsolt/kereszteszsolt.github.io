<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  columns?: number;
  columnGap?: string;
  mobileColumns?: number;
  itemClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  columns: 2,
  columnGap: '1.5rem',
  mobileColumns: 1,
  itemClass: ''
});

const gridStyle = computed(() => ({
  columns: props.columns,
  columnGap: props.columnGap
}));
</script>

<template>
  <div class="masonry-grid" :style="gridStyle">
    <slot />
  </div>
</template>

<style scoped>
.masonry-grid {
  columns: 2;
  column-gap: 1.5rem;
}

.masonry-grid :deep(> *) {
  break-inside: avoid;
  background: var(--color-neutral);
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  padding: 1rem;
  margin-bottom: 1.5rem;
  display: block;
}

@media (max-width: 768px) {
  .masonry-grid {
    columns: v-bind(mobileColumns);
  }
}
</style>

