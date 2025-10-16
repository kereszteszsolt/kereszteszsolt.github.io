<script setup lang="ts">
import { ref, defineEmits } from 'vue';

interface SectionNav {
  id: string;
  label: string;
}
const props = defineProps<{
  profileImage: string;
  sections: SectionNav[];
  activeSection: string;
  activeSectionLabel: string;
}>();

const emit = defineEmits(['navigate']);
const menuOpen = ref(false);
const defaultPicture = 'https://ui-avatars.com/api/?name=User&background=ccc&color=fff&rounded=true';
</script>

<template>
  <header class="fixed top-0 left-0 z-50 w-full h-16 flex bg-gradient-to-b from-primary to-primary-700 text-primary-caption shadow-md">
    <div class="flex justify-between items-center w-full px-3 sm:px-4">
      <!-- Profile Picture -->
      <img
        :src="props.profileImage || defaultPicture"
        alt="Profile Picture"
        class="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-tertiary shadow-sm"
      />

      <!-- Active Section Label (mobile only, centered) -->
      <div class="flex-1 text-center text-base sm:text-lg font-bold md:hidden">
        {{ props.activeSectionLabel }}
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex gap-1.5 lg:gap-2 rounded-bl-2xl shadow-lg border border-secondary-700/50 backdrop-blur-md bg-gradient-to-b from-secondary-400/90 to-secondary-700 pr-3">
        <button
          v-for="section in props.sections"
          :key="section.id"
          class="relative px-3 lg:px-4 py-2 rounded-lg text-base lg:text-lg font-bold border border-transparent transition-all duration-200 overflow-hidden group"
          :class="props.activeSection === section.id
            ? 'bg-gradient-to-b from-secondary-300 to-secondary-100 text-secondary-900 shadow-lg border-secondary-200'
            : 'text-primary-caption hover:bg-secondary-500/30'"
          @click="emit('navigate', section.id)"
        >
          <span class="relative z-10">{{ section.label }}</span>
        </button>
      </nav>

      <!-- Burger Menu Button -->
      <button
        class="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle navigation menu"
      >
        <span class="block w-6 h-0.5 bg-secondary-490 transition-transform duration-300" :class="menuOpen ? 'rotate-45 translate-y-1.5' : ''"></span>
        <span class="block w-6 h-0.5 bg-secondary-490 transition-all duration-300" :class="menuOpen ? 'opacity-0 scale-x-0' : ''"></span>
        <span class="block w-6 h-0.5 bg-secondary-490 transition-transform duration-300" :class="menuOpen ? '-rotate-45 -translate-y-1.5' : ''"></span>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <nav v-if="menuOpen" class="absolute top-16 left-0 w-full flex flex-col gap-2 px-3 py-3 md:hidden rounded-b-2xl shadow-lg border-t border-secondary-700/50 backdrop-blur-md bg-gradient-to-b from-secondary-400/95 to-secondary-700">
      <button
        v-for="section in props.sections"
        :key="section.id"
        class="px-4 py-2 rounded-lg text-base font-bold border border-transparent transition-all duration-200"
        :class="props.activeSection === section.id
          ? 'bg-gradient-to-b from-secondary-300 to-secondary-100 text-secondary-900 shadow-md border-secondary-200'
          : 'text-primary-caption hover:bg-secondary-500/30'"
        @click="emit('navigate', section.id); menuOpen = false"
      >
        {{ section.label }}
      </button>
    </nav>
  </header>
</template>

<style scoped>
/* No additional styles needed, Tailwind handles responsiveness and layout */
</style>