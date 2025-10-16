<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue';
import SectionDivider from '@/components/layout/SectionDivider.vue';
import GlassCard from '@/components/layout/GlassCard.vue';
import {profileInfo} from '@/data/profile-info.ts';

const today = new Date('2025-10-09').toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
</script>

<template>
  <SectionContainer id="home">
    <div class="flex flex-col items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
      <img
        :src="profileInfo.photo"
        alt="Profile"
        class="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-tertiary object-cover shadow-lg"
      />
      <h1 class="text-xl sm:text-2xl font-bold text-primary text-center">
        {{ profileInfo.fullName }}
      </h1>
      <p class="text-base sm:text-lg text-gray-600 text-center">{{ profileInfo.title }}</p>
      <p class="text-xs text-gray-400 italic text-center max-w-sm px-2">
        Info: The full name above is from a dedicated field. Family name: <b>{{ profileInfo.lastName }}</b>, given name: <b>{{ profileInfo.firstName }}</b>.
      </p>
      <time class="text-xs sm:text-sm text-gray-400">{{ today }}</time>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full">
      <GlassCard
        v-for="card in profileInfo.infoCard"
        :key="card.label"
        customClass="flex flex-col items-center p-4 sm:p-5 h-full"
      >
        <img v-if="card.icon" :src="card.icon" alt="" class="w-9 h-9 sm:w-10 sm:h-10 mb-2" />
        <div class="font-semibold text-primary text-center text-sm sm:text-base">{{ card.label }}</div>
        <div class="text-xs sm:text-sm text-gray-700 text-center mt-1">{{ card.details }}</div>
        <div v-if="card.info" class="text-xs text-gray-400 mt-1.5 text-center">{{ card.info }}</div>
      </GlassCard>
    </div>

    <SectionDivider />
  </SectionContainer>
</template>

<style scoped>

</style>