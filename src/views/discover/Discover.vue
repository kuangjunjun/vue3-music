<template>
    <div class="px-5">
        <h1 class="text-3xl font-bold pt-8 pb-4">推荐</h1>
        <Banner :per-page="3"/>
        <Personalized/>
        <PersonalizedNewSong/>
        <Mv/>
    </div>
</template>

<script setup lang="ts">
import Banner from '../../components/common/Banner.vue';
import Personalized from './Personalized.vue';
import PersonalizedNewSong from './PersonalizedNewSong.vue';
import Mv from './MV.vue';
</script>

<style scoped>

</style>