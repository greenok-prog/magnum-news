<template>
    <div class="header-top">
        <img @click="emit('openMenu')" :src="burgerButtonIcon" class="burger-button" alt="burgerButton">
        <img :src="logoIcon" class="header-top__logo logo" alt="logo">
        <img :src="logoShortIcon" class="header-top__logo logo-short" alt="logo short">
        <div class="header-top__corp">
            <img :src="corpIcon" alt="arrow left">
            <p>Magnum Corp.</p>
            <img class="header-top__corp_more" :src="corpInfoIcon" alt="more">
        </div>
        <div class="search-field">
            <div class="search-form">
                <img :src="searchIcon" class="search-form__icon" alt="search Icon">
                <input placeholder="Найдем всё" type="text" class="search-form__input">
            </div>
            <div class="vertical-line"></div>
            <div class="sorting-field">
                <p>по товарам</p>
                <img :src="sortArrowDownIcon" alt="arrow down">
            </div>
        </div>
        <Location :selectedCity="selectedCity" @openCityMenu="emit('openCityMenu')" />
    </div>
</template>

<script lang="ts" setup>
import { corpIcon, corpInfoIcon, locationIcon, searchIcon, logoShortIcon, burgerButtonIcon, sortArrowDownIcon } from '@/assets/icons/index'
import logoIcon from '@/assets/logo.png'
import Location from './Location.vue'


const emit = defineEmits(['openMenu', 'openCityMenu'])

const props = defineProps<{
    selectedCity: string
}>()

</script>

<style  lang="scss">
.vertical-line {
    @media (max-width: 1000px) {
        display: none;
    }
}

.header-top {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    font-style: normal;

    @media (max-width: 1000px) {
        justify-content: flex-start;

    }

    &__corp {
        img {
            margin-top: 2px;
        }

        &_more {
            padding-top: 2px;
        }

    }
}



.burger-button {
    position: absolute;
    top: 25px;
    left: 0;
    margin-left: -50px;

    @media (max-width: 1200px) {
        width: 25px;
        position: relative;
        top: 0;
        margin: 0;
        margin-left: 0px;
    }
}

.header-top__logo {
    margin-top: 15px;

    @media (max-width: 1200px) {
        width: 30%;
    }

    @media (max-width: 1000px) {
        display: none;
    }
}

.logo-short {
    display: none;

    @media (max-width: 1000px) {
        display: block;
        width: 43px;
        margin-left: 16px;
        margin-top: 0px;

    }
}

.header-top__corp {

    width: 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-size: 18px;
        font-weight: 500;
        color: #F50F64;
    }

    @media (max-width: 1350px) {
        display: none;
    }
}

.search-field {
    width: 43%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 18px;
    border-radius: 15px;
    background-color: #F9F9F9;

    @media (max-width: 1250px) {
        width: 55%;
        max-width: 55%;
    }

    @media (max-width: 1200px) {
        width: 70%;
    }

    @media (max-width: 1000px) {


        margin-left: 20px;
        margin-left: auto;

    }


    .search-form {
        font-size: 18px;
        width: 72%;
        position: relative;

        @media (max-width: 1000px) {
            min-width: 100%;
        }



        &__icon {
            position: absolute;
            left: 0;
            top: 13%;
        }

        &__input {
            width: 100%;
            height: 100%;
            outline: none;
            background-color: #F9F9F9;
            border: none;
            padding-left: 30px;
            font-weight: 400;
            font-size: 18px;
            line-height: 85.98%;

            ::placeholder {
                color: #999999;
                font-weight: 400;
                font-size: 18px;
                line-height: 85.98%;
            }

            @media (max-width: 1000px) {
                min-width: 100%;
            }


        }


    }

    .sorting-field {

        width: 26%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;


        p {
            font-size: 16px;
            font-weight: 400;
        }

        @media (max-width: 1000px) {
            display: none;
        }


    }
}
</style>