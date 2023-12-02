<template>
    <div class="snap-y__wrapper">
        <div class="snap-y__section">
            <HomeSlideIntroComponent/>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: "no-navbar-layout"
});

useSeoMeta({
    title: 'Študentski svet stanovalcev',
    ogTitle: 'Študentski svet stanovalcev',
    description: 'Študentski svet stanovalcev je organ, ki predstavlja stanovalce Študentskega doma Ljubljana Svet je sestavljen iz predstavnikov študentov, ki so izvoljeni na volitvah, ki potekajo vsako leto. ŠSS je organizator Majskih iger, Študentskega pustovanja v Rožni dolini in drugih dogodkov.',
    ogDescription: 'Študentski svet stanovalcev je organ, ki predstavlja stanovalce Študentskega doma Ljubljana Svet je sestavljen iz predstavnikov študentov, ki so izvoljeni na volitvah, ki potekajo vsako leto. ŠSS je organizator Majskih iger, Študentskega pustovanja v Rožni dolini in drugih dogodkov.',
    twitterCard: 'summary_large_image',
});
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
