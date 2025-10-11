<script setup lang="ts">
import SectionContainer from '../layout/SectionContainer.vue';
import SectionDivider from '../layout/SectionDivider.vue';
import MasonryGrid from '../layout/MasonryGrid.vue';
import { softwareDevelopment } from '@/data/software-development.ts';
import { personalProjects } from '@/data/personal-projects.ts';
import { ref, computed, nextTick } from 'vue';
import type { SkillType, PersonalProject, Company } from '@/models/skills.model';

const selectedType = ref<SkillType | ''>('');
const selectedProject = ref<PersonalProject | ''>('');
const selectedCompany = ref<Company | ''>('');

const projectOptions = personalProjects.map(p => ({ value: p.projectId, label: p.name }));

// Gather all unique company names from all skills' usedAt
const companyOptions = computed(() => {
  const companies = new Set<Company>();
  softwareDevelopment.categories.forEach(category => {
    category.subcategories.forEach(sub => {
      sub.skills.forEach(skill => {
        if (Array.isArray(skill.usedAt)) {
          skill.usedAt.forEach(company => {
            if (company === 'ikonsoft' || company === 'msg-systems') {
              companies.add(company as Company);
            }
          });
        }
      });
    });
  });
  return Array.from(companies);
});

const filteredCategories = computed(() => {
  return softwareDevelopment.categories.map(category => {
    const filteredSubcategories = category.subcategories.map(sub => {
      let skills = sub.skills;

      // If a specific project is selected, show skills with that project
      // regardless of type (to catch cases where type wasn't set)
      if (selectedProject.value) {
        skills = skills.filter(skill => skill.personalProjects?.includes(selectedProject.value as PersonalProject));
      }
      // Only apply type filter if no specific project is selected
      else if (selectedType.value) {
        skills = skills.filter(skill => skill.type?.includes(selectedType.value as SkillType));
      }

      // Company filter is independent
      if (selectedCompany.value) {
        skills = skills.filter(skill => Array.isArray(skill.usedAt) && skill.usedAt.includes(selectedCompany.value as Company));
      }

      return { ...sub, skills };
    }).filter(sub => sub.skills.length > 0);
    return { ...category, subcategories: filteredSubcategories };
  }).filter(category => category.subcategories.length > 0);
});

function resetFilters() {
  selectedType.value = '';
  selectedProject.value = '';
  selectedCompany.value = '';
}

function scrollToSkills() {
  nextTick(() => {
    const el = document.getElementById('skills');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

function handleShowSkillsForCompany(companyId: Company) {
  resetFilters();
  selectedCompany.value = companyId;
  scrollToSkills();
}

function handleShowAllWorkSkills() {
  resetFilters();
  selectedType.value = 'work-experience';
  scrollToSkills();
}

function handleShowSkillsForProject(projectId: PersonalProject) {
  resetFilters();
  selectedProject.value = projectId;
  scrollToSkills();
}

function handleShowAllPersonalProjectsSkills() {
  resetFilters();
  selectedType.value = 'personal-projects';
  scrollToSkills();
}

// Expose handlers for parent/other components
defineExpose({
  handleShowSkillsForCompany,
  handleShowAllWorkSkills,
  handleShowSkillsForProject,
  handleShowAllPersonalProjectsSkills
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
      <select v-model="selectedCompany" class="border rounded px-2 py-1">
        <option value="">All Companies</option>
        <option v-for="company in companyOptions" :key="company" :value="company">
          {{ company }}
        </option>
      </select>
      <button @click="resetFilters" class="border rounded px-4 py-1 bg-red-500 text-white">
        Reset Filters
      </button>
    </div>
    <MasonryGrid>
      <div v-for="category in filteredCategories" :key="category.title">
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
    </MasonryGrid>
    <SectionDivider />
  </SectionContainer>
</template>

<style scoped>
</style>