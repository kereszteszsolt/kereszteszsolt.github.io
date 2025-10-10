<script setup lang="ts">
const props = defineProps({id: String})
</script>

<template>
  <section :id="id" class="flex items-center justify-between w-full min-h-[calc(100vh-4rem-3rem)]">
    <div>
      <slot />
    </div>
  </section>
</template>

<style scoped>

</style>