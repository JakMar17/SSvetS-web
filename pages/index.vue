<template>
    <div class="snap-y__wrapper">
        <div class="snap-y__section">
            <HomeSlideIntroComponent/>
        </div>
    </div>
</template>

<script>
definePageMeta({
    layout: "no-navbar-layout"
});

export default {
    name: "Home",
    data() {
        queryContent('').findOne().then(
            ({sections}) => {
                this.sections = sections;
            });

        return {
            sections: [],
        };
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";


.snap-y {
    position: relative;

    &__wrapper {
        overflow: auto;
        width: 100vw;
        min-height: 100vh;
    }

    &__section {
        min-height: 100%;
        scroll-snap-align: center;
    }
}

@media only screen and (min-width: 768px) {
    .snap-y {
        position: fixed;

        &__wrapper {
            width: 100vw;
            height: 100vh;
            scroll-snap-type: y mandatory;
        }

        &__section {
            height: 100%;
            scroll-snap-align: center;
        }
    }
}


</style>
