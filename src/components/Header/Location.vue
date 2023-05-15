<template>
    <div class="location-block">
        <div class="location-block__city" @click="openCityMenuHandler">
            <img :src="locationIcon" alt="location icon">
            <p>{{ formatedCityName }}</p>
        </div>
        <div class="vertical-line"></div>
        <div class="location-block__lang">RU</div>
    </div>
</template>

<script setup lang="ts">
import { locationIcon } from '@/assets/icons';
import { computed } from 'vue';
const props = defineProps(["selectedCity"])
const emit = defineEmits(["openCityMenu"])
const openCityMenuHandler = () => {
    emit('openCityMenu')
}
const formatedCityName = computed(() => {
    return props.selectedCity.toUpperCase().slice(0, 3)
})
</script>
<style lang="scss">
.location-block {

    width: 157px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F3F3F3;
    padding: 6px 18px;
    box-shadow: 3px 4px 12px -6px rgba(84, 84, 84, 0.15);
    border-radius: 15px;
    color: #F50F64;
    font-weight: 500;
    font-size: 18px;
    line-height: 85.98%;

    @media (max-width: 1200px) {
        display: none;
    }

    &__city {
        width: 60%;
        display: flex;
        align-items: center;
        cursor: pointer;

        p {
            margin-left: 10px;
        }

    }

    &__lang {
        width: 40%;
        display: flex;
        margin-right: -10px;
        justify-content: center;
        align-items: center;
    }
}
</style>