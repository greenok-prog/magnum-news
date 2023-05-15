<template>
    <div :class="isOpened ? 'header-menu_opened' : ''" class="header-menu">
        <div class="container">
            <div class="header-menu__top">
                <div class="header-menu__logo">
                    <img class="header-menu__logo-image" @click="closeMenuHandler" :src="burgerButtonIcon" alt="">
                    <div class="header-menu__logo-text">
                        <img :src="logo" alt="">
                        <h3>Наполняем жизнь</h3>
                    </div>
                </div>
                <Location :selected-city="props.selectedCity" @openCityMenu="emit('openCityMenu')" />
            </div>
            <FooterNavbar class="header-menu__bottom" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { burgerButtonIcon, locationIcon } from '@/assets/icons/index';
import logo from '@/assets/logo.png'
import Location from './Location.vue';
import FooterNavbar from '../Footer/FooterNavbar.vue';


const props = defineProps<{
    isOpened: boolean,
    selectedCity: string
}>()
const emit = defineEmits(['closeMenu', 'openCityMenu'])
const closeMenuHandler = () => {
    emit('closeMenu')
}
const isOpened = computed(() => props.isOpened)

</script>

<style lang="scss">
.header-menu {
    margin-top: 30px;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    z-index: 100;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(-100%);
    transition: all 0.3s ease-in-out;

    &__logo {
        display: flex;
        align-items: center;



    }


    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }


    &_opened {
        transform: translateX(0);
    }

    &__bottom {
        margin-top: 100px !important;
    }

}

.header-menu__logo-text {
    img {}

    h3 {
        margin-top: -5px;

    }
}

.header-menu__logo-image {
    margin-right: 30px;
}
</style>