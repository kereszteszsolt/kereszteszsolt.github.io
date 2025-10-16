<script setup lang="ts">
defineProps({ id: String })
</script>

<template>
  <!-- Add consistent horizontal padding on mobile (px-4) and slightly larger on small+ screens -->
  <section :id="id" class="flex flex-col items-center px-4 sm:px-8">
    <div class="w-full h-full max-w-[768px] py-4">
      <slot />
    </div>
  </section>
</template>

<style scoped>

</style>