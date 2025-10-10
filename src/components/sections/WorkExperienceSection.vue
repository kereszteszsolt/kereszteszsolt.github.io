<template>
  <SectionContainer id="work-experience">
    <div class="flex flex-col gap-6 w-full">
      <div v-for="exp in workExperience" :key="exp.company" class="flex flex-col md:flex-row md:items-center justify-between bg-gray-50 rounded-lg shadow p-4">
        <div class="flex flex-col md:flex-row md:items-center gap-2">
          <span class="text-primary font-bold text-lg">{{ exp.company }}</span>
          <span class="hidden md:inline mx-2 text-gray-300">|</span>
          <span class="text-gray-700">{{ exp.position }}</span>
        </div>
        <div class="text-sm text-gray-500 mt-1 md:mt-0 md:text-right">
          {{ exp.startDate }} – {{ exp.endDate }} ({{ exp.years }} years)
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from '../layout/SectionContainer.vue';
import { workExperience } from '@/data/work-expereince.ts';
</script>
