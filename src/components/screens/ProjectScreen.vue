<template>
  <SectionContainer id="projects">
    <div class="mb-8 text-center">
      <h2 class="text-2xl font-bold mb-2">Personal Projects</h2>
      <div class="text-gray-700 mb-4">Total projects: <span class="font-semibold">{{ totalProjects }}</span></div>
      <button @click="handleShowAllPersonalProjectsSkills" class="bg-primary text-white px-4 py-2 rounded shadow hover:bg-primary-dark transition">See All Personal Project Skills</button>
    </div>
    <div class="flex flex-col gap-8">
      <div v-for="project in personalProjects" :key="project.personalProject" class="w-full bg-white rounded-lg shadow p-6">
        <div class="text-lg font-bold text-primary mb-1">{{ project.name }}</div>
        <div v-if="project.description" class="text-sm text-gray-600 mb-2">{{ project.description }}</div>
        <div class="flex gap-3 items-center flex-wrap mb-2">
          <a v-if="project.url" :href="project.url" target="_blank" class="text-xs text-blue-600 hover:underline">Visit Project</a>
          <a v-if="project.github" :href="project.github" target="_blank" class="text-xs text-blue-600 hover:underline">GitHub</a>
        </div>
        <button @click="handleShowSkillsForProject(project.personalProject)" class="mt-2 bg-gray-200 text-primary px-3 py-1 rounded hover:bg-primary hover:text-white transition">See Related Skills</button>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from "@/components/layout/SectionContainer.vue";
import { personalProjects } from "@/data/personal-projects.ts";
import { computed, defineEmits } from "vue";

const emit = defineEmits(["showSkillsForProject", "showAllPersonalProjectsSkills"]);

const totalProjects = computed(() => personalProjects.length);

function handleShowSkillsForProject(projectId: string) {
  emit("showSkillsForProject", projectId);
}

function handleShowAllPersonalProjectsSkills() {
  emit("showAllPersonalProjectsSkills");
}
</script>
