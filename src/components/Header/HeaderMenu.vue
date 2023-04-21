<template>
    
        <div v-show="isOpened" class="header-menu">
            <p @click="emit('closeMenu')">fsdfds</p>
        </div>
  
</template>

<script lang="ts" setup>

const props = defineProps<{
    isOpened:boolean
}>()
const emit = defineEmits<{
    (e:'closeMenu'):void
}>()

const {isOpened} = props
</script>

<style lang="scss">
.header-menu {
    width: 100%;
    height: 100vh;
    background-color: #fff;
    z-index: 100;
    position: absolute;
    left: 0;
    
}
</style>