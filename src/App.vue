<script setup lang="ts">
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import HomeSection from './components/sections/HomeSection.vue';
import WorkExperienceSection from './components/sections/WorkExperienceSection.vue';
import SkillsSection from './components/sections/SkillsSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
import LegalSection from './components/sections/LegalSection.vue';
import { ref, onMounted } from 'vue';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'work-experience', label: 'Work Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
  { id: 'legal', label: 'Legal' }
];

const activeSection = ref('home');

function handleNavigate(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
  window.addEventListener('scroll', updateActiveSection);
});
</script>

<template>
  <Header
    :profileImage="'/public/favicon.ico'"
    :sections="sections"
    :activeSection="activeSection"
    @navigate="handleNavigate"
  />
  <main class="pt-20 pb-16">
    <HomeSection />
    <WorkExperienceSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
    <LegalSection />
  </main>
  <Footer />
</template>

<style scoped>
main {
  min-height: 100vh;
  background: #f8fafc;
}
</style>
