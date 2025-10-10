<template>
  <section :id="id" class="flex flex-col items-center justify-center min-h-[calc(100vh-5rem-4rem)] py-8 relative">
    <div class="w-full max-w-4xl mx-auto flex-1 flex items-center justify-center">
      <div class="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8 overflow-y-auto max-h-[70vh]">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({ id: String });
</script>

