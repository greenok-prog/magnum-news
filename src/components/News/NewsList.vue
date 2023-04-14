<template>
    <div class="news-list">
        <NewsListItem />
        <NewsListItem />
        <NewsListItem />
        <NewsListItem />
    </div>
</template>

<script setup lang="ts">
import NewsListItem from './NewsListItem.vue';
</script>

<style lang="scss" scoped>
.news-list {
    margin-top: -24px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>