<template>
    <div class="footer ">
        <div class="footer-inner container">
            <FooterLogo />
            <FooterNavbar />
        </div>
        <FooterBottom />
    </div>
</template>
<script lang="ts" setup>
import FooterLogo from './FooterLogo.vue';
import FooterNavbar from '@/components/Footer/FooterNavbar.vue'
import FooterBottom from './FooterBottom.vue';
</script>
<style lang="scss" scoped>
.footer {
    margin-top: 70px;
    box-shadow: 0px 7px 28px rgba(0, 0, 0, 0.15);
}
</style>