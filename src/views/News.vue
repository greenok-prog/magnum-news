<template>
    <main class="container">
        <PageHistory class="history-section" />
        <Title class="title" title="Magnum Life" />

        <CategoryPreloader class="sorting-buttons" v-if="isLoadingCategories" />
        <SortingButtons v-if="!isLoadingCategories" class="sorting-buttons" :selectedOrder="selectedCategory"
            :sortingButtons="toRaw(categories)" @selectOrder="selectCategory" />

        <NewsList v-if="!isLoadingNews" :newsList="news" />
        <NewsListPreloader v-if="isLoadingNews" />


    </main>
</template>

<script lang="ts" setup>
import { ref, toRaw, watchEffect } from 'vue';
import { NewsListPreloader, CategoryPreloader } from '@/components/Preloader'
import { NewsList, SortingButtons, Title } from '@/components/News';
import Footer from '@/components/Footer/Footer.vue'
import PageHistory from '@/components/PageHistory.vue';
import { getCategories, getAllNews, getNewsByCategory } from '@/api/index'
import type { category } from '@/types';


const categories = ref<category[]>([{
    id: 0,
    attributes: {
        label: 'Все',
        createdAd: '0'
    }
}])
const selectedCategory = ref<category>({
    id: 0,
    attributes: {
        label: 'all',
        createdAd: ''
    }
})
const isLoadingCategories = ref(false)

const news = ref([])
const isLoadingNews = ref(false)

async function getNews() {
    isLoadingNews.value = true
    if (selectedCategory.value.id === 0) {
        const allNews = await getAllNews()
        news.value = allNews
    }
    else {
        const newsByCategory = await getNewsByCategory(selectedCategory.value.id)
        news.value = newsByCategory
    }
    isLoadingNews.value = false
}
async function getorderByItems() {
    isLoadingCategories.value = true
    categories.value = [...categories.value, ...await getCategories()]
    isLoadingCategories.value = false
}
const selectCategory = (order: category) => {
    selectedCategory.value = order
}
watchEffect((selectCategory) => {
    getNews()
})

getorderByItems()







</script>

<style scoped lang="scss">
.history-section {
    margin-top: 48px;
}

.title {
    margin-top: 26px;
}

.sorting-buttons {
    margin-top: 40px;
}
</style>