<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue';
import SectionDivider from '@/components/layout/SectionDivider.vue';
import GlassCard from '@/components/layout/GlassCard.vue';
import {profileInfo} from '@/data/profile-info.ts';

const today = new Date('2025-10-09').toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
</script>

<template>
  <SectionContainer id="home">
    <div class="flex flex-col items-center gap-4 mb-8">
      <img :src="profileInfo.photo" alt="Profile" class="w-32 h-32 rounded-full border-4 border-tertiary object-cover shadow" />
      <div class="text-2xl font-bold text-primary">
        {{ profileInfo.fullName }}
      </div>
      <div class="text-lg text-gray-600">{{ profileInfo.title }}</div>
      <div class="text-xs text-gray-400 italic text-center max-w-xs">
        <span>Info: The full name above is from a dedicated field. Family name: <b>{{ profileInfo.lastName }}</b>, given name: <b>{{ profileInfo.firstName }}</b>.</span>
      </div>
      <div class="text-sm text-gray-400">{{ today }}</div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
      <GlassCard v-for="(card, idx) in profileInfo.infoCard" :key="card.label" customClass="flex flex-col items-center p-4 h-full">
        <img v-if="card.icon" :src="card.icon" alt="" class="w-10 h-10 mb-2" />
        <div class="font-semibold text-primary text-center">{{ card.label }}</div>
        <div class="text-sm text-gray-700 text-center mt-1">{{ card.details }}</div>
        <div v-if="card.info" class="text-xs text-gray-400 mt-1 text-center">{{ card.info }}</div>
      </GlassCard>
    </div>
    <SectionDivider />
  </SectionContainer>
</template>

<style scoped>

</style>