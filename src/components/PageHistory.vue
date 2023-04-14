<template>
    <ul class="history">
        <p class="history__item" v-for="(item, index) in pageHistory" :key="index">
            {{ index === pageHistory.length - 1 ? item : item + ' / ' }}
        </p>
    </ul>
</template>

<script lang="ts" setup>
const pageHistory: string[] = ['Главная', 'Magnum Life']
</script>

<style scoped lang="scss">
.history {
    display: flex;

    &__item {
        color: #999999;
        font-weight: 400;
        font-size: 14px;
        line-height: 87.69%;
    }
}
</style>