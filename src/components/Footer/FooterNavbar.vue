<template>
    <div class="footer-navbar">
        <div class="footer-navbar__links-block">
            <div class="footer-navbar__links">
                <FooterLinksList v-for="footerLink in footerLinks" :title="footerLink.title" :links="footerLink.links" />
            </div>
            <div class="footer-navbar__hr"></div>
            <FooterContacts class="footer-navbar__contacts" />
        </div>


    </div>
</template>
<script lang="ts" setup>
import { footerLinks } from '@/router/links';
import FooterLinksList from './FooterLinksList.vue';
import FooterContacts from '@/components/Footer/FooterContacts.vue'


</script>
<style lang="scss" >
.footer-navbar {
    margin-top: 36px;

    &__links-block {
        display: flex;
        justify-content: space-between;

        @media (max-width:1100px) {
            flex-direction: column;
        }
    }

    &__links {
        width: 70%;
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin-right: 100px;


        @media (max-width:1100px) {
            flex-direction: column;
            width: 100%;
        }
    }

    &__hr {
        width: 100%;
        height: 1px;
        background-color: #E8E8E8;
        display: none;
        margin-top: 24px;

        @media (max-width:1100px) {
            display: block;
        }
    }

    &__contacts {
        width: 30%;
        margin-left: 10px;

        @media (max-width:1100px) {
            width: 100%;
            margin-left: 0;
        }
    }
}
</style>