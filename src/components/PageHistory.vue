<template>
    <ul class="history">
        <p class="history__item">
            Главная
        </p>
        <div class="history__dash">/</div>
        <RouterLink to="/" class="history__item">
            Magnum Life
        </RouterLink>
        <div v-if="props.title" class="history__dash">/</div>
        <p v-if="props.title" class="history__item">
            {{ props.title }}
        </p>
    </ul>
</template>

<script lang="ts" setup>

const props = defineProps<{
    title?: string
}>()

</script>

<style  lang="scss">
.history {
    display: flex;
    white-space: nowrap;
    overflow: hidden;

    &__item {
        color: #999999;
        font-weight: 400;
        font-size: 14px;
        line-height: 87.69%;
        text-decoration: none;
    }

    &__dash {
        margin: 0 5px;
        margin-top: -2px;
    }
}
</style>