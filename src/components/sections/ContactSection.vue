<template>
  <SectionContainer id="contact">
    <div class="flex flex-col items-center gap-6 w-full">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        <div class="flex flex-col items-center bg-white rounded-lg shadow p-6">
          <span class="text-primary font-bold text-lg mb-2">Email</span>
          <a href="mailto:kereszteszsolt@gmail.com" class="text-blue-600 hover:underline text-center break-all">kereszteszsolt@gmail.com</a>
        </div>
        <div class="flex flex-col items-center bg-white rounded-lg shadow p-6">
          <span class="text-primary font-bold text-lg mb-2">LinkedIn</span>
          <a href="https://www.linkedin.com/in/kereszteszsolt/" target="_blank" rel="noopener" class="text-blue-600 hover:underline text-center">linkedin.com/in/kereszteszsolt</a>
        </div>
        <div class="flex flex-col items-center bg-white rounded-lg shadow p-6">
          <span class="text-primary font-bold text-lg mb-2">GitHub</span>
          <a href="https://github.com/kereszteszsolt" target="_blank" rel="noopener" class="text-blue-600 hover:underline text-center">github.com/kereszteszsolt</a>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from '../layout/SectionContainer.vue';
</script>
