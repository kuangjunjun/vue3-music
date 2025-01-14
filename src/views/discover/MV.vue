<template>
    <div>
        <Title title="推荐MV" />
        <div class="grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-5">
            <div v-for="item in personalizedMv" :key="item.id">
                <CoverPlay :pic-url="item.picUrl" video :name="item.name" :play-count="item.playCount"
                    show-play-count />
                <div class="truncate text-xs mt-2">{{ item.name }}</div>
                <div class="truncate text-xs mt-1.5 text-slate-400"><small>{{ item.artistName }}</small></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Title from '@/components/common/Title.vue'
import { usePersonalizedMv } from '../../utils/api'
import type { PersonalizedMv } from '../../models'

const personalizedMv = ref<PersonalizedMv[]>([])

onMounted(async () => {
    personalizedMv.value = await usePersonalizedMv()
    // console.log(personalizedMv.value);
})
</script>

<style scoped></style>