<template>
    <div class="news-list">
        <NewsListItem v-for="newsItem in props.newsList" :key="newsItem.id" :newsItem="newsItem" />

    </div>
</template>

<script setup lang="ts">
import type { newsItem } from '@/types';
import NewsListItem from './NewsListItem.vue';


const props = defineProps<{
    newsList: newsItem[]
}>()
</script>

<style lang="scss" >
.news-list {
    margin-top: -24px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width:750px) {
        justify-content: center;
    }
}
</style>