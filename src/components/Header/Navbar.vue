<template>
    <nav class="navbar">
        <ul class="navbar__list">
            <li class="navbar__item">
                <RouterLink to="/" class="navbar__link navbar__link_blue">Каталог скидок</RouterLink>
            </li>
            <li class="navbar__item">
                <RouterLink to="/" class="navbar__link navbar__link_yellow">Акции</RouterLink>
            </li>
            <div class="vertical-line"></div>
            <li class="navbar__item" v-for="link in links" :key="link">
                <RouterLink class="navbar__link" to="/">{{ link }}</RouterLink>
            </li>
        </ul>
    </nav>
</template>
<script setup lang="ts">
const links: string[] = ['Magnum Club', 'Magnum Go', 'Наши бренды', 'Готовим с Magnum', 'Магазины', 'Контакты', 'О компании']

</script>

<style scoped lang="scss">
.vertical-line {
    margin-right: -18px;
    margin-left: -18px;
}

.navbar {
    @media (max-width: 1200px) {
        display: none;
    }
}

.navbar__list {
    margin-top: 27px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 1250px) {
        overflow-x: scroll;
    }

    .navbar__item {
        list-style-type: none;
    }

    .navbar__link {
        text-decoration: none;
        font-weight: 400;
        font-size: 18px;
        line-height: 87.69%;
        color: #2D2F32;
        transition: all 0.2s ease-in-out;

        &:hover {
            color: #F50F64;
        }


        &_blue {
            color: #6E2DC3;
            font-weight: 500;



            &:hover {

                color: #6E2DC3;

            }
        }

        &_yellow {
            color: #FF8200;
            font-weight: 500;

            &:hover {

                color: #FF8200;

            }
        }
    }
}
</style>

