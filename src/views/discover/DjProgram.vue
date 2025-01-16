<template>
    <Title title="推荐电台" class="mt-5"/>
    <div class="grid grid-flow-row grid-cols-3 lg:grid-cols-6 gap-5">
      <div v-for="item in djProgram" :key="item.id">
        <CoverPlay :pic-url="item.picUrl" :name="item.name" :play-count="0"/>
        <div class="truncate text-xs mt-2">{{ item.name }}</div>
      </div>
    </div>
  </template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { DjProgram } from '../../models'
import { usePersonalizedDjProgram } from '../../utils/api'
import CoverPlay from '@/components/common/CoverPlay.vue'
import Title from '../../components/common/Title.vue'


const djProgram = ref<DjProgram[]>([])

onMounted(async () => {
   djProgram.value = await usePersonalizedDjProgram()
})
</script>

<style scoped>

</style>