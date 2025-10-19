<script setup lang="ts">
import SectionContainer from '../layout/SectionContainer.vue'
import SectionDivider from '../layout/SectionDivider.vue'
import MasonryGrid from '../layout/MasonryGrid.vue'
import GlassCard from '../layout/GlassCard.vue'
import { skills } from '@/data/skills.ts'
import { personalProjects } from '@/data/personal-projects.ts'
import { ref, computed, nextTick } from 'vue'
import type { SkillType, PersonalProject, Company } from '@/models/skills.model'

const selectedType = ref<SkillType | ''>('')
const selectedProject = ref<PersonalProject | ''>('')
const selectedCompany = ref<Company | ''>('')

const projectOptions = personalProjects.map((p) => ({ value: p.projectId, label: p.name }))

// Gather all unique company names from all skills' usedAt
const companyOptions = computed(() => {
  const companies = new Set<Company>()
  skills.categories.forEach((category) => {
    category.subcategories.forEach((sub) => {
      sub.skills.forEach((skill) => {
        if (Array.isArray(skill.usedAt)) {
          skill.usedAt.forEach((company) => {
            if (company === 'ikonsoft' || company === 'msg-systems') {
              companies.add(company as Company)
            }
          })
        }
      })
    })
  })
  return Array.from(companies)
})

const filteredCategories = computed(() => {
  return skills.categories
    .map((category) => {
      const filteredSubcategories = category.subcategories
        .map((sub) => {
          let skills = sub.skills

          // If a specific project is selected, show skills with that project
          // regardless of type (to catch cases where type wasn't set)
          if (selectedProject.value) {
            skills = skills.filter((skill) =>
              skill.personalProjects?.includes(selectedProject.value as PersonalProject),
            )
          }
          // Only apply type filter if no specific project is selected
          else if (selectedType.value) {
            skills = skills.filter((skill) => skill.usageType?.includes(selectedType.value as SkillType))
          }

          // Company filter is independent
          if (selectedCompany.value) {
            skills = skills.filter(
              (skill) =>
                Array.isArray(skill.usedAt) &&
                skill.usedAt.includes(selectedCompany.value as Company),
            )
          }

          return { ...sub, skills }
        })
        .filter((sub) => sub.skills.length > 0)
      return { ...category, subcategories: filteredSubcategories }
    })
    .filter((category) => category.subcategories.length > 0)
})

function resetFilters() {
  selectedType.value = ''
  selectedProject.value = ''
  selectedCompany.value = ''
}

function scrollToSkills() {
  nextTick(() => {
    const el = document.getElementById('skills')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  })
}

function handleShowSkillsForCompany(companyId: Company) {
  resetFilters()
  selectedCompany.value = companyId
  scrollToSkills()
}

function handleShowAllWorkSkills() {
  resetFilters()
  selectedType.value = 'work-experience'
  scrollToSkills()
}

function handleShowSkillsForProject(projectId: PersonalProject) {
  resetFilters()
  selectedProject.value = projectId
  scrollToSkills()
}

function handleShowAllPersonalProjectsSkills() {
  resetFilters()
  selectedType.value = 'personal-projects'
  scrollToSkills()
}

// Expose handlers for parent/other components
defineExpose({
  handleShowSkillsForCompany,
  handleShowAllWorkSkills,
  handleShowSkillsForProject,
  handleShowAllPersonalProjectsSkills,
})
</script>

<template>
  <SectionContainer id="skills">
    <div class="text-center space-y-4 mb-6">
      <h2 class="text-2xl sm:text-3xl font-bold">Skills</h2>

      <div class="flex flex-wrap gap-2.5 sm:gap-3 items-center justify-center bg-gradient-to-r from-primary/10 via-secondary/10 to-tertiary/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/30 shadow-sm">
        <label class="font-semibold text-sm sm:text-base w-full sm:w-auto">Filter by:</label>

        <select
          v-model="selectedType"
          class="flex-1 sm:flex-none min-w-0 border border-white/40 rounded-lg px-2.5 sm:px-3 py-2 bg-neutral-variant/80 backdrop-blur-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
        >
          <option value="">All Types</option>
          <option value="work-experience">Used at Work</option>
          <option value="personal-projects">Personal Projects</option>
          <option value="experimental">Experimental</option>
        </select>

        <select
          v-model="selectedProject"
          class="flex-1 sm:flex-none min-w-0 border border-white/40 rounded-lg px-2.5 sm:px-3 py-2 bg-neutral-variant/80 backdrop-blur-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
        >
          <option value="">All Projects</option>
          <option v-for="project in projectOptions" :key="project.value" :value="project.value">
            {{ project.label }}
          </option>
        </select>

        <select
          v-model="selectedCompany"
          class="flex-1 sm:flex-none min-w-0 border border-white/40 rounded-lg px-2.5 sm:px-3 py-2 bg-neutral-variant/80 backdrop-blur-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
        >
          <option value="">All Companies</option>
          <option v-for="company in companyOptions" :key="company" :value="company">
            {{ company }}
          </option>
        </select>

        <button
          @click="resetFilters"
          class="w-full sm:w-auto border border-red-400 rounded-lg px-3.5 sm:px-4 py-2 bg-red-500/90 text-white backdrop-blur-sm shadow-sm hover:bg-red-600 transition-all text-sm font-medium"
        >
          Reset Filters
        </button>
      </div>
    </div>

    <MasonryGrid>
      <GlassCard v-for="category in filteredCategories" :key="category.title" custom-class="p-4 sm:p-5">
        <div class="text-lg font-bold text-primary mb-2">{{ category.title }}</div>
        <div v-for="sub in category.subcategories" :key="sub.title" class="mb-2">
          <div class="font-semibold text-gray-700">{{ sub.title }}</div>
          <div class="flex flex-wrap gap-2 mt-1">
<!--            <FlexPackWrapper class="mt-1">--> <!-- deactivated temporarily / TODO FixME-->
              <span
                v-for="skill in sub.skills"
                :key="skill.name"
                class="bg-white/60 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm text-gray-800 shadow-sm border border-white/50 hover:bg-white/80 hover:shadow-md hover:scale-105 hover:border-primary/30 transition-all duration-200 cursor-default"
              >
                {{ skill.name }}
              </span>
<!--            </FlexPackWrapper>-->
          </div>
        </div>
      </GlassCard>
    </MasonryGrid>
    <SectionDivider />
  </SectionContainer>
</template>

<style scoped></style>