<script setup lang="ts">
import SectionContainer from "@/components/layout/SectionContainer.vue";
import SectionDivider from "@/components/layout/SectionDivider.vue";
import { socialLinks } from '@/data/social-profiles.ts';
</script>

<template>
  <SectionContainer id="contact">
    <div class="text-center space-y-3 mb-6">
      <h2 class="text-2xl sm:text-3xl font-bold">Contact & Social Links</h2>
    </div>

    <div class="flex flex-col gap-3 sm:gap-4 w-full">
      <div
        v-for="link in socialLinks"
        :key="link.url"
        class="flex items-start gap-3 sm:gap-4 py-3 sm:py-4 border-b border-gray-200 last:border-b-0"
      >
        <img
          v-if="link.icon"
          :src="link.icon"
          :alt="link.title + ' icon'"
          class="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
        />
        <div class="flex-1 min-w-0">
          <div class="flex flex-wrap items-baseline gap-2 mb-1">
            <span class="font-semibold text-sm sm:text-base">{{ link.title }}</span>
            <span v-if="link.identifier" class="text-yellow-600 font-medium text-xs sm:text-sm">
              {{ link.identifier }}
            </span>
          </div>
          <a
            :href="link.url"
            target="_blank"
            rel="noopener"
            class="text-blue-600 hover:text-blue-800 underline break-all text-xs sm:text-sm transition-colors"
          >
            {{ link.url }}
          </a>
          <p class="text-gray-600 text-xs sm:text-sm mt-1">{{ link.description }}</p>
        </div>
      </div>
    </div>

    <p class="text-gray-400 text-xs text-center mt-8">
      (*) STEM: Science, Technology, Engineering, and Math
    </p>

    <SectionDivider />
  </SectionContainer>
</template>

<style scoped>
</style>