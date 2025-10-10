<template>
  <SectionContainer id="projects">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
      <div v-for="project in personalProjects" :key="project.name" class="flex flex-col bg-white rounded-lg shadow-lg p-6 h-full">
        <div class="font-bold text-lg text-primary mb-2">{{ project.name }}</div>
        <div class="text-gray-700 mb-4 flex-1">{{ project.description }}</div>
        <div v-if="project.links && project.links.length" class="mb-2">
          <div class="font-semibold text-xs text-gray-500">Links:</div>
          <ul class="list-disc pl-4">
            <li v-for="link in project.links" :key="link.url">
              <a :href="link.url" target="_blank" rel="noopener" class="text-blue-600 hover:underline">{{ link.title }}</a>
            </li>
          </ul>
        </div>
        <div v-if="project.repos && project.repos.length">
          <div class="font-semibold text-xs text-gray-500">Repositories:</div>
          <ul class="list-disc pl-4">
            <li v-for="repo in project.repos" :key="repo.url">
              <a :href="repo.url" target="_blank" rel="noopener" class="text-blue-600 hover:underline">{{ repo.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from '../layout/SectionContainer.vue';
import { personalProjects } from '@/data/personal-projects.ts';
</script>
