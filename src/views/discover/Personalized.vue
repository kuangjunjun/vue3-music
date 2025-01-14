<template>
    <div>
        <Title title="你的专属歌单" />
        <div class="grid grid-flow-row grid-cols-3 lg:grid-cols-5 gap-5 2xl:grid-cols-10">
            <div v-for="(item, index) in personalized.sampleSize(10)" :key="index" :class="{ 'item-1': index === 0 }">
                <CoverPlay :name="item.name" :pic-url="item.picUrl" :play-count="item.playCount" show-play-count />
                <div class="mt-2 text-xs text-main truncate">{{ item.name }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Title from '@/components/common/Title.vue'
import { ref, onMounted } from 'vue'
import { usePersonalized } from '../../utils/api';
import type { Personalized } from '../../models';
import CoverPlay from '@/components/common/CoverPlay.vue'


const personalized = ref<Personalized[]>([])
// 获取专属歌单
onMounted(async () => {
    personalized.value = await usePersonalized()
    // console.log(personalized.value);
})
</script>

<style scoped></style>