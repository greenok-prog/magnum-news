<template>
    <h2 class="title">{{ title }}</h2>
</template>

<script lang="ts" setup>
const props = defineProps({
    title: String
})
const { title } = props
</script>

<style scoped lang="scss">
.title {
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 87.69%;
    color: #2D2F32;
}
</style>