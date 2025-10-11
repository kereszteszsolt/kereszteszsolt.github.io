<template>
  <SectionContainer id="projects">
    <div class="mb-8 text-center">
      <h2 class="text-2xl font-bold mb-2">Personal Projects</h2>
      <div class="text-gray-700 mb-4">Total projects: <span class="font-semibold">{{ totalProjects }}</span></div>
      <button @click="handleShowAllPersonalProjectsSkills" class="bg-primary text-white px-4 py-2 rounded shadow hover:bg-primary-dark transition">See All Personal Project Skills</button>
    </div>
    <MasonryGrid>
      <div v-for="project in personalProjects" :key="project.projectId">
        <div class="text-lg font-bold text-primary mb-1">{{ project.name }}</div>
        <div v-if="project.description" class="text-sm text-gray-600 mb-2">{{ project.description }}</div>
        <div class="flex gap-2 items-center flex-wrap mb-3">
          <template v-if="Array.isArray(project.links)">
            <template v-for="(link, idx) in project.links" :key="'link-' + idx">
              <a
                v-if="link && link.url"
                :href="link.url"
                target="_blank"
                :title="link.url"
                class="text-xs px-3 py-1.5 rounded border border-tertiary text-tertiary hover:bg-tertiary hover:text-white transition-all duration-200 font-medium flex items-center gap-1"
              >
                <img
                  src="/assets/icons/world-globe-line-icon.png"
                  alt="Website"
                  class="w-4 h-4"
                />
                {{ link.title || 'Visit Project' }}
              </a>
            </template>
          </template>
          <template v-if="Array.isArray(project.repos)">
            <template v-for="(repo, idx) in project.repos" :key="'repo-' + idx">
              <a
                v-if="repo && repo.url"
                :href="repo.url"
                target="_blank"
                :title="repo.url"
                class="text-xs px-3 py-1.5 rounded border border-tertiary text-tertiary hover:bg-tertiary hover:text-white transition-all duration-200 font-medium flex items-center gap-1"
                aria-label="View on GitHub"
              >
                <img
                  src="/assets/icons/contact/github-icon.png"
                  alt="GitHub"
                  class="w-4 h-4"
                />
                {{ repo.title || 'GitHub' }}
              </a>
            </template>
          </template>
          <template v-if="Array.isArray(project.videos)">
            <template v-for="(video, idx) in project.videos" :key="'video-' + idx">
              <a
                v-if="video && video.url"
                :href="video.url"
                target="_blank"
                :title="video.url"
                class="text-xs px-3 py-1.5 rounded border border-tertiary text-tertiary hover:bg-tertiary hover:text-white transition-all duration-200 font-medium flex items-center gap-1"
                aria-label="Watch on YouTube"
              >
                <img
                  src="/assets/icons/contact/youtube-color-icon.png"
                  alt="YouTube"
                  class="w-4 h-4"
                />
                {{ video.title || 'Watch Video' }}
              </a>
            </template>
          </template>
        </div>
        <button
          v-if="project.projectId"
          @click="handleShowSkillsForProject(project.projectId)"
          title="Filter skills used in this project and jump to skills section"
          class="mt-2 text-xs px-3 py-1.5 rounded border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 font-medium"
        >
          🎯 View Project Skills
        </button>
      </div>
    </MasonryGrid>
    <SectionDivider />
  </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from "@/components/layout/SectionContainer.vue";
import SectionDivider from "@/components/layout/SectionDivider.vue";
import MasonryGrid from "@/components/layout/MasonryGrid.vue";
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
