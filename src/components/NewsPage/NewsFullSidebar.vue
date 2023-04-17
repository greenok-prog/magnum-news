<template>
    <div class="news-sidebar">
        <h3 class="news-sidebar__title">Читайте также</h3>
        <NewsList class="news-sidebar__news-list" :news-list="news" />
    </div>
</template>

<script lang="ts" setup>
import { getAllNews } from '@/api';
import type { newsItem } from '@/types';
import { ref } from 'vue';
import NewsList from '../News/NewsList.vue';

const news = ref<newsItem[]>([])
const getCurrentNews = async () => {
    const aviableNews: newsItem[] = []
    const currentNews: newsItem[] = await getAllNews()
    aviableNews.push(currentNews[0])
    aviableNews.push(currentNews[1])
    aviableNews.push(currentNews[2])
    news.value = aviableNews

}
const props = defineProps<{
    currentNewsId?: number
}>()

getCurrentNews()
</script>

<style lang="scss">
.news-sidebar {
    width: 27%;

    @media (max-width:770px) {
        width: 100%;
        margin-top: 50px;
    }

    &__title {
        margin-bottom: -30px;
        margin-top: 30px;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 120%;
        color: #2D2F32;

        @media (max-width:770px) {
            width: 100%;
            margin-top: 0;
        }
    }

    &__news-list {
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: flex-end;
        margin-top: 0;

        @media (max-width:770px) {
            width: 100%;
            justify-content: center;
            align-items: center;
        }


    }
}
</style>