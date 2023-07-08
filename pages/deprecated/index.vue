<template>
    <main>
        <div class="content__background">
            <div class="intruduction_row__wrapper block_padding">
                <div class="container">
                    <div class="columns is-centered">
                        <Square :body="'Študentje naj sami oblikujemo in organiziramo skupnosti, v katerih bivamo. Uprava naj samostojnost podpira, ne zatira.'" :icon="'ri-shield-user-fill'"
                                :onCLick="() => $router.push('/sss/kdo-smo')"
                                :title="'Predstavniki študentov'" class="column"/>
                        <Square :body="'Študentski svet stanovalcev že 40 let organizira Majske igre - celomesečno študentsko prireditev sestavljeno iz športa, kulture in zabave.'"
                                class="column"
                                iconLink="https://majske-igre.si/wp-content/uploads/2022/03/Majske-igre-logo-BASIC-C-Barvna.svg"/>
                        <Square :icon="'ri-file-fill'" body="ŠSS tekom leta izvaja različne projekte - dvakrat letno izdajamo revijo Na svoji zemlji, ob pustu prirejamo pustno zabavo, leto pa zapoljujemo še z drugimi kulturnimi in zabavnimi dogodki"
                                class="column"
                                title="Naši projekti"/>
                    </div>
                </div>
            </div>

            <div class="blog_latest__wrapper block_padding" data-aos="zoom-in">
                <div class="container">
                    <TitleMain subtitle="Zadnje objave na blogu" title="Aktualno"/>
                    <div class="is-flex is-justify-content-flex-end">
                        <a class="button is-text blog_latest__title" href="">Več vsebin</a>
                    </div>
                    <div class="columns px-3">
                        <BlogSummaryCard/>
                        <BlogSummaryCard/>
                        <BlogSummaryCard/>
                        <BlogSummaryCard/>
                    </div>
                </div>
            </div>

            <div class="block_padding citation" data-aos="zoom-in">
                <div class="container">
                    <TitleMain title="Misel predsednika ŠSS"/>
                    <div class="card columns p-2">
                        <div class="column is-3 is-flex is-justify-content-center is-align-items-center">
                            <img class="citation__avatar" src="https://majske-igre.si/wp-content/uploads/2022/02/patrik-250x250.png">
                        </div>
                        <div class="column is-flex is-flex-direction-column is-justify-content-center">
                            <div class="citation__body">
                                <p class="content"> Minim pariatur est ipsum sit nisi aute duis sunt Lorem ipsum. Dolore magna
                                    reprehenderit laboris ex
                                    elit
                                    quis Lorem adipisicing. Aliquip qui quis voluptate anim deserunt esse consectetur et duis. Enim tempor
                                    elit
                                    irure incididunt non voluptate reprehenderit anim et fugiat.</p>
                                <p class="content"> Minim pariatur est ipsum sit nisi aute duis sunt Lorem ipsum. Dolore magna
                                    reprehenderit laboris ex
                                    elit
                                    quis Lorem adipisicing. Aliquip qui quis voluptate anim deserunt esse consectetur et duis. Enim tempor
                                    elit
                                    irure incididunt non voluptate reprehenderit anim et fugiat.</p>
                            </div>
                            <p class="mt-3 citation__signature">
                                <span class="citation__signature_name">Deni Cerovac</span>, predsednik Študentskega sveta stanovalcev
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script allowJs="true">
// import {createSEOMeta} from '/utils/seo'

export default {
    data() {
        return {
            carousels: [
                {text: "Slide 1", color: "primary"},
                {text: "Slide 2", color: "info"},
                {text: "Slide 3", color: "success"},
                {text: "Slide 4", color: "warning"},
                {text: "Slide 5", color: "danger"}
            ],
            dormLife: {
                title: "Življenje v domu",
                paragraph: "Ena izmed nalog študentskega sveta stanovalcev je skrb za prijetno, dinamično in kulturno bivanje v naših skupnih domovih.",
                primaryImage: "https://majske-igre.si/wp-content/uploads/2022/03/bograc-kultura.jpg",
                secondRow: [
                    "https://majske-igre.si/wp-content/uploads/2022/03/bograc-kultura.jpg",
                    "https://majske-igre.si/wp-content/uploads/2022/03/bograc-kultura.jpg",
                ],
                thirdRow: [
                    "https://majske-igre.si/wp-content/uploads/2022/03/bograc-kultura.jpg",
                    "https://majske-igre.si/wp-content/uploads/2022/03/bograc-kultura.jpg",
                    "https://majske-igre.si/wp-content/uploads/2022/03/bograc-kultura.jpg",
                ]
            }
        };
    },
    methods: {
        dorm() {
            return dorm;
        },
        onClick() {
        }
    },
    components: {}
}
</script>

<style lang="scss" scoped>
// @import '@/assets/styles/main.scss';

main {
    min-height: 100vh;
    padding-top: 0;
}

.content {
    &__background {
        padding-top: 2em;
    }
}

.citation {
    &__avatar {
        height: fit-content;
        border-radius: 50%;
    }

    &__body {
        border-left: 1px solid;
        padding-left: 1em;
        padding-top: 1em;
        padding-bottom: 1em;
    }

    &__signature {
        font-style: italic;

        &_name {
            font-weight: 600;
        }
    }
}

</style>
