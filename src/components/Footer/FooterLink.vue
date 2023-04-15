<template>
    <RouterLink :to="to" class="links-list__item">{{ name }}</RouterLink>
</template>

<script lang="ts" setup>
export type FooterLinkProps = {
    to: string,
    name: string
}

const props = defineProps<FooterLinkProps>()
const { name, to } = props
</script>

<style lang="scss" scoped>
.links-list__item {
    list-style-type: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    margin-top: 20px;
    color: #2D2F32;
    cursor: pointer;
    text-decoration: none;

    @media (max-width:1100px) {
        width: 100%;

    }

    &:hover {
        color: #F50F64;
        ;
    }
}
</style>