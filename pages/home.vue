<template>
    <div class="snap-y__wrapper">
        <div class="snap-y__section">
            <HomeSlideIntroComponent/>
        </div>
        <div class="snap-y__section">
            <HomeSlideSectionComponent image-url="https://majske-igre.si/wp-content/uploads/2022/03/otvoritev-2018-zabava.jpg" subtitle="Skrb za dobrobit študentov in razgibano domsko življenje" title="Predstavniki stanovalcev">
                <template v-slot:card-content>
                    <p>Študentske domove Ljubljana sestavlja 29 domov, vsak izmed domov v oktobru voli svojega predstavnika, ki skrbi za tekoče zadeve doma in je član ŠSS.</p>
                    <p>Poleg predstavnikov so člani ŠSS še njegovi namestniki, predsednik in namestnik predsednika ŠSS ter drugi člani predsedstva.</p>
                    <p>Glavna naloga ŠSS-ja je predstavljanje interesov vseh stanovalcev zavoda, to vključuje skrb za dobro klimo, zastopanje interesov pri pripravi letnih delovnih planov ter oblikovanju internih pravilnikov.</p>
                </template>
            </HomeSlideSectionComponent>
        </div>
        <div class="snap-y__section">
            <HomeSlideSectionComponent
                image-url="https://majske-igre.si/wp-content/uploads/2022/03/otvoritev-2018-zabava.jpg"
                subtitle="Majske igre, študentsko pustovanje, Na svoji zemlji"
                title="Projekti"
            >
                <template v-slot:card-content>
                    <p>Študentski svet stanovalcev tekom leta organizira športne, kulturne in zabavne dogodke, ki so v prvi vrsti namenjeni stanovalcem domov. Tekom leta lahko v Rožni kuhni spremljate likovne, fotografske razstave, udeležite se lahko standup in drugih, resenjših in zabavnejših, večerov.</p>
                    <p>Vsako leto ŠSS izda lastno publikacijo imenovano <strong>Na svoji zemlji</strong> v kateri stanovalci pišejo zanimive anekdote o svoje življenju v domu, hkrati pa lahko v njej najdete obilico zanimivih in uporabnih informacij.</p>
                    <p>V decembru ŠSS organizira med domsko tekmovanje v okraševanju domov, v februarju največje študentsko pustovanje, v maju pa že 40 let največji študentski dogodek v Evropi, športen, kulturen in zabaven poklon študentskemu življenju - <strong>Majske igre</strong>.</p>
                </template>
            </HomeSlideSectionComponent>
        </div>
        <div class="snap-y__section">
            <HomeBlogSlideComponent/>
        </div>
    </div>
</template>

<script>
import HomeSlideSectionComponent from "~/components/home/slides/home-slide-section.component.vue";

export default {
    name: "Home",
    components: {HomeSlideSectionComponent},
    data() {
        return {};
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
