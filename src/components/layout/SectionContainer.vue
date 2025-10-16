<script setup lang="ts">
defineProps({ id: String })
</script>

<template>
  <section :id="id" class="flex flex-col items-center px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-3xl py-6 sm:py-8">
      <slot />
    </div>
  </section>
</template>

<style scoped>

</style>