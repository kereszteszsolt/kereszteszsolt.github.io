<template>
  <SectionContainer id="projects">
    <div class="mb-8 text-center">
      <h2 class="text-2xl font-bold mb-4">Personal Projects</h2>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <div class="flex items-center gap-3 bg-neutral shadow rounded-xl px-4 sm:px-6 py-3">
          <img src="/assets/icons/architecture-plan-icon.png" alt="Projects" class="w-8 h-8" />
          <div class="text-left">
            <div class="text-2xl font-extrabold text-primary">{{ totalProjects }}</div>
            <div class="text-sm text-gray-600 font-medium">Projects</div>
          </div>
        </div>
      </div>
      <button @click="handleShowAllPersonalProjectsSkills"
        class="text-base px-4 py-2 rounded border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 font-medium">
        See All Personal Project Skills
      </button>
    </div>
    <MasonryGrid>
      <div v-for="project in personalProjects" :key="project.projectId">
        <div class="text-lg font-bold text-primary mb-1">{{ project.name }}</div>
        <div v-if="project.description" class="text-sm text-gray-600 mb-2">{{ project.description }}</div>
        <FlexPackWrapper class="mb-3">
          <button
            v-if="project.projectId"
            @click="handleShowSkillsForProject(project.projectId)"
            title="Filter skills used in this project and jump to skills section"
            class="text-xs px-3 py-1.5 rounded border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 font-medium"
          >
            🎯 View Project Skills
          </button>
          <template v-if="Array.isArray(project.links)">
            <template v-for="(link, idx) in project.links" :key="'link-' + idx">
              <button
                v-if="link && link.url"
                type="button"
                @click="openUrl(link.url)"
                :title="link.url"
                class="text-xs px-3 py-1.5 rounded border border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-200 font-medium flex items-center gap-1"
              >
                <img
                  src="/assets/icons/world-globe-line-icon.png"
                  alt="Website"
                  class="w-4 h-4"
                />
                {{ link.title || 'Visit Project' }}
              </button>
            </template>
          </template>
          <template v-if="Array.isArray(project.repos)">
            <template v-for="(repo, idx) in project.repos" :key="'repo-' + idx">
              <button
                v-if="repo && repo.url"
                type="button"
                @click="openUrl(repo.url)"
                :title="repo.url"
                class="text-xs px-3 py-1.5 rounded border border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-200 font-medium flex items-center gap-1"
                aria-label="View on GitHub"
              >
                <img
                  src="/assets/icons/github-icon.png"
                  alt="GitHub"
                  class="w-4 h-4"
                />
                {{ repo.title || 'GitHub' }}
              </button>
            </template>
          </template>
          <template v-if="Array.isArray(project.videos)">
            <template v-for="(video, idx) in project.videos" :key="'video-' + idx">
              <button
                v-if="video && video.url"
                type="button"
                @click="openUrl(video.url)"
                :title="video.url"
                class="text-xs px-3 py-1.5 rounded border border-tertiary text-tertiary hover:bg-tertiary hover:text-white transition-all duration-200 font-medium flex items-center gap-1"
                aria-label="Watch on YouTube"
              >
                <img
                  src="/assets/icons/youtube-color-icon.png"
                  alt="YouTube"
                  class="w-4 h-4"
                />
                {{ video.title || 'Watch Video' }}
              </button>
            </template>
          </template>
        </FlexPackWrapper>
      </div>
    </MasonryGrid>
    <SectionDivider />
  </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from "@/components/layout/SectionContainer.vue";
import SectionDivider from "@/components/layout/SectionDivider.vue";
import MasonryGrid from "@/components/layout/MasonryGrid.vue";
import FlexPackWrapper from "@/components/layout/FlexPackWrapper.vue";
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
