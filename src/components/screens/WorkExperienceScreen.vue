<template>
  <SectionContainer id="work-experience">
    <div class="mb-8 text-center">
      <h2 class="text-2xl font-bold mb-4">Work Experience</h2>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <div class="flex items-center gap-3 bg-neutral-variant/70 backdrop-blur-md shadow-sm rounded-xl px-4 sm:px-6 py-3 border border-white/40">
          <img src="/assets/icons/briefcase-bag-color-icon.png" alt="Years" class="w-8 h-8" />
          <div class="text-left">
            <div class="text-2xl font-extrabold text-primary">{{ totalYears }}+</div>
            <div class="text-sm text-gray-600 font-medium">Years Experience</div>
          </div>
        </div>
        <div class="flex items-center gap-3 bg-neutral-variant/70 backdrop-blur-md shadow-sm rounded-xl px-4 sm:px-6 py-3 border border-white/40">
          <img src="/assets/icons/flats-residential-apartment-icon.png" alt="Companies" class="w-8 h-8" />
          <div class="text-left">
            <div class="text-2xl font-extrabold text-primary">{{ totalCompanies }}</div>
            <div class="text-sm text-gray-600 font-medium">Companies</div>
          </div>
        </div>
      </div>
      <button @click="handleShowAllWorkSkills"
        class="text-base px-4 py-2 rounded border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 font-medium">
        See All Work Experience Skills
      </button>
    </div>
    <div class="flex flex-col gap-8">
      <GlassCard v-for="exp in workExperience" :key="exp.companyId" custom-class="p-4 sm:p-6">
        <div class="text-lg font-bold text-primary mb-1">{{ exp.company }}</div>
        <div class="font-semibold text-gray-700 mb-1">{{ exp.position }}</div>
        <div class="text-sm text-gray-500 mb-1">
          {{ exp.startDate }} - {{ exp.endDate }} ({{ exp.years }}+ years)
        </div>
        <!-- Add description below position and date info -->
        <div class="text-gray-800 mb-2" v-if="exp.description">{{ exp.description }}</div>
        <button @click="handleShowSkillsForCompany(exp.companyId)"
          class="text-xs px-3 py-1.5 rounded border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 font-medium mt-2">
          See Related Skills
        </button>
      </GlassCard>
    </div>
    <SectionDivider />
  </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from "@/components/layout/SectionContainer.vue";
import SectionDivider from "@/components/layout/SectionDivider.vue";
import GlassCard from "@/components/layout/GlassCard.vue";
import { workExperience } from "@/data/work-expereince.ts";
import { computed, defineEmits } from "vue";

const emit = defineEmits(["jumpToSkills", "showSkillsForCompany", "showAllWorkSkills"]);

const totalYears = computed(() => workExperience.reduce((sum, exp) => sum + (Number(exp.years) || 0), 0));
const totalCompanies = computed(() => workExperience.length);

function handleShowSkillsForCompany(companyId: string) {
  emit("showSkillsForCompany", companyId);
}
function handleShowAllWorkSkills() {
  emit("showAllWorkSkills");
}
</script>
