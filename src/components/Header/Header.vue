<template>
   <header class="header">
      <div class="container">
         <HeaderTop :selectedCity="selectedCity" @openCityMenu="openCityMenu" @openMenu="openMenuHandler" />
         <Navbar />
         <HeaderMenu @openCityMenu="openCityMenu" :selectedCity="selectedCity" :cityList="cities"
            @closeMenu="closeMenuHandler" :isOpened="menuIsOpened" />
         <CityListMenu :selectedCity="selectedCity" @selectCity="selectCity" :cityList="cities" v-if="cityMenuIsOpened"
            @closeMenu="closeCityMenu" />
      </div>
   </header>
</template>

<script lang="ts" setup>
import HeaderTop from '@/components/Header/HeaderTop.vue';
import Navbar from './Navbar.vue';
import HeaderMenu from './HeaderMenu.vue';
import { ref } from 'vue';
import CityListMenu from './CityListMenu.vue';
const cities = ['Алматы', 'Шымкент', 'Астана', 'Актау']
const selectedCity = ref<string>('Алматы')
const selectCity = (city: string) => {
   selectedCity.value = city

}
const menuIsOpened = ref<boolean>(false)
const openMenuHandler = () => {
   menuIsOpened.value = true
}
const cityMenuIsOpened = ref<boolean>(false)
const openCityMenu = () => {
   cityMenuIsOpened.value = true
}
const closeCityMenu = () => {
   cityMenuIsOpened.value = false
}
const closeMenuHandler = () => {
   menuIsOpened.value = false
}

</script>

<style  lang="scss">
.header {
   padding: 42px 0 14px 0;
   box-shadow: 0px -7px 28px rgba(0, 0, 0, 0.15);
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   background-color: #fff;

   @media (max-width: 1000px) {
      padding: 26px 0 12px 0;

   }
}
</style>