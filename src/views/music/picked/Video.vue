<template>
    <Title title="独家放送" class="mt-5" />
    <div class="grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="item in personalizedPrivateContent" :key="item.id">
            <CoverPlay :pic-url="item.sPicUrl" video :name="item.name" />
            <div class="truncate text-xs mt-2">{{ item.name }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">

import Title from "@/components/common/Title.vue";
import { onMounted, ref } from "vue";
import CoverPlay from "@/components/common/CoverPlay.vue";
import { usePersonalizedPrivateContentList } from "../../../utils/api";
import type { PersonalizedPrivateContent } from "../../../models";

const personalizedPrivateContent = ref<PersonalizedPrivateContent[]>([])

onMounted(async () => {
    personalizedPrivateContent.value = await usePersonalizedPrivateContentList(4)
})


</script>


<style lang="scss">

</style>