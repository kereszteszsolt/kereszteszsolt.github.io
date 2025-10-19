<template>
  <div ref="wrapperRef" class="flex-pack-wrapper">
    <div v-show="!isPacked" ref="measurementRef" class="measurement-container">
      <slot />
    </div>
    <div v-if="isPacked" class="packed-container">
      <div
        v-for="(row, rowIndex) in arrangedRows"
        :key="`row-${rowIndex}`"
        class="flex-pack-row"
      >
        <template v-for="itemIndex in row" :key="`item-${itemIndex}`">
          <div
            class="flex-pack-item"
            :ref="el => setItemRef(el as HTMLElement, itemIndex)"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

interface ItemMeasurement {
  index: number;
  width: number;
  element: HTMLElement;
}

const wrapperRef = ref<HTMLElement | null>(null);
const measurementRef = ref<HTMLElement | null>(null);
const arrangedRows = ref<number[][]>([]);
const isPacked = ref(false);
const itemRefs = new Map<number, HTMLElement>();
const originalElements: HTMLElement[] = [];

function setItemRef(el: HTMLElement | null, index: number) {
  if (el) {
    itemRefs.set(index, el);
  }
}

// First-Fit Decreasing bin packing algorithm
function packItems(items: ItemMeasurement[], containerWidth: number): number[][] {
  if (items.length === 0 || containerWidth <= 0) {
    return [items.map(i => i.index)];
  }

  const GAP = 8; // 0.5rem gap
  const sortedItems = [...items].sort((a, b) => b.width - a.width);
  const rows: number[][] = [];

  for (const item of sortedItems) {
    let placed = false;

    // Try to fit in existing rows
    for (const row of rows) {
      const currentWidth = row.reduce((sum, idx) => {
        const foundItem = items.find(i => i.index === idx);
        return sum + (foundItem?.width || 0);
      }, 0);

      const gaps = row.length * GAP;
      const totalNeededWidth = currentWidth + gaps + item.width;

      if (totalNeededWidth <= containerWidth) {
        row.push(item.index);
        placed = true;
        break;
      }
    }

    // Create new row if needed
    if (!placed) {
      rows.push([item.index]);
    }
  }

  return rows;
}

async function moveElementsToTargets() {
  await nextTick();

  // Move original elements to their target positions
  arrangedRows.value.forEach(row => {
    row.forEach(itemIndex => {
      const targetContainer = itemRefs.get(itemIndex);
      const originalElement = originalElements[itemIndex];

      if (targetContainer && originalElement && !targetContainer.contains(originalElement)) {
        // Clear target first to avoid duplicates
        targetContainer.innerHTML = '';
        targetContainer.appendChild(originalElement);
      }
    });
  });
}

async function measureAndArrange() {
  await nextTick();
  await nextTick(); // Extra tick to ensure rendering is complete

  if (!wrapperRef.value || !measurementRef.value) return;

  const containerWidth = wrapperRef.value.offsetWidth;
  const children = Array.from(measurementRef.value.children) as HTMLElement[];

  if (children.length === 0) return;

  // Only store original elements on first run
  if (originalElements.length === 0) {
    originalElements.push(...children);
  }

  const measurements: ItemMeasurement[] = originalElements.map((el, index) => ({
    index,
    width: el.offsetWidth,
    element: el
  }));

  arrangedRows.value = packItems(measurements, containerWidth);
  isPacked.value = true;

  await moveElementsToTargets();
}

async function reset() {
  isPacked.value = false;
  itemRefs.clear();
  arrangedRows.value = [];

  await nextTick();

  // Move all elements back to measurement container
  if (measurementRef.value) {
    originalElements.forEach(el => {
      if (el.parentNode !== measurementRef.value) {
        measurementRef.value?.appendChild(el);
      }
    });
  }

  await measureAndArrange();
}

let resizeTimeout: number;
let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  measureAndArrange();

  // Use ResizeObserver instead of window resize event for better performance
  resizeObserver = new ResizeObserver(() => {
    clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(() => {
      reset();
    }, 150);
  });

  if (wrapperRef.value) {
    resizeObserver.observe(wrapperRef.value);
  }
});

onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
  clearTimeout(resizeTimeout);
});
</script>

<style scoped>
.flex-pack-wrapper {
  display: block;
  width: 100%;
}

.measurement-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.packed-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.flex-pack-row {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: nowrap;
}

.flex-pack-item {
  display: inline-flex;
  flex-shrink: 0;
}
</style>
