<template>
    <div class="news-page">
        <PageHistory :title="news?.attributes.Header" class="history-section" />
        <Title class="title" title="Новости компании" />
        <h2 class="news-page__header-title">{{ news?.attributes.Header }}</h2>
        <div class="news-page__main">
            <NewsFullMain v-if="news?.attributes" :attributes="news.attributes" />
            <NewsFullSidebar :currentNewsId="news?.id" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { fetchNewsItem } from '@/api';
import PageHistory from '@/components/PageHistory.vue';
import type { newsItem } from '@/types';
import { onMounted, ref, watch, watchEffect } from 'vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
import { Title } from '@/components/News';
import NewsFullMain from '@/components/NewsPage/NewsFullMain.vue';
import NewsFullSidebar from '@/components/NewsPage/NewsFullSidebar.vue';
const news = ref<newsItem>()
const route = useRoute()
const router = useRouter()


onMounted(async () => {
    news.value = await fetchNewsItem(Number(route.params.id))
})

onBeforeRouteUpdate(async (to, from) => {
    news.value = await fetchNewsItem(Number(to.params.id))
})






</script>

<style lang="scss" >
.history-section {
    margin-top: 48px;

    @media (max-width:770px) {
        width: 100%;

    }
}

.title {
    margin-top: 26px;

    @media (max-width:770px) {
        width: 100%;
        font-size: 20px;
        line-height: 87.69%;
    }
}

.news-page {


    &__header-title {
        margin-top: 40px;

        @media (max-width:770px) {
            width: 100%;
            font-weight: 700;
            font-size: 18px;
            line-height: 120%;
            margin-top: 20px;

        }
    }

    &__main {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        @media (max-width:770px) {
            width: 100%;
        }

    }

}
</style>