<template>
    <Teleport to="body">
        <div v-if="isOpened" class="header-menu">

        </div>
    </Teleport>
</template>

<script lang="ts" setup>
import { ref } from 'vue';


const isOpened = ref<boolean>(false)
</script>

<style lang="scss">
.header-menu {
    width: 100%;
    height: 100vh;
    background-color: #fff;
}
</style>