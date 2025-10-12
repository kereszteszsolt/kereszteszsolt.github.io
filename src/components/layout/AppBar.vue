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
  <header class="text-primary-caption shadow-md w-full h-[4rem] flex fixed top-0 left-0 z-50" style="background: linear-gradient(to bottom, var(--color-primary), var(--color-primary-700));">
    <div class="flex justify-between w-full pl-2">
      <!-- Profile Picture -->
      <img
        :src="props.profileImage || defaultPicture"
        alt="Profile Picture"
        class="w-12 h-12 self-center rounded-full object-cover border-2 border-tertiary shadow"
      />
      <!-- Active Section Label (centered) -->
      <div class="hidden md:block flex-1 text-center text-lg font-bold text-primary-caption">
        {{ props.activeSectionLabel }}
      </div>
      <!-- Desktop Navigation -->
      <nav
        class="hidden md:flex gap-2 md:rounded-bl-2xl md:shadow-lg md:border md:border-secondary-700 md:backdrop-blur-md pr-2"
        style="background: linear-gradient(to bottom, var(--color-secondary-400) 0%, var(--color-secondary-700) 100%); background-color: rgba(34,139,34,0.7);"
      >
        <button
          v-for="section in props.sections"
          :key="section.id"
          class="group px-4 py-2 rounded-lg transition text-lg font-bold border border-transparent relative overflow-hidden"
          :style="
            props.activeSection === section.id
              ? 'background: linear-gradient(to bottom, var(--color-secondary-300), var(--color-secondary-100)); color: var(--color-secondary-900); box-shadow: 0 4px 24px 0 rgba(34,139,34,0.25); border: 1px solid var(--color-secondary-200);'
              : ''
          "
          :class="[
            props.activeSection === section.id
              ? ''
              : 'bg-transparent text-primary-caption',
          ]"
          @click="emit('navigate', section.id)"
        >
          <span
            class="relative z-10"
            :class="[
              props.activeSection === section.id ? 'font-bold' : 'group-hover:text-secondary-900',
              'transition-colors duration-200'
            ]"
          >
            {{ section.label }}
          </span>
          <span
            v-if="props.activeSection !== section.id"
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
            style="background: linear-gradient(to bottom, var(--color-secondary-400), var(--color-secondary-700)); backdrop-filter: blur(2px); border-radius: 0.5rem;"
          ></span>
        </button>
      </nav>
      <!-- Burger Menu Button -->
      <button
        class="md:hidden flex flex-col justify-center items-center w-10 h-10 self-center pr-2"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle navigation menu"
      >
        <span
          class="block w-6 h-0.5 bg-secondary-490 mb-1 transition-transform duration-300"
          :class="menuOpen ? 'rotate-45 translate-y-1.5' : ''"
        ></span>
        <span
          class="block w-6 h-0.5 bg-secondary-490 mb-1 transition-all duration-300"
          :class="menuOpen ? 'opacity-0 scale-x-0' : ''"
        ></span>
        <span
          class="block w-6 h-0.5 bg-secondary-490 transition-transform duration-300"
          :class="menuOpen ? '-rotate-45 -translate-y-1.5' : ''"
        ></span>
      </button>
    </div>
    <!-- Mobile Navigation -->
    <nav v-if="menuOpen" class="md:hidden flex flex-col gap-2 px-4 py-4 absolute top-[4rem] left-0 w-full z-50 rounded-b-2xl shadow-lg border-t border-secondary-700 backdrop-blur-md pr-2"
      style="background: linear-gradient(to bottom, var(--color-secondary-400) 0%, var(--color-secondary-700) 100%); background-color: rgba(34,139,34,0.7);">
      <div class="text-center text-lg font-bold text-primary-caption mb-2">{{ props.activeSectionLabel }}</div>
      <button
        v-for="section in props.sections"
        :key="section.id"
        class="group px-4 py-2 rounded-lg transition text-lg font-bold border border-transparent relative overflow-hidden"
        :style="
          props.activeSection === section.id
            ? 'background: linear-gradient(to bottom, var(--color-secondary-300), var(--color-secondary-100)); color: var(--color-secondary-900); box-shadow: 0 4px 24px 0 rgba(34,139,34,0.25); border: 1px solid var(--color-secondary-200);'
            : ''
        "
        :class="[
          props.activeSection === section.id
            ? ''
            : 'bg-transparent text-primary-caption',
        ]"
        @click="() => { emit('navigate', section.id); menuOpen = false; }"
      >
        <span
          class="relative z-10"
          :class="[
            props.activeSection === section.id ? 'font-bold' : 'group-hover:text-secondary-900',
            'transition-colors duration-200'
          ]"
        >
          {{ section.label }}
        </span>
        <span
          v-if="props.activeSection !== section.id"
          class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
          style="background: linear-gradient(to bottom, var(--color-secondary-400), var(--color-secondary-700)); backdrop-filter: blur(2px); border-radius: 0.5rem;"
        ></span>
      </button>
    </nav>
  </header>
</template>

<style scoped>
/* No additional styles needed, Tailwind handles responsiveness and layout */
</style>