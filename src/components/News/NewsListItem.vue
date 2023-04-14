<template>
    <div class="news-item">
        <img :src="newsImage" class="news-item__image" alt="new">
        <p class="news-item__date">10 марта 2022 г.</p>
        <h3 class="news-item__title">Компания Magnum приобретает торговую сеть «Семейный» в Северном Казахстане</h3>
    </div>
</template>

<script setup lang="ts">
import newsImage from '@/assets/news.png'
</script>

<style lang="scss" scoped>
.news-item {
    margin-top: 70px;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    height: auto;


    &__image {
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }

    &__date {
        font-weight: 500;
        font-size: 18px;
        line-height: 87.69%;
        color: #999999;
        margin-top: 16px;
    }

    &__title {
        margin-top: 15px;
        font-weight: medium;
        font-size: 20px;
        line-height: 120%;
        color: #2D2F32;
        max-width: 340px;
        text-align: start;
    }
}
</style>