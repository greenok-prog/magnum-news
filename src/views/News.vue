<template>
    <main class="container">
        <PageHistory class="history-section" />
        <Title class="title" title="Magnum Life" />

        <CategoryPreloader class="sorting-buttons" v-if="isLoadingCategories"/>
        <SortingButtons v-if="!isLoadingCategories"  class="sorting-buttons" :selectedOrder="selectedCategory"
            :sortingButtons="toRaw(categories)" @selectOrder="selectCategory" />

        <NewsList v-if="!isLoadingNews" :newsList="news" />
        <NewsListPreloader v-if="isLoadingNews"/>
    </main>
</template>

<script lang="ts" setup>
import PageHistory from '@/components/PageHistory.vue';
import Title from '@/components/News/Title.vue';
import SortingButtons from '@/components/News/SortingButtons.vue'
import NewsList from '@/components/News/NewsList.vue'
import type { category } from '@/types';
import CategoryPreloader from '@/components/Preloader/CategoryPreloader.vue';
import { onMounted, ref, toRaw } from 'vue';
import axios from 'axios'
import { categoriesAPI, newsAPI } from '@/api/index'
import NewsListPreloader from '@/components/Preloader/NewsListPreloader.vue';

const categories = ref<category[]>([{
    id: 0,
    attributes: {
        label: 'Все',
        createdAd: '0'
    }
}])
const news = ref([])
const isLoadingCategories = ref(false)
const isLoadingNews = ref(false)
async function getNews(){
    isLoadingNews.value = true
    try{
        const res = await axios.get(newsAPI)
        news.value = res.data.data
        console.log(news);
        
    }catch{
        console.log('error');
        
    }
    isLoadingNews.value = false
}
async function getorderByItems() {
    isLoadingCategories.value = true
    try{
        const res = await axios.get(categoriesAPI)
        categories.value = [...categories.value, ...res.data.data]   
    }catch(e){
        console.log('error');  
    }
    isLoadingCategories.value = false
    
    

}

getorderByItems()
getNews()
    
    
    
    


const selectedCategory = ref<category>({
    id: 0,
    attributes: {
        label: 'all',
        createdAd: ''
    }
})


const selectCategory = (order: category) => {
    selectedCategory.value = order

}



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