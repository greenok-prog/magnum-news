<template>
    <RouterLink :to="`/${props.newsItem.id}`" class="news-item">
        <img :src="imageUrl" class="news-item__image" alt="new">
        <p class="news-item__date">{{ publishedDate }}</p>
        <h3 class="news-item__title">{{ newsHeader }}</h3>
    </RouterLink>
</template>

<script setup lang="ts">

import type { newsItem } from '@/types';
import { API } from '@/api';
import { formatDate } from '@/hooks/index'


const props = defineProps<{
    newsItem: newsItem
}>()

const imageUrl = API + props.newsItem.attributes.image.data.attributes.url
const publishedDate = formatDate(props.newsItem.attributes.publishedAt)
const newsHeader = props.newsItem.attributes.Header

</script>

<style lang="scss" >
.news-item {
    text-decoration: none;
    cursor: pointer;
    margin-top: 70px;
    max-width: 350px;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;

    @media (max-width:770px) {
        margin-top: 40px;
    }



    &__image {
        object-fit: cover;
        width: 100%;
        background-size: cover;
        height: auto;
        border-radius: 15px;

    }

    &__date {
        font-weight: 500;
        font-size: 18px;
        line-height: 87.69%;
        color: #999999;
        margin-top: 16px;

        @media (max-width:770px) {
            font-size: 14px;
        }
    }

    &__title {
        margin-top: 15px;
        font-weight: medium;
        font-size: 20px;
        line-height: 120%;
        color: #2D2F32;
        max-width: 340px;
        text-align: start;

        @media (max-width:770px) {
            font-size: 16px;
        }
    }
}
</style>