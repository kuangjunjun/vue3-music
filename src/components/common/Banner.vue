<template>
    <Swiper slides-per-group-auto slides-per-view="auto" :navigation="true" :grab-cursor="true">
      <SwiperSlide v-for="item in banners" :key="item.bannerId">
        <img :src="item.pic" class="banner-image" />
      </SwiperSlide>
    </Swiper>
  </template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { ref, onMounted } from 'vue';
import type { Banner } from '../../models'
import { useBanner } from '../../utils/api'

const banners = ref<Banner[]>([])

onMounted(async() => {
    banners.value = await useBanner()
    // console.log(banners.value);
    
})


</script>

<style scoped>
.swiper {
  @apply -mx-2.5;
  .swiper-slide {
    @apply w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4 px-2.5;
  }
}

.banner-image {
  @apply rounded-lg cursor-pointer transition-all object-cover;
  @apply hover:shadow hover:opacity-80;
}
</style>