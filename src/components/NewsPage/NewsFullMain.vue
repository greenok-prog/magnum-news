<template>
    <div class="news-full">
        <NewsFullInfo :newsHits="String(props.attributes.hits)" :publishedAt="props.attributes.publishedAt" />
        <div class="news-full__text">
            <img class="news-full__header-image" :src="imageUrl" alt="">
            <div class="news-full__article">
                <p class="news-full__element" v-for="text in formatedString">
                    <strong class="news-full__element__strong" v-if="text.type === 'bold'">{{ text.text }}</strong>
                    <em class="news-full__element__em" v-else-if="text.type === 'italic'">{{ text.text }}</em>
                    <img class="news-full__element__img" v-else-if="text.type === 'image'" :src="text.text" />
                    <br v-else-if="text.type === 'space'" />
                    <span v-else-if="text.type === 'regular'">{{ text.text }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { newsItemAttributes } from '@/types';
import NewsFullInfo from './NewsFullInfo.vue';
import { API } from '@/api';
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import { formatText } from '@/hooks';

const props = defineProps<{
    attributes: newsItemAttributes
}>()
const imageUrl = computed(() => API + props.attributes.image.data.attributes.url)

const formatedString = ref<any>([])

onBeforeRouteUpdate(() => {
    formatedString.value = formatText(props.attributes.text)
})
onMounted(() => {
    formatedString.value = formatText(props.attributes.text)
})
</script>

<style lang="scss">
.news-full {
    width: 67%;

    @media (max-width:770px) {
        width: 100%;
    }

    &__header-image {
        width: 100%;
        height: auto;
        border-radius: 15px;
    }

    &__text {
        margin-top: 23px;
    }

    &__article {
        margin-top: 30px;
        font-weight: 400;
        font-size: 20px;
        line-height: 120%;
        white-space: pre-line;
        text-align: start;
        overflow: hidden;
        color: #2D2F32;

        @media (max-width:770px) {
            font-size: 16px;
        }
    }

    &__element {
        margin-top: 5px;

        img {
            margin-top: 10px;
            width: 100%;
            height: auto;
            background-size: cover;
        }

        span {
            margin-top: 10px;
        }

        em {
            margin-top: 10px;
        }
    }
}
</style>