<script setup lang="ts">
defineProps({ title: String });
</script>

<template>
  <section>
    <h2 class="text-2xl font-semibold text-primary mb-4 border-b-2 border-tertiary pb-1">
      {{ title }}
    </h2>
    <div><slot /></div>
  </section>
</template>

<style scoped>

</style>