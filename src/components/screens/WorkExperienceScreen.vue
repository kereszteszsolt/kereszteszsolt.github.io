<template>
  <SectionContainer id="work-experience">
    <div class="mb-8 text-center">
      <h2 class="text-2xl font-bold mb-2">Work Experience</h2>
      <div class="text-gray-700 mb-1">Total years of experience: <span class="font-semibold">{{ totalYears }}</span></div>
      <div class="text-gray-700 mb-4">Total companies: <span class="font-semibold">{{ totalCompanies }}</span></div>
      <button @click="handleShowAllWorkSkills" class="bg-primary text-white px-4 py-2 rounded shadow hover:bg-primary-dark transition">See All Work Experience Skills</button>
    </div>
    <div class="flex flex-col gap-8">
      <div v-for="exp in workExperience" :key="exp.companyId" class="w-full bg-white rounded-lg shadow p-6">
        <div class="text-lg font-bold text-primary mb-1">{{ exp.company }}</div>
        <div class="font-semibold text-gray-700 mb-1">{{ exp.position }}</div>
        <div class="text-sm text-gray-500 mb-1">
          {{ exp.startDate }} - {{ exp.endDate }} ({{ exp.years }} years)
        </div>
        <button @click="handleShowSkillsForCompany(exp.companyId)" class="mt-2 bg-gray-200 text-primary px-3 py-1 rounded hover:bg-primary hover:text-white transition">See Related Skills</button>
      </div>
    </div>
    <SectionDivider />
  </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from "@/components/layout/SectionContainer.vue";
import SectionDivider from "@/components/layout/SectionDivider.vue";
import { workExperience } from "@/data/work-expereince.ts";
import { computed, defineEmits } from "vue";

const emit = defineEmits(["jumpToSkills", "showSkillsForCompany", "showAllWorkSkills"]);

const totalYears = computed(() => workExperience.reduce((sum, exp) => sum + (Number(exp.years) || 0), 0));
const totalCompanies = computed(() => workExperience.length);

function handleShowSkillsForCompany(companyId) {
  emit("showSkillsForCompany", companyId);
}
function handleShowAllWorkSkills() {
  emit("showAllWorkSkills");
}
</script>
