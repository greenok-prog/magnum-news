<template>
  <div>
    <Header />
    <main class="main container">
      <RouterView />
    </main>
    <Footer />

  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header/Header.vue';

import Footer from './components/Footer/Footer.vue';

</script>


<style lang="scss">
.main {
  padding-top: 180px;

  @media (max-width:1200px) {
    padding-top: 110px;
  }

  @media (max-width:1000px) {
    padding-top: 60px;
  }
}
</style>
