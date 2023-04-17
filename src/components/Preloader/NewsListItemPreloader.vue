<template>
    <div class="preload-news">
        <p class="preload-news__image"></p>
        <p class="preload-news__date"></p>
        <h3 class="preload-news__title"></h3>
    </div>
</template>

<style lang="scss">
.preload-news {
    margin-top: 70px;

    width: 350px;

    display: flex;
    flex-direction: column;
    height: auto;


    &__image {

        background-color: #ff23;
        min-height: 190px;
        background-color: #ECECEC;
        width: 350px;
        border-radius: 15px;

    }

    &__date {
        background-color: #ECECEC;
        font-weight: 500;
        font-size: 18px;
        line-height: 87.69%;

        width: 150px;
        height: 20px;
        margin-top: 16px;
    }

    &__title {
        margin-top: 15px;


        line-height: 120%;
        color: #2D2F32;
        background-color: #ECECEC;
        max-width: 340px;
        width: 340px;
        height: 30px;
    }
}
</style>
