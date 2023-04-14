<template>
    <ul class="sorting-list">
        <li @click="$event => selectOrderHandler(button)" :class="selectedOrder.id === button.id ? 'active' : ''"
            v-for="(button, index) in sortingButtons" :key="button.id" class="sorting-list__item">

            {{ button.attributes.label
            }}
        </li>
    </ul>
</template>

<script lang="ts" setup>
import type { category } from '@/types';

const props = defineProps<{
    sortingButtons: category[],
    selectedOrder: category
}>()



const emit = defineEmits<{
    (e: 'selectOrder', order: any): any
}>()
const { sortingButtons } = props
const selectOrderHandler = (button: category) => {
    emit('selectOrder', button)
}


</script>

<style scoped lang="scss">
.sorting-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &__item {
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

    .active {
        background: #F50F64;
        color: #FFFFFF;
    }
}
</style>