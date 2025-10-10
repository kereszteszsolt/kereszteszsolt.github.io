<script setup lang="ts">
import SectionContainer from "@/components/layout/SectionContainer.vue";
import { workExperience } from "@/data/work-expereince.ts";
import { softwareDevelopment } from "@/data/software-development.ts";
import { computed } from "vue";
import type { Company, Skill, SkillCategory, SkillSubcategory } from '@/models/skills.model';

// For a given companyId, filter categories/subcategories/skills by usedAt
function getFilteredCategoriesForCompany(companyId: Company) {
  return softwareDevelopment.categories
    .map((category) => {
      const filteredSubcategories = category.subcategories
        .map((sub) => {
          const filteredSkills = sub.skills.filter(
            (skill) => skill.usedAt && skill.usedAt.includes(companyId)
          );
          return { ...sub, skills: filteredSkills };
        })
        .filter((sub) => sub.skills.length > 0);
      return { ...category, subcategories: filteredSubcategories };
    })
    .filter((category) => category.subcategories.length > 0);
}
</script>

<template>
  <SectionContainer id="work-experience">
    <div class="work-experience-list">
      <div v-for="exp in workExperience" :key="exp.companyId" class="work-experience-card">
        <div class="text-lg font-bold text-primary mb-1">{{ exp.company }}</div>
        <div class="font-semibold text-gray-700 mb-1">{{ exp.position }}</div>
        <div class="text-sm text-gray-500 mb-1">
          {{ exp.startDate }} - {{ exp.endDate }} ({{ exp.years }} years)
        </div>
        <div v-if="getFilteredCategoriesForCompany(exp.companyId).length" class="skills-masonry-grid mt-4">
          <div v-for="category in getFilteredCategoriesForCompany(exp.companyId)" :key="category.title" class="skills-masonry-item">
            <div class="text-base font-bold text-primary mb-2">{{ category.title }}</div>
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
        <div v-else class="text-xs text-gray-400 mt-4">No skills recorded for this company.</div>
      </div>
    </div>
  </SectionContainer>
</template>

<style scoped>
.work-experience-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.work-experience-card {
  width: 100%;
  background: var(--color-neutral);
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  padding: 1.5rem 1rem;
}
.skills-masonry-grid {
  columns: 2;
  column-gap: 1.5rem;
}
.skills-masonry-item {
  break-inside: avoid;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  padding: 1rem;
  margin-bottom: 1.5rem;
  display: block;
}
@media (max-width: 768px) {
  .skills-masonry-grid {
    columns: 1;
  }
}
</style>