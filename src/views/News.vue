<template>
    <main class="container">
        <PageHistory class="history-section" />
        <Title class="title" title="Magnum Life" />
        <SortingButtons v-if="!isLoading" class="sorting-buttons" :selectedOrder="selectedCategory"
            :sortingButtons="toRaw(categories)" @selectOrder="selectCategory" />
        <NewsList />


    </main>
</template>

<script lang="ts" setup>
import PageHistory from '@/components/PageHistory.vue';
import Title from '@/components/News/Title.vue';
import SortingButtons from '@/components/News/SortingButtons.vue'
import NewsList from '@/components/News/NewsList.vue'
import type { category } from '@/types';
import { onMounted, ref, toRaw } from 'vue';
import axios from 'axios'
import { categoriesAPI } from '@/api/index'

const categories = ref<category[]>([{
    id: 0,
    attributes: {
        label: 'Все',
        createdAd: '0'
    }
}])
const isLoading = ref(true)

async function getorderByItems() {
    isLoading.value = true
    const res = await axios.get(categoriesAPI)
    categories.value = [...categories.value, ...res.data.data]
    isLoading.value = false

}
getorderByItems()

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