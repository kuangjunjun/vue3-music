<template>
    <div>
        <Title title="推荐新音乐" />
        <div class="grid grid-flow-row grid-cols-2 2xl:grid-cols-5 gap-y-2.5 gap-x-5 cursor-pointer">
            <div v-for="(item, index) in personalizedNewSong" :key="index"
                class="hover-bg-view transition-all flex items-center">
                <img :src="item.picUrl" alt="" class="w-12 h-12 object-cover rounded flex-shrink-0" />
                <div class="px-2 text-xs flex-auto flex flex-col w-1/3">
                    <div class="text-xs flex-1 truncate ">
                        {{ item.name }}
                    </div>
                    <div class="mt-1.5 text-dc">
                        {{ item.song.artists[0].name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Title from '@/components/common/Title.vue'
import { ref, onMounted } from 'vue'
import { usePersonalizedNewSong } from '../../utils/api'
import type { PersonalizedNewSong } from '../../models'

const personalizedNewSong = ref<PersonalizedNewSong[]>([])

onMounted(async () => {
    personalizedNewSong.value = await usePersonalizedNewSong()
})
</script>

<style scoped></style>