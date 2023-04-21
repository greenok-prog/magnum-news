<template>
    <ul class="sorting-preloader">
        <li v-for="(button, index) in [1, 2, 3, 4]" :key="index" class="sorting-preloader__item">
        </li>
    </ul>
</template>

<style lang="scss">
.sorting-preloader {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &__item {
        width: 60px;
        height: 37px;
        padding: 5px 15px;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #2D2F32;
        list-style-type: none;
        background: #ECECEC;
        border-radius: 15px;
        margin-right: 10px;
        cursor: pointer;
    }


}
</style>