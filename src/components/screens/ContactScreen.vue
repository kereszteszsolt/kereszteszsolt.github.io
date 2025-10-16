<script setup lang="ts">
import SectionContainer from "@/components/layout/SectionContainer.vue";
import SectionDivider from "@/components/layout/SectionDivider.vue";
import { socialLinks } from '@/data/social-profiles.ts';
</script>

<template>
  <SectionContainer id="contact">
    <div class="mb-8 text-center">
      <h2 class="text-2xl font-bold mb-2">Contact & Social Links</h2>
    </div>
    <div class="flex flex-col gap-2 w-full">
      <div v-for="link in socialLinks" :key="link.url" class="flex items-start py-3 border-b border-gray-200 last:border-b-0">
        <img v-if="link.icon" :src="link.icon" :alt="link.title + ' icon'" width="48" height="48" class="w-12 h-12 object-contain mr-4 flex-shrink-0" />
        <div class="flex-1 min-w-0">
          <div class="flex items-baseline gap-2 mb-0.5">
            <span class="font-semibold">{{ link.title }}</span>
            <span v-if="link.identifier" class="text-yellow-500 font-medium text-base">{{ link.identifier }}</span>
          </div>
          <a :href="link.url" target="_blank" rel="noopener" class="text-blue-600 underline break-all text-sm hover:text-blue-800">{{ link.url }}</a><br>
          <span class="text-gray-600 text-sm">{{ link.description }}</span>
        </div>
      </div>
    </div>
    <div class="text-gray-400 text-xs mt-10 text-center">(*) STEM: Science, Technology, Engineering, and Math</div>
    <SectionDivider />
  </SectionContainer>
</template>

<style scoped>
</style>