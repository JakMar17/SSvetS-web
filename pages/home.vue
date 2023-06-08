<template>
    <div class="snap-y__wrapper">
        <div class="snap-y__section">
            <HomeSlideSection1/>
        </div>
        <div class="snap-y__section" style="padding-top: 6em">3</div>
        <div class="snap-y__section">4</div>
        <div class="snap-y__section">5</div>
    </div>
</template>

<script>
export default {
    name: "Home",
    layout: 'test_layout',
    data() {
        return {};
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";


.snap-y {
    &__wrapper {
        overflow: auto;
        width: 100vw;
        height: 100vh;
        scroll-snap-type: y mandatory;
    }

    &__section {
        height: 100%;
        scroll-snap-align: center;
    }
}


</style>
