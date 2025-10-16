<template>
  <div class="flex items-center gap-3 bg-gradient-to-r from-primary/10 via-secondary/10 to-tertiary/10 backdrop-blur-md shadow-sm rounded-xl px-4 sm:px-6 py-3 border border-white/30">
    <img :src="iconSrc" :alt="iconAlt" class="w-8 h-8" />
    <div class="text-left">
      <div class="text-2xl font-extrabold text-primary">{{ value }}</div>
      <div class="text-sm text-gray-600 font-medium">{{ label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  iconSrc: string
  iconAlt: string
  value: string | number
  label: string
}>()
</script>
