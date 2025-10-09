<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Section from "@/components/Section.vue";
</script>

<template>
  <Header />
  <Section title="test_1">
    <h1>You did it!</h1>
    <p>
      Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
      documentation
    </p>
    <div class="mt-4 p-4 border border-gray-300 rounded">
      <p class="text-lg font-semibold">Tailwind CSS is working!</p>
      <p class="text-sm text-gray-600">You can start using Tailwind CSS classes in your components.</p>
    </div>
    <div class="text-[var(--primary-caption-color)] text-3xl">test</div>
  </Section>  <Section title="test_2">
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <div class="mt-4 p-4 border border-gray-300 rounded">
    <p class="text-lg font-semibold">Tailwind CSS is working!</p>
    <p class="text-sm text-gray-600">You can start using Tailwind CSS classes in your components.</p>
  </div>
  <div class="text-[var(--primary-caption-color)] text-3xl">test</div>
</Section>
  <Footer />
</template>

<style scoped>
</style>
