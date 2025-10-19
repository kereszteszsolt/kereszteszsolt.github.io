<script setup lang="ts">
import SectionContainer from "@/components/layout/SectionContainer.vue";
import SectionDivider from "@/components/layout/SectionDivider.vue";
import { ref, onMounted } from 'vue';

const emailUser = ref('contact');
const emailDomain = ref('kereszteszsolt.com');
const emailAddress = ref('');

onMounted(() => {
  // Obfuscate email to protect from spam bots
  emailAddress.value = `${emailUser.value}@${emailDomain.value}`;
});
</script>

<template>
  <SectionContainer id="legal">
    <div class="w-full space-y-10 sm:space-y-12">
      <h1 class="text-3xl sm:text-4xl font-bold">Legal Information</h1>

      <!-- Website Information -->
      <section class="space-y-4">
        <h2 class="text-2xl sm:text-3xl font-semibold">About This Website</h2>
        <div class="space-y-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
          <p><strong>Last updated:</strong> October 16, 2025</p>
          <p>
            This is a <strong>static website</strong> that serves as an electronic (online) curriculum vitae (CV).
            It is hosted and delivered directly via <strong>GitHub Pages</strong>.
          </p>
          <p>
            <strong>No data collection:</strong> This website does not collect, store, or process any personal data.
            It does not use cookies, tracking technologies, analytics tools, databases, or any backend systems.
          </p>
        </div>
      </section>

      <!-- Terms of Use -->
      <section class="space-y-4">
        <h2 class="text-2xl sm:text-3xl font-semibold">Terms of Use</h2>
        <div class="space-y-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
          <p>
            By accessing and using this website, you acknowledge that you do so at your own responsibility.
            The information provided on this site is for informational purposes only.
          </p>
          <p>
            <strong>All rights reserved.</strong> The content of this website, including all text, images, and design elements,
            is the intellectual property of Keresztes Zsolt unless otherwise stated.
          </p>
        </div>
      </section>

      <!-- Technology & Credits -->
      <section class="space-y-4">
        <h2 class="text-2xl sm:text-3xl font-semibold">Technology & Credits</h2>
        <div class="space-y-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
          <p>This website was built using modern, open-source technologies:</p>
          <ul class="list-disc list-inside space-y-1 ml-4">
            <li><strong>Vue.js</strong> - Progressive JavaScript framework</li>
            <li><strong>Vite</strong> - Next-generation frontend build tool</li>
            <li><strong>Tailwind CSS</strong> - Utility-first CSS framework</li>
          </ul>
          <p>
            Icons are sourced from <a href="https://uxwing.com/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline" title="https://uxwing.com/">UXWing</a>,
            a commercial-free icon library.
          </p>
        </div>
      </section>

      <!-- Contact Information -->
      <section class="space-y-4">
        <h2 class="text-2xl sm:text-3xl font-semibold">Contact</h2>
        <div class="space-y-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
          <p><strong>Website Maintainer:</strong> Keresztes Zsolt</p>
          <p>
            For inquiries, please use the following channels:
          </p>
          <ul class="list-none space-y-2 ml-4">
            <li class="flex items-center gap-2">
              <img src="/assets/icons/linkedin-app-icon.png" alt="LinkedIn" class="w-5 h-5 flex-shrink-0" />
              <div>
                <strong>Primary contact: </strong>
                <a
                  href="https://www.linkedin.com/in/kereszteszsolt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-600 hover:text-blue-800 underline"
                  title="@kereszteszsolt"
                >
                  LinkedIn
                </a>
              </div>
            </li>
            <li class="flex items-center gap-2">
              <img src="/assets/icons/github-icon.png" alt="GitHub" class="w-5 h-5 flex-shrink-0" />
              <div>
                <strong>GitHub: </strong>
                <a
                  href="https://github.com/kereszteszsolt"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-600 hover:text-blue-800 underline"
                  title="@kereszteszsolt"
                >
                  GitHub
                </a>
              </div>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <div>
                <strong>Email: </strong>
                <a
                  v-if="emailAddress"
                  :href="`mailto:${emailAddress}`"
                  class="text-blue-600 hover:text-blue-800 underline"
                  :title="emailAddress"
                >
                  {{ emailAddress }}
                </a>
                <span v-else class="text-gray-500">Loading...</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <SectionDivider />
    </div>
  </SectionContainer>
</template>

<style scoped>

</style>

