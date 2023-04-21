<template>
    <div :class="isOpened ? 'header-menu_opened' : ''" class="header-menu">
        <button @click="closeMenuHandler">fsdfds</button>
    </div>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity';


const props = defineProps<{
    isOpened: boolean
}>()
const emit = defineEmits(['closeMenu'])

const closeMenuHandler = () => {
    emit('closeMenu')
    console.log(isOpened);
}
const isOpened = computed(() => props.isOpened)

</script>

<style lang="scss">
.header-menu {
    width: 100%;
    height: 100vh;
    background-color: #fff;
    z-index: 100;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateX(-100%);
    transition: all 0.3s ease-in-out;

    &_opened {
        transform: translateX(0);
    }

}
</style>