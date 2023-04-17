<template>
    <div class="links-list " @click="openHandler" :class="isOpened ? 'links-list_opened' : ''">
        <p class="links-list__title">
        <p> {{ title }}</p> <img class="links-list__arrow" :class="isOpened ? 'rotated' : ''" :src="arrowDown"
            alt="arrow down">
        </p>
        <ul class="links-list__items">
            <FooterLink v-for="link in links" :to="link.to" :name="link.name" />

        </ul>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { FooterLinkProps } from './FooterLink.vue';
import FooterLink from './FooterLink.vue';
import arrowDown from '@/assets/icons/sortArrowDown.svg'
import { computed } from '@vue/reactivity';


interface FooterLinksListProps {
    title: string,
    links: FooterLinkProps[]
}
const props = defineProps<FooterLinksListProps>()
const { title, links } = props
const isOpened = ref(false)
function openHandler() {
    isOpened.value = !isOpened.value
}
</script>
<style lang="scss" >
.links-list {

    width: 100%;

    &_opened {
        .links-list__items {
            display: flex;
            margin-bottom: 16px;
        }
    }

    &__title {
        width: 100%;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #999999;
        margin-bottom: -4px;

        @media (max-width:1100px) {
            padding: 9px 0;

            display: flex;
            align-items: center;
            justify-content: space-between;

        }
    }

    &__arrow {
        display: none;
        transition: all 0.1s ease-in-out;

        @media (max-width:1100px) {
            display: block;

        }
    }

    .rotated {
        transform: rotate(180deg);
    }

    &__items {
        display: flex;
        flex-direction: column;
        max-width: 210px;


        @media (max-width:1100px) {
            display: none;
            width: 100%;
            max-width: 100%;
        }
    }




}
</style>