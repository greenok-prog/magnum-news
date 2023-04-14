<template>
   <header class="header">
      <div class="container">
         <HeaderTop />
         <Navbar />
      </div>
   </header>
</template>

<script lang="ts" setup>
import HeaderTop from '@/components/Header/HeaderTop.vue';
import Navbar from './Navbar.vue';


</script>

<style scoped lang="scss">
.header {
   padding: 42px 0 14px 0;
   box-shadow: 0px -7px 28px rgba(0, 0, 0, 0.15);

   @media (max-width: 1000px) {
      padding: 26px 0 12px 0;

   }
}
</style>