<template>
    <main>
        <HeaderPage title="Kontakt"></HeaderPage>

      <div class="container" style="margin-top: 4em">
        <div class="columns">
          <div class="column box is-4">
          </div>
          <div class="column box">
          </div>
        </div>
      </div>

        <div class="container" style="margin-top: 4em">
            <div class="columns">
                <div class="column">
                    <div class="card has-text-centered p-5">
                        <h2 class="title is-5">Deni Cerovac</h2>
                        <h3 class="subtitle is-6" style="font-style: italic;">predsednik ŠSS</h3>
                        <div style="display: flex; gap: 1em; align-items: center; justify-content: center;">
                            <i class="ri-phone-line"></i>
                            <div>
                                031708115
                            </div>
                        </div>
                        <div style="display: flex; gap: 1em; align-items: center; justify-content: center;">
                            <i class="ri-mail-line"></i>
                            <div>
                                deni@sss.si
                            </div>
                        </div>
                        <span class="subtitle is-6" style="font-style: italic; padding-top: 24px">Kontakt za člane ŠSS, medije, upravo,...</span>
                    </div>
                </div>
                <div class="column">
                    <div class="card has-text-centered p-5">
                        <h2 class="title is-5">Deni Cerovac</h2>
                        <h3 class="subtitle is-6" style="font-style: italic;">predsednik ŠSS</h3>
                        <div style="display: flex; gap: 1em; align-items: center; justify-content: center;">
                            <i class="ri-phone-line"></i>
                            <div>
                                031708115
                            </div>
                        </div>
                        <div style="display: flex; gap: 1em; align-items: center; justify-content: center;">
                            <i class="ri-mail-line"></i>
                            <div>
                                deni@sss.si
                            </div>
                        </div>
                        <span class="subtitle is-6" style="font-style: italic; padding-top: 24px">Kontakt za člane ŠSS, medije, upravo,...</span>
                    </div>
                </div>
                <div class="column">
                    <div class="card has-text-centered p-5">
                        <h2 class="title is-5">Deni Cerovac</h2>
                        <h3 class="subtitle is-6" style="font-style: italic;">predsednik ŠSS</h3>
                        <div style="display: flex; gap: 1em; align-items: center; justify-content: center;">
                            <i class="ri-phone-line"></i>
                            <div>
                                031708115
                            </div>
                        </div>
                        <div style="display: flex; gap: 1em; align-items: center; justify-content: center;">
                            <i class="ri-mail-line"></i>
                            <div>
                                deni@sss.si
                            </div>
                        </div>
                        <span class="subtitle is-6" style="font-style: italic; padding-top: 24px">Kontakt za člane ŠSS, medije, upravo,...</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="container" style="margin-top: 4em">
            <h2 class="title is-2">Kontakt za partnerje</h2>
        </div>
    </main>
</template>


<script>
import HeaderPage from '~/components/header/HeaderPage.vue';
import { createSEOMeta } from '/utils/seo'

export default {
    data() {
        return {
            leadership: {
                president: {
                    name: "Deni Cerovac",
                    photoUrl: "https://majske-igre.si/wp-content/uploads/2022/02/patrik-250x250.png",
                    phone: "031708115",
                    email: "precednik@sss.si"
                },
                vicePresident: {
                    name: "Mihela Janežič",
                    photoUrl: "https://majske-igre.si/wp-content/uploads/2022/02/patrik-250x250.png",
                    phone: "031708115",
                    email: "viceprecednik@sss.si"
                },
                otherMembers: [
                    {
                        name: "Jakob Marušič",
                        functionName: "vodja delovne skupine ŠSS",
                        photoUrl: "https://majske-igre.si/wp-content/uploads/2022/02/patrik-250x250.png",
                        phone: "031708115",
                        email: "delovna-skupina@sss.si"
                    },
                    {
                        name: "Patrik Čelih",
                        functionName: "koordinator",
                        photoUrl: "https://majske-igre.si/wp-content/uploads/2022/02/patrik-250x250.png",
                        phone: "031708115",
                        email: "delovna-skupina@sss.si"
                    },
                    {
                        name: "Tilen Dobovičnik",
                        functionName: "svetovalec",
                        photoUrl: "https://majske-igre.si/wp-content/uploads/2022/02/patrik-250x250.png",
                        phone: "031708115",
                        email: "delovna-skupina@sss.si"
                    },
                ]
            }
        };
    },
    async asyncData() {
    },
    async mounted() {
    },
    methods: {},
    head() {
        return {
            title: "this.project.project_name",
            meta: [
                ...createSEOMeta({
                    title: "this.project.project_name",
                    description: "this.project.description",
                    url: "https://jakob.marela.team/project/" + "this.project.project_name",
                    image: {}
                }),
            ],
        };
    },
    components: { HeaderPage }
}
</script>
