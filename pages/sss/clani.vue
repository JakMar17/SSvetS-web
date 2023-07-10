<template>
    <main>
        <SssHeaderComponent/>

        <div class="container">
            <div class="card p-4 mt-4">
                <p class="content">Svet sestavlja 60 članov stanovalcev študentskih domov v Ljubljani. Člani so predsednik in
                    namestnik sveta ter predstavniki študentskih domov in njihovi namestniki. Vsak dom ima torej dva člana, volilno
                    pravico pa uveljavlja prek predstavnika.</p>
                <p class="content">V svetu so zastopani vsi študentski domovi pod okriljem ŠDL: Rožna dolina (DOM 1-14), Mestni
                    log (ŠD 3, ŠD4, Gerbičeva 59), Bežigrad (DOM A, B, C, D, Dom Topniška, Dom Akademski kolegij, Dom FDV, Dom
                    Podiplomcev), Šiška (Litostroj) in Center (Dom na Poljanski cesti, Dom VŠZ, Dom Ilirska).</p>
                <p class="content">Predstavniki in namestniki domov skrbijo pretežno za zadeve svojih domov, medtem ko predsednik
                    ŠSS, njegov namestnik in ostale funkcije znotraj ŠSS skrbijo za koordiniranje med člani sveta, priprave
                    finančnih načrtov, organiziranje interesnih dejavnosti in komunikacijo z upravo zavoda ter ostalimi deležniki
                    vključenimi v študentsko bivanje.</p>
            </div>
        </div>

        <SssMembersLeadership :otherMembers="leadership.otherMembers"
                              :president="leadership.president" :vicePresident="leadership.vicePresident"></SssMembersLeadership>

        <SssMembersDormComponent
            v-for="dorm in members"
            :dorm-name="dorm.dormName"
            :image-url="dorm.imageUrl"
            :location="dorm.location"
            :moto="dorm.moto"
            :no-of-members="dorm.noOfMembers"
            :president="dorm.president"
            :vice-president="dorm.vicePresident"

        ></SssMembersDormComponent>
    </main>
</template>


<script>
import {createSEOMeta} from '/utils/seo'

export default {
    data() {
        queryContent("/sss/members").findOne().then(
            ({members}) => {
                console.log(members)
                this.members = members
            });


        return {
            members: [],
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
                        name: "Patrik Čelik",
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
        }
    },
    async asyncData() {

    },
    async mounted() {

    },
    methods: {},
    head() {
        return {
            title: "Študentski svet stanovalcev",
            meta: [
                ...createSEOMeta({
                    title: "Študentski svet stanovalcev",
                    description: "this.project.description",
                    url: 'https://jakob.marela.team/sss/clani',
                    image: {}
                }),
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.members {
    &__wrapper {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        gap: 1.75em;
        padding-bottom: 4em;
        margin-top: 4em;
    }
}
</style>
