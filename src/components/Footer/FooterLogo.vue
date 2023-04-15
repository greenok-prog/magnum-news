<template>
    <div class="footer-logo">
        <img :src="logo" alt="magnum logo">
        <h3 class="footer-logo__text">НАПОЛНЯЕМ ЖИЗНЬ</h3>
    </div>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.png'
</script>

<style scoped lang="scss">
.footer-logo {
    padding-top: 40px;

    img {
        @media (max-width: 1100px) {
            width: 148px;
            height: auto;
        }

    }

    &__text {
        font-weight: bolder;
        font-size: 21px;
        line-height: 26px;
        color: #2D2F32;

        @media (max-width: 1100px) {
            font-size: 14px;
            line-height: 17px;
        }
    }
}
</style>