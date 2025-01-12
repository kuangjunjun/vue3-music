<template>
    <div class="flex items-center justify-between drag h-14">
    <div class="flex items-center pl-5">
      <IconPark :icon="Left" :size="iconSize" :stroke-width="2" class="icon-button" @click="router.back()"/>
      <IconPark :icon="Right" :size="iconSize" :stroke-width="2" class="icon-button"/>
      <div class="search no-drag ml-2">
        <SearchPop/>
      </div>
    </div>
    <div class="flex items-center mr-5">
      <UserInfo />
      <IconPark :icon="Mail" :stroke-width="2" class="icon-button"/>
      <IconPark :icon="Platte" :stroke-width="2" class="icon-button" @click="changeThemeMode"/>
      <IconPark :icon="HamburgerButton" :stroke-width="2" class="icon-button"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Left, Right, Mail, Platte, HamburgerButton } from '@icon-park/vue-next'
import { ref } from 'vue'
import UserInfo from './UserInfo.vue'


const router = useRouter()

const iconSize = 22

const mode = ref(false)
const changeThemeMode = () => {
  window.document.documentElement.setAttribute('data-theme', mode.value ? 'dark' : 'light')

  mode.value = !mode.value;
}
</script>

<style scoped>
.icon-button {
  @apply p-2 cursor-pointer;
  @apply hover:text-emerald-400 ;
}
</style>