<template>
  <SectionContainer id="projects">
    <div class="text-center space-y-4 sm:space-y-5 mb-6">
      <h2 class="text-2xl sm:text-3xl font-bold">Personal Projects</h2>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <InfoCard
          icon-src="/assets/icons/architecture-plan-icon.png"
          icon-alt="Projects"
          :value="totalProjects"
          label="Projects"
        />
      </div>

      <button
        @click="handleShowAllPersonalProjectsSkills"
        class="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 font-medium text-sm sm:text-base"
      >
        See All Personal Project Skills
      </button>
    </div>

    <MasonryGrid>
      <GlassCard v-for="project in personalProjects" :key="project.projectId" custom-class="p-4 sm:p-5">
        <h3 class="text-base sm:text-lg font-bold text-primary mb-2 hover:text-primary-600 transition-colors">
          {{ project.name }}
        </h3>
        <p v-if="project.description" class="text-xs sm:text-sm text-gray-700 mb-3 leading-relaxed">
          {{ project.description }}
        </p>

        <FlexPackWrapper class="gap-2">
          <button
            v-if="project.projectId"
            @click="handleShowSkillsForProject(project.projectId)"
            title="Filter skills used in this project and jump to skills section"
            class="px-2.5 sm:px-3 py-1.5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 font-medium text-xs flex items-center gap-1"
          >
            🎯 View Skills
          </button>

          <button
            v-for="(link, idx) in (project.links || []).filter(l => l?.url)"
            :key="'link-' + idx"
            type="button"
            @click="openUrl(link.url)"
            :title="link.url"
            class="px-2.5 sm:px-3 py-1.5 rounded-lg border border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-200 font-medium text-xs flex items-center gap-1"
          >
            <img src="/assets/icons/world-globe-line-icon.png" alt="" class="w-3.5 h-3.5" />
            {{ link.title || 'Visit' }}
          </button>

          <button
            v-for="(repo, idx) in (project.repos || []).filter(r => r?.url)"
            :key="'repo-' + idx"
            type="button"
            @click="openUrl(repo.url)"
            :title="repo.url"
            class="px-2.5 sm:px-3 py-1.5 rounded-lg border border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-200 font-medium text-xs flex items-center gap-1"
            aria-label="View on GitHub"
          >
            <img src="/assets/icons/github-icon.png" alt="" class="w-3.5 h-3.5" />
            {{ repo.title || 'GitHub' }}
          </button>

          <button
            v-for="(video, idx) in (project.videos || []).filter(v => v?.url)"
            :key="'video-' + idx"
            type="button"
            @click="openUrl(video.url)"
            :title="video.url"
            class="px-2.5 sm:px-3 py-1.5 rounded-lg border border-tertiary text-tertiary hover:bg-tertiary hover:text-white transition-all duration-200 font-medium text-xs flex items-center gap-1"
            aria-label="Watch on YouTube"
          >
            <img src="/assets/icons/youtube-color-icon.png" alt="" class="w-3.5 h-3.5" />
            {{ video.title || 'Video' }}
          </button>
        </FlexPackWrapper>
      </GlassCard>
    </MasonryGrid>

    <SectionDivider />
  </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from "@/components/layout/SectionContainer.vue";
import SectionDivider from "@/components/layout/SectionDivider.vue";
import MasonryGrid from "@/components/layout/MasonryGrid.vue";
import FlexPackWrapper from "@/components/layout/FlexPackWrapper.vue";
import GlassCard from "@/components/layout/GlassCard.vue";
import InfoCard from "@/components/layout/InfoCard.vue";
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

function openUrl(url: string) {
  window.open(url, '_blank');
}
</script>
