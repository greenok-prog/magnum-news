<template>
    <div class="footer-contacts">
        <div class="footer-contacts__block">
            <p class="footer-contacts__title">Служба поддержки</p>
            <p class="footer-contacts__phone">
                7766
            <div class="footer-contacts__vr"></div>
            звонок бесплатный
            </p>
        </div>
        <div class="footer-contacts__block social">
            <p class="footer-contacts__title">Мы в социальных сетях</p>
            <ul class="footer-contacts__social ">
                <RouterLink to="/"><img class="footer-contacts__soc" :src="facebookIcon" alt="fsadf"></RouterLink>
                <RouterLink to="/"><img class="footer-contacts__soc" :src="instagramIcon" alt="fsadf"></RouterLink>
                <RouterLink to="/"><img class="footer-contacts__soc" :src="twitterIcon" alt="fsadf"></RouterLink>
                <RouterLink to="/"><img class="footer-contacts__soc" :src="tikTokIcon" alt="fsadf"></RouterLink>
                <RouterLink to="/"><img class="footer-contacts__soc" :src="telegramIcon" alt="fsadf"></RouterLink>
                <RouterLink to="/"><img class="footer-contacts__soc" :src="vkIcon" alt="fsadf"></RouterLink>
                <RouterLink to="/"><img class="footer-contacts__soc" :src="okIcon" alt="fsadf"></RouterLink>

            </ul>
        </div>
        <div class="footer-contacts__block delivery">
            <p class="footer-contacts__title">Служба доставки Magnum Go</p>
            <p class="footer-contacts__phone">
                7772
            <div class="footer-contacts__vr"></div>
            звонок бесплатный
            </p>
            <div class="footer-contacts__magnumgo"><img :src="magnumGoIcon" alt="magnumgo">
                <p>@MagnumGO_bot</p>
            </div>
        </div>


    </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { facebookIcon, instagramIcon, okIcon, telegramIcon, tikTokIcon, twitterIcon, vkIcon } from '@/assets/icons/social/index'
import magnumGoIcon from '@/assets/icons/mgo.png'

</script>


<style lang="scss" >
.footer-contacts {
    display: flex;
    flex-direction: column;


    @media (max-width:1100px) {
        margin-top: 24px;
        width: 100%;
    }

    .delivery {
        margin-top: 33px;
    }

    &__block {
        display: flex;
        flex-direction: column;

        @media (max-width:1100px) {
            width: 100%;
        }



    }

    &__title {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        color: #999999;
    }

    &__phone {
        margin-top: 16px;
        display: flex;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        color: #2D2F32;
    }

    &__vr {
        margin: 0 8px;
        width: 1px;
        height: 18px;
        background-color: #C4C4C4;
    }

    &__social {
        display: flex;
        margin-top: 16px;

        a {
            margin-right: 14px;

            @media (max-width:1100px) {
                width: 27px;
            }
        }
    }

    &__magnumgo {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 14px;

        p {
            margin-left: 20px;
            font-weight: 400;
            font-size: 18px;
            line-height: 25px;



            color: #F50F64;
        }
    }

}

.social {
    margin-top: 39px;
}
</style>