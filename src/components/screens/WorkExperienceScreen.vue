<template>
  <SectionContainer id="work-experience">
    <div class="text-center space-y-4 sm:space-y-5 mb-6">
      <h2 class="text-2xl sm:text-3xl font-bold">Work Experience</h2>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <InfoCard
          icon-src="/assets/icons/briefcase-bag-color-icon.png"
          icon-alt="Years"
          :value="`${totalYears}+`"
          label="Years Experience"
        />
        <InfoCard
          icon-src="/assets/icons/flats-residential-apartment-icon.png"
          icon-alt="Companies"
          :value="totalCompanies"
          label="Companies"
        />
      </div>

      <button
        @click="handleShowAllWorkSkills"
        class="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 font-medium text-sm sm:text-base"
      >
        See All Work Experience Skills
      </button>
    </div>

    <div class="flex flex-col gap-4 sm:gap-5">
      <GlassCard v-for="exp in workExperience" :key="exp.companyId" custom-class="p-4 sm:p-5">
        <div class="text-lg sm:text-xl font-bold text-primary mb-1">{{ exp.company }}</div>
        <div class="font-semibold text-gray-700 mb-1 text-sm sm:text-base">{{ exp.position }}</div>
        <div class="text-xs sm:text-sm text-gray-500 mb-2">
          {{ exp.startDate }} - {{ exp.endDate }} ({{ exp.years }}+ years)
        </div>
        <div v-if="exp.description" class="text-gray-800 mb-3 text-sm sm:text-base leading-relaxed">
          {{ exp.description }}
        </div>
        <button
          @click="handleShowSkillsForCompany(exp.companyId)"
          class="px-3 py-1.5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 font-medium text-xs sm:text-sm"
        >
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
import InfoCard from "@/components/layout/InfoCard.vue";
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
