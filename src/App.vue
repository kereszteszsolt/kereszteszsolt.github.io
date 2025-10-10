<script setup lang="ts">
import AppBar from "@/components/layout/AppBar.vue";
import Footer from "@/components/layout/Footer.vue";
import { profileInfo } from "@/data/profile-info.ts";
import { onMounted, ref, onUnmounted } from "vue";
import HomeScreen from "@/components/screens/HomeScreen.vue";
import WorkExperienceScreen from "@/components/screens/WorkExperienceScreen.vue";
import SkillsScreen from "@/components/screens/SkillsScreen.vue";
import ProjectScreen from "@/components/screens/ProjectScreen.vue";
import ContactScreen from "@/components/screens/ContactScreen.vue";
import LegalScreen from "@/components/screens/LegalScreen.vue";

const sections = [
  { id: "home", label: "Home" },
  { id: "work-experience", label: "Work Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  { id: "legal", label: "Legal" },
];

const activeSection = ref("home");

function handleNavigate(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function updateActiveSection() {
  let found = false;
  for (const section of sections) {
    const el = document.getElementById(section.id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom > 100) {
        activeSection.value = section.id;
        found = true;
        break;
      }
    }
  }
  if (!found) activeSection.value = sections[0].id;
}

onMounted(() => {
  window.addEventListener("scroll", updateActiveSection);
});
onUnmounted(() => {
  window.removeEventListener("scroll", updateActiveSection);
});
</script>

<template>
  <div class="app-layout">
    <AppBar
      :profile-image="profileInfo.photo"
      :sections="sections"
      :active-section="activeSection"
      :active-section-label="sections.find(s => s.id === activeSection)?.label || ''"
      @navigate="handleNavigate"
    />
    <main class="main-content">
      <HomeScreen />
      <WorkExperienceScreen />
      <SkillsScreen />
      <ProjectScreen />
      <ContactScreen />
      <LegalScreen />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.main-content {
  flex: 1 1 auto;
  overflow-y: auto;
  min-height: 0;
  margin-top: 0; /* Remove margin for header */
  margin-bottom: 0; /* Remove margin for footer */
}
</style>
