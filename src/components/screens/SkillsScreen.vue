<script setup lang="ts">
import SectionContainer from '../layout/SectionContainer.vue';
import { softwareDevelopment } from '@/data/software-development.ts';
import { personalProjects } from '@/data/personal-projects.ts';
import { ref, computed } from 'vue';

const selectedType = ref('');
const selectedProject = ref('');

const projectOptions = personalProjects.map(p => ({ value: p.personalProject, label: p.name }));

const filteredCategories = computed(() => {
  return softwareDevelopment.categories.map(category => {
    const filteredSubcategories = category.subcategories.map(sub => {
      let skills = sub.skills;
      if (selectedType.value) {
        skills = skills.filter(skill => skill.type?.includes(selectedType.value));
      }
      if (selectedProject.value) {
        skills = skills.filter(skill => skill.personalProjects?.includes(selectedProject.value));
      }
      return { ...sub, skills };
    }).filter(sub => sub.skills.length > 0);
    return { ...category, subcategories: filteredSubcategories };
  }).filter(category => category.subcategories.length > 0);
});
</script>

<template>
  <SectionContainer id="skills">
    <div class="mb-4 flex flex-wrap gap-4 items-center justify-center">
      <label class="font-semibold">Filter by:</label>
      <select v-model="selectedType" class="border rounded px-2 py-1">
        <option value="">All Types</option>
        <option value="work-experience">Used at Work</option>
        <option value="personal-projects">Personal Projects</option>
        <option value="experimental">Experimental</option>
      </select>
      <select v-model="selectedProject" class="border rounded px-2 py-1">
        <option value="">All Projects</option>
        <option v-for="project in projectOptions" :key="project.value" :value="project.value">
          {{ project.label }}
        </option>
      </select>
    </div>
    <div class="flex flex-wrap -mx-2">
      <div v-for="category in filteredCategories" :key="category.title" class="w-full md:w-1/2 px-2 mb-6">
        <div class="text-lg font-bold text-primary mb-2">{{ category.title }}</div>
        <div v-for="sub in category.subcategories" :key="sub.title" class="mb-2">
          <div class="font-semibold text-gray-700">{{ sub.title }}</div>
          <div class="flex flex-wrap gap-2 mt-1">
            <span v-for="skill in sub.skills" :key="skill.name" class="bg-gray-100 rounded px-3 py-1 text-sm text-gray-800 shadow">
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<style scoped>

</style>