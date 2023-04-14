<template>
  <div>
    <Header />
    <News />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header/Header.vue';
import News from './views/News.vue';

</script>


<style lang="scss"></style>
