<template>
    <Teleport to="#app">
        <div class="city-menu__bg " @click="closeHandler">
            <div class="city-menu">
                <h2 class="city-menu__title">Выберите свой город:</h2>
                <ul class="city-menu__list">
                    <li @click="selectCityHandler(city)" class="city-menu__item"
                        :class="props.selectedCity === city ? 'city-menu__item_active' : ''" v-for="city in props.cityList">
                        {{ city }}
                    </li>
                </ul>
            </div>

        </div>
    </Teleport>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['closeMenu', 'selectCity'])
const props = defineProps<{
    cityList: Array<string>,
    selectedCity: string
}>()
const closeHandler = (event: any) => {
    if (event.target.classList[0] === 'city-menu__bg') {
        emit('closeMenu')
    }
}
const selectCityHandler = (city: string) => {
    emit('selectCity', city)
    emit('closeMenu')
}
onMounted(() => {
    document.body.classList.add('fixed')
})
onUnmounted(() => {
    document.body.classList.remove('fixed')
})
</script>

<style lang="scss" >
.city-menu__bg {
    position: fixed;
    width: 100%;
    height: 100vmax;
    background: #00000065;
    overflow-y: hidden;
    z-index: 100;
    left: 0;
    top: 0;
}

body.fixed {
    overflow: hidden;
}

.city-menu {
    width: 400px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #fff;
    border-radius: 15px;
    padding: 30px;

    &__title {
        font-weight: 500;
    }

    &__list {
        margin-top: 40px;
    }

    &__item {
        list-style-type: none;
        margin-top: 15px;
        font-size: 20px;
        cursor: pointer;


        &_active {
            color: #F50F64;
        }

        &:hover {
            color: #F50F64;
        }
    }


}
</style>