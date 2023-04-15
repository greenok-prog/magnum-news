<template>
  <div>
    <Header />
    <News />
    <Footer />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header/Header.vue';
import News from './views/News.vue';
import Footer from './components/Footer/Footer.vue';

</script>


<style lang="scss"></style>
