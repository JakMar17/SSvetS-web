<template>
  <main style="min-height: 100vh; padding-top: 0vh">
    <div class="content__background">
      <div class="intruduction_row__wrapper block_padding">
        <div class="container">
          <div class="columns is-centered">
            <Square class="column" :title="'Predstavniki študentov'"
              :body="'Študentje naj sami oblikujemo in organiziramo skupnosti, v katerih bivamo. Uprava naj samostojnost podpira, ne zatira.'"
              :onCLick="() => $router.push('/sss/kdo-smo')" :icon="'ri-shield-user-fill'" />
            <Square class="column"
              :body="'Študentski svet stanovalcev že 40 let organizira Majske igre - celomesečno študentsko prireditev sestavljeno iz športa, kulture in zabave.'"
              iconLink="https://majske-igre.si/wp-content/uploads/2022/03/Majske-igre-logo-BASIC-C-Barvna.svg" />
            <Square class="column" title="Naši projekti"
              body="ŠSS tekom leta izvaja različne projekte - dvakrat letno izdajamo revijo Na svoji zemlji, ob pustu prirejamo pustno zabavo, leto pa zapoljujemo še z drugimi kulturnimi in zabavnimi dogodki"
              :icon="'ri-file-fill'" />
          </div>
        </div>
      </div>

      <div class="blog_latest__wrapper block_padding">
        <div class="container">
          <TitleMain title="Aktualno" subtitle="Zadnje objave na blogu" />
          <div style="display: flex; justify-content: flex-end;">
            <a href="" class="button is-text blog_latest__title">Več vsebin</a>
          </div>
          <div class="columns px-3">
            <BlogSummaryCard />
            <BlogSummaryCard />
            <BlogSummaryCard />
            <BlogSummaryCard />
          </div>
        </div>
      </div>

      <div class="block_padding citation">
        <div class="container">
          <TitleMain title="Misel predsednika ŠSS" />
          <div class="card columns" style="padding: 1em">
            <div class="column is-3" style="display: flex; justify-content: center; align-items: center">
              <img class="citation__avatar" src="https://majske-igre.si/wp-content/uploads/2022/02/patrik-250x250.png">
            </div>
            <div class="column" style="display: flex; flex-direction: column; justify-content: center;">
              <div style="border-left: 1px solid; padding-left: 1em; padding-top: 1em; padding-bottom: 1em;">
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
              <p class="mt-3" style="font-style: italic;">
                <span style="font-weight: 600">Dani Cerovac</span>, predsednik Študentskega sveta stanovalcev
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
                { text: "Slide 1", color: "primary" },
                { text: "Slide 2", color: "info" },
                { text: "Slide 3", color: "success" },
                { text: "Slide 4", color: "warning" },
                { text: "Slide 5", color: "danger" }
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
    components: { }
}
</script>

<style lang="scss" scoped>
// @import '@/assets/styles/main.scss';

.content {
  &__background {
    padding-top: 2em;
    //background-color: $info-light;
  }
}

.citation {
  &__avatar {
    height: fit-content;
    border-radius: 50%;
  }
}

</style>
