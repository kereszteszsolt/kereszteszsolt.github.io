<script setup lang="ts">
const props = defineProps({id: String})
</script>

<template>
  <section :id="id" class="flex flex-col items-center w-full h-full">
    <div class="w-full h-full max-w-[768px]">
      <slot />
    </div>
  </section>
</template>

<style scoped>

</style>