<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-white shadow flex items-center justify-between px-6 h-20">
    <div class="flex items-center gap-4">
      <img :src="profileImage" alt="Profile" class="w-12 h-12 rounded-full border-2 border-primary object-cover" />
      <nav class="flex gap-6">
        <button v-for="section in sections" :key="section.id" @click="$emit('navigate', section.id)"
          :class="[activeSection === section.id ? 'text-primary font-bold' : 'text-gray-600', 'transition-colors']">
          {{ section.label }}
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
interface SectionNav {
  id: string;
  label: string;
}
const props = defineProps<{
  profileImage: string;
  sections: SectionNav[];
  activeSection: string;
}>();
</script>

<style scoped>
header { min-height: 5rem; }
</style>

