<template>
    <div class="wrapper">
        <div class="slider">
            <!--            <SliderContentComponent-->
            <!--                v-for="slide of slides"-->
            <!--                :title="slide.title"-->
            <!--                :subtitle="slide.subtitle">-->
            <!--                <template v-slot:card-content>-->
            <!--                    <slot name="card-content"></slot>-->
            <!--                </template>-->
            <!--            </SliderContentComponent>-->
        </div>
        <img :src="imageUrl" class="background img-clip"/>
    </div>
</template>

<script>
export default {
    name: "HomeSliderComponent",
    props: {
        slides: {
            type: Array,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        }
    },
    mounted() {
        console.log(this.slides)
    }
};
</script>

<style lang="scss" scoped>
@import "assets/styles/main";

hr {
    background: white;
    width: 75%;
    margin: 1rem 0;
}

.wrapper {
    position: relative;
    background: $primary;
    z-index: 2;
}

.img-clip {
    clip-path: polygon(0 0, 100% 0, 100% 40%, 44% 85%, 0 85%, 0% 65%);
}


.background {
    z-index: -1;
    object-fit: cover;
    width: 100vw;
    min-height: 100vh;
}

.slider {
    scroll-snap-type: x mandatory;
    display: flex;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    position: absolute;
    z-index: 200;
    min-height: 100vh;
    width: 100%;
}

section {
    border-right: 1px solid white;
    padding: 1rem;
    min-width: 100vw;
    height: 100vh;
    scroll-snap-align: start;
    text-align: center;
    position: relative;
    background-position: center;
    background-size: cover;
}

.text {
    &__has-shadow {
        text-shadow: 0.15rem 0.15rem 0.25rem rgba(0, 0, 0, 0.75);
    }
}
</style>