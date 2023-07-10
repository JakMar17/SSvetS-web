<template>
    <div class="snap-y__wrapper">
        <div class="snap-y__section">
            <HomeSlideIntroComponent/>
        </div>
        <div v-for="section of sections" class="snap-y__section">
            <HomeSlideSectionComponent v-if="section.slides == null"
                                       :image-url="section.imageUrl"
                                       :subtitle="section.subtitle"
                                       :title="section.title"
            >
                <template v-slot:card-content>
                    <p v-for="c of section.content" v-html="c"></p>
                </template>
            </HomeSlideSectionComponent>

            <SliderWrapperComponent
                v-if="section.slides"
                image-url="https://majske-igre.si/wp-content/uploads/2022/03/otvoritev-2018-zabava.jpg"
                :slides="section.slides"
            >
            </SliderWrapperComponent>
        </div>

        <div class="snap-y__section">
            <HomeBlogSlideComponent/>
        </div>
    </div>
</template>

<script>
import HomeSlideSectionComponent from "~/components/home/slides/home-slide-section.component.vue";
import HomeSliderComponent from "~/components/home/slides/home-slider.component.vue";
import SliderWrapperComponent from "~/components/slider/slider-wrapper.component.vue";

definePageMeta({
    layout: "no-navbar-layout"
});

export default {
    name: "Home",
    components: {SliderWrapperComponent, HomeSliderComponent, HomeSlideSectionComponent},
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
