<template>
  <div class="flex items-center gap-2.5 sm:gap-3 bg-gradient-to-r from-primary/10 via-secondary/10 to-tertiary/10 backdrop-blur-md shadow-sm rounded-xl px-3 sm:px-5 py-2.5 border border-white/30">
    <img :src="iconSrc" :alt="iconAlt" class="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" />
    <div class="text-left">
      <div class="text-xl sm:text-2xl font-extrabold text-primary leading-tight">{{ value }}</div>
      <div class="text-xs sm:text-sm text-gray-600 font-medium">{{ label }}</div>
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
