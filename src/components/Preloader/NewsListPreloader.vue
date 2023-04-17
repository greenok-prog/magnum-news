<template>
    <div class="news-list">
        <NewsListItemPreloader v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7]" />

    </div>
</template>
<script lang="ts" setup>
import NewsListItemPreloader from './NewsListItemPreloader.vue';
</script>
<style  lang="scss">
.news-list {
    margin-top: -24px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>