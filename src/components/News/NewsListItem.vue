<template>
    <div class="news-item">
        <img :src="imageUrl" class="news-item__image" alt="new">
        <p class="news-item__date">{{ publishedDate }}</p>
        <h3 class="news-item__title">{{ newsHeader }}</h3>
    </div>
</template>

<script setup lang="ts">

import type { newsItem } from '@/types';
import { API } from '@/api';
import {formatDate} from '@/hooks/index'


const props = defineProps<{
    newsItem: newsItem
}>()

const imageUrl = API + props.newsItem.attributes.image.data.attributes.formats.thumbnail.url
const publishedDate = formatDate(props.newsItem.attributes.publishedAt) 
const newsHeader = props.newsItem.attributes.Header

</script>

<style lang="scss" scoped>
.news-item {
    margin-top: 70px;
    max-width: 350px;
    width: 350px;
    
    display: flex;
    flex-direction: column;
    height: auto;


    &__image {
        object-fit: cover;
        width: 100%;
        
       height: auto;
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