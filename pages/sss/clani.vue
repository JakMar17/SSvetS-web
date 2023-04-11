<template>
  <main>
    <SssHeader/>

    <div class="container">
      <!--      TODO: popravi sliko-->
      <div style="max-height: 45vh; overflow: hidden;">
        <img src="https://ssvets.si/wp-content/uploads/2022/02/89144402_2506116986366693_2098656754677055488_n.jpg"/>
      </div>
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

    <div class="container members__wrapper">
      <div class="container mt-6">
        <TitleMain title="Člani ŠSS" subtitle="Predstavniki in namestniki domov"/>
        <div class="card p-4">
          <p class="content">Predstavniki domov oziroma skrbijo, da življenje v domu gladko poteka. So prvi naslov za
            bruce in preostale stanovalce, ki potrebujejo nasvet ali dva glede bivanja. Prav tako pa znotraj doma
            organizirajo različne dogodke – najpopularnejše domske zabave in piknike, pa tudi druge dogodke kot so
            zajtrki, čajanke, potopisna predavanja, filmski večeri in večeri družabnih iger itd.</p>
          <p class="content">Namestniki so praviloma zadolženi za izvajanje dežurstev v domu. Kljub temu pa v praksi vedno
            priskočijo na pomoč predstavnikom domov pri izvajanju njihovih zadolžitev.</p>
          <p class="content">Na domskih sestankih zbirajo pobude stanovalcev glede bivanja in jih posredujejo naprej –
            bodisi na upravo ŠDL bodisi na sejah ŠSS. Pomagajo pri organizaciji Majskih iger in ostalih projektov ŠSS.</p>
        </div>
      </div>
      <div class="members__wrapper">
        <SssMembersDorm dormName="Dom 5" dormMotto="Vsako leto manj tihi dom" presidentName="Jakob Marušič"
                        presidentPhotoUrl="https://majske-igre.si/wp-content/uploads/2022/02/patrik-250x250.png"
                        vicePresidentName="Maja Trušnovec"
                        vicePresidentPhotoUrl="https://majske-igre.si/wp-content/uploads/2022/02/patrik-250x250.png"/>
        <SssMembersDorm dormName="Dom 5" dormMotto="Vsako leto manj tihi dom" presidentName="Jakob Marušič"
                        presidentPhotoUrl="https://majske-igre.si/wp-content/uploads/2022/02/patrik-250x250.png"
                        vicePresidentName="Maja Trušnovec"
                        vicePresidentPhotoUrl="https://majske-igre.si/wp-content/uploads/2022/02/patrik-250x250.png"/>
        <SssMembersDorm dormName="Dom 5" dormMotto="Vsako leto manj tihi dom" presidentName="Jakob Marušič"
                        presidentPhotoUrl="https://majske-igre.si/wp-content/uploads/2022/02/patrik-250x250.png"
                        vicePresidentName="Maja Trušnovec"
                        vicePresidentPhotoUrl="https://majske-igre.si/wp-content/uploads/2022/02/patrik-250x250.png"/>
        <SssMembersDorm dormName="Dom 5" dormMotto="Vsako leto manj tihi dom" presidentName="Jakob Marušič"
                        presidentPhotoUrl="https://majske-igre.si/wp-content/uploads/2022/02/patrik-250x250.png"
                        vicePresidentName="Maja Trušnovec"
                        vicePresidentPhotoUrl="https://majske-igre.si/wp-content/uploads/2022/02/patrik-250x250.png"/>
      </div>
    </div>
  </main>
</template>


<script>
import {createSEOMeta} from '/utils/seo'

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
