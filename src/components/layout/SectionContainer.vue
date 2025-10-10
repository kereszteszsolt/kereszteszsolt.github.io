<script setup lang="ts">
const props = defineProps({id: String})
</script>

<template>
  <section :id="id" class="flex flex-col items-center">
    <div class="w-full h-full max-w-[768px] py-2">
      <slot />
    </div>
  </section>
</template>

<style scoped>

</style>