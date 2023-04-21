<template>
   <header class="header">
      <div class="container">
         <HeaderTop @openMenu="openMenuHandler" />
         <Navbar />
         <HeaderMenu @closeMenu="closeMenuHandler" :isOpened="menuIsOpened" />
      </div>
   </header>
</template>

<script lang="ts" setup>
import HeaderTop from '@/components/Header/HeaderTop.vue';
import Navbar from './Navbar.vue';
import HeaderMenu from './HeaderMenu.vue';
import { ref } from 'vue';

const menuIsOpened = ref<boolean>(false)
const openMenuHandler = () => {
   menuIsOpened.value = true
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