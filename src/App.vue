<script setup lang="ts">
import AppBar from "@/components/layout/AppBar.vue";
import Footer from "@/components/layout/Footer.vue";
import {profileInfo} from "@/data/profile-info.ts";
import {onMounted, ref, onUnmounted} from "vue";
import HomeScreen from "@/components/screens/HomeScreen.vue";
import WorkExperienceScreen from "@/components/screens/WorkExperienceScreen.vue";
import SkillsScreen from "@/components/screens/SkillsScreen.vue";
import ProjectScreen from "@/components/screens/ProjectScreen.vue";
import ContactScreen from "@/components/screens/ContactScreen.vue";
import LegalScreen from "@/components/screens/LegalScreen.vue";

const sections = [
  {id: "home", label: "Home"},
  {id: "work-experience", label: "Work Experience"},
  {id: "skills", label: "Skills"},
  {id: "projects", label: "Projects"},
  {id: "contact", label: "Contact"},
  {id: "legal", label: "Legal"},
];

const activeSection = ref("home");
const mainElement = ref<HTMLElement | null>(null);

function handleNavigate(id: string) {
  const el = document.getElementById(id);
  if (el && mainElement.value) {
    const offsetTop = el.offsetTop - mainElement.value.offsetTop;
    mainElement.value.scrollTo({
      top: offsetTop - 80, // Offset for AppBar (64px) + some padding
      behavior: "smooth"
    });
  }
}

function updateActiveSection() {
  if (!mainElement.value) return;

  const scrollPosition = mainElement.value.scrollTop + 150; // Account for AppBar height + offset

  let currentSection = sections[0]?.id || "home";

  for (const section of sections) {
    const el = document.getElementById(section.id);
    if (el && mainElement.value) {
      // Get the element's position relative to the main container
      const offsetTop = el.offsetTop - mainElement.value.offsetTop;
      if (scrollPosition >= offsetTop) {
        currentSection = section.id;
      }
    }
  }

  activeSection.value = currentSection;
}

onMounted(() => {
  if (mainElement.value) {
    mainElement.value.addEventListener("scroll", updateActiveSection);
    updateActiveSection();
  }
});

onUnmounted(() => {
  if (mainElement.value) {
    mainElement.value.removeEventListener("scroll", updateActiveSection);
  }
});

</script>

<template>
  <div class="flex flex-col h-screen">
    <AppBar
        :profile-image="profileInfo.photo"
        :sections="sections"
        :active-section="activeSection"
        :active-section-label="sections.find(s => s.id === activeSection)?.label || ''"
        @navigate="handleNavigate"
    />
    <main ref="mainElement" class="min-h-[calc(100vh-3rem)] overflow-y-auto pt-[4rem]">
      <HomeScreen/>
      <WorkExperienceScreen/>
      <SkillsScreen/>
      <ProjectScreen/>
      <ContactScreen/>
      <LegalScreen/>
    </main>
    <Footer/>
  </div>
</template>

<style scoped>

</style>
