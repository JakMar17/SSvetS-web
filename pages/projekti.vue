<template>
  <main>
      <ProjectsHeaderComponent></ProjectsHeaderComponent>

      <div class="container">
          <div class="card p-4">
              <p class="content">
                  Kot organizacija, ki se ukvarja z zastopanjem študentov v njihovem bivalnem okolju se predvsem
                  osredotočamo na obštudijske dejavnosti, ki poskrbijo za dinamično in razgibano bivanje.
              </p>
              <p class="content">
                  Vsako leto Študentski svet stanovalcev ustanovi organizacijsko ekipo ŠSS, ki za vse stanovalce
                  pripravlja večje in manjše dogodke. Dogodki delimo na tri sklope: zabavne, športne in kulturne. Na te
                  sklope se deli tudi naš največji projekt – Majske igre.
              </p>
          </div>
      </div>

      <CardImageComponent image-url="/images/projekti/majske-igre.jpg" subtitle="Največji študentski dogodek v Evropi" title="Majske igre">
          <p>
              Majske igre so vseštudentski festival, ki poteka v mesecu maju. Njegove korenine segajo v leto 1983, ko
              so se začeli povezovati prvi stanovalci, z namenom da bi za svoje sostanovalce pripravili predizpitno
              športno sprostitev. Majske igre so z leti rasle in letos praznujejo že 39. obletnico, kar jih uvršča med
              najstarejše tovrstne študentske festivale v Evropi.</p>
      </CardImageComponent>

      <CardImageComponent :reversed="true" image-url="/images/projekti/pustovanje.jpg" subtitle="Največje študentsko pustovanje v Sloveniji" title="Pustovanje v Rožni dolini">
          <p>Pustovanje v Rožni dolini je največje študentsko pustovanje v Sloveniji. Odvija se vsako leto na pustni torek in je tradicionalno sestavljen iz meddomskega tekmovanja v najboljši skupinski pustni maski, na katerega se domovi začnejo pripravljati že dober mesec pred dogodkom. Poleg skupinskih mask izbiramo tudi najboljše posamične maske, pa tudi zabave s koncertom ne primankuje.</p>
      </CardImageComponent>

      <CardImageComponent image-url="/images/projekti/na_svoji_zemlji.jpg" subtitle="Glasilo stanovalcev ŠDL" title="Na svoji zemlji">
          <p>Na svoji zemlji je tradicionalno glasilo stanovalcev Študentskega doma Ljubljana, ki izhaja enkrat do dvakrat letno. V njem starejši stanovalci prenašajo svoje "znanje" in izkušnje mlajšim sostanovalcem. V reviji tako najdemo pravila o življuenju v skupnosti, nasvete kako se znebiti domotožja pa tudi kakšne bolj "sočne" zgodbice, ki se v domovih pač zgodijo.</p>
      </CardImageComponent>

      <CardImageComponent :reversed="true" image-url="/images/projekti/majska-gajba.jpg" title="Ekskurizija v Planico">
          <p>Študentski svet stanovalcev tradicionalno organizira izlet in ekskurzijo v Planico v času tekem v smučarskih poletih. Tako se že zgodaj zjutraj odpravimo proti sneženeni kraljici, kjer si ogledamo tekmo, se podružimo in vzpostavimo tesna prijateljstva. Kaj d fak je ta zadnji stavek, love it!</p>
      </CardImageComponent>

      <CardImageComponent image-url="/images/projekti/kultura_v_menzi.jpg" subtitle="Standup in drugi dogodki" title="Kultura v menzi">
          <p>Menza v Rožni dolini ima zgodovinsko pomembno vlogo pri oblikovanju študentskega življenja. Skozi leta je bila prizorišče zabav, plesov, predstav in protestnih gibanj. Danes je mesto kulture - tekom leta v Rožni kuhni namreč Študentski svet stanovalcev organizira več kulturnih dogodkov in standupov.</p>
      </CardImageComponent>

      <CardImageComponent :reversed="true" image-url="/images/projekti/druzabno-zivljenje.jpg" subtitle="Prijateljstva, ki ostanejo" title="Družabno življenje v domu">
          <p>Predstavniki posameznih domov, ki sestavljajo Študentski svet stanovalcev, tekom celotnega leta skrbijo za družabno življenje znotraj svojega doma. Tako se čez leto organizirajo zabave in skupni dogodki, kjer stanovalci znotaj domov ustvarjajo prijateljstva - mnoga izmed teh pa prestopijo meje bivanja v domu.</p>
      </CardImageComponent>
  </main>
</template>

<script>
import TitleSub from '~/components/title/TitleSub.vue';

export default {
  data() {
    return {
      links: [
        {
          label: "Majske igre"
        },
        {
          label: "Pustovanje"
        },
        {
          label: "Na svoji zemlji"
        },
        {
          label: "Ostalo"
        },
      ]
    };
  },
  components: {TitleSub}
}
</script>