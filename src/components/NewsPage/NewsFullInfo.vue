<template>
    <div class="news-info">
        <div class="news-info__date">
            <p class="news-info__published">{{ formatDate(date) }} г.</p>
            <span class="news-info__hits"><img :src="hitsIcon" alt="watch icon">
                <p>{{ hits }}</p>
            </span>
        </div>
        <div class="news-info__social-list">
            <img :src="facebookShortIcon" alt="">
            <img :src="whatsappShortIcon" alt="">
            <img :src="telegramShortIcon" alt="">
            <img :src="vkShortIcon" alt="">
            <img :src="odnoklassnikiShortIcon" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">
import { formatDate } from '@/hooks';
import hitsIcon from '@/assets/icons/watchs.svg'
import { whatsappShortIcon, vkShortIcon, facebookShortIcon, odnoklassnikiShortIcon, telegramShortIcon } from '@/assets/icons/social-short/index'
import { computed } from '@vue/reactivity';

const props = defineProps<{
    publishedAt: string,
    newsHits: string
}>()
const date = computed(() => props.publishedAt)
const hits = computed(() => props.newsHits)

</script>

<style lang="scss">
.news-info {

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width:770px) {
        flex-direction: column;
        align-items: start;
    }




    &__date {
        font-weight: 500;
        font-size: 20px;
        line-height: 87.69%;
        color: #999999;
        display: flex;
        margin-top: 32px;
        align-items: center;
        padding-bottom: 20px;

        @media (max-width:770px) {
            font-weight: 500;
            font-size: 16px;
            line-height: 87.69%;
            margin-top: 15px;
            padding-bottom: 0px;
        }




    }

    &__hits {
        display: flex;
        align-items: center;
        margin-left: 42px;

        P {
            margin-left: 10px;
        }

        @media (max-width:770px) {
            display: none;
        }
    }

    &__social-list {
        display: flex;
        align-items: center;
        margin-top: 10px;

        @media (max-width:770px) {
            margin-top: 20px;
            ;
        }

        img {
            margin-right: 20px;

            &:last-child {
                margin-right: 0;
            }
        }
    }
}
</style>

