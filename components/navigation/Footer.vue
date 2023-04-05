<template>
  <footer class="footer is-success" style="margin-top: 4em">
    <div class="content has-text-centered is-success">

      <div class="columns is-centered">
        <div class="column" style="margin-top: 2em">
          <hr style="background: black; margin: 0; margin-bottom: 2em" />
          <div class="has-text-centered is-centered">
            <a class="button pb-0 is-text" style="display: flex; align-items: center; gap: 0.5em">
              <!-- <b-icon icon="email" /> -->
              <span>info@ssvet.si</span>
            </a>
            <a class="pb-0 is-text" style="display: flex; justify-content: center; align-items: center; gap: 0.5em">
              <!-- <b-icon icon="mail" /> -->
              <span>Svetčeva 9 1000 Ljubljana</span>
            </a>
            <a class="button is-text" style="display: flex; align-items: center; gap: 0.5em">
              <!-- <b-icon icon="facebook" /> -->
              <span>Študentski svet stanovalcev</span>
            </a>
          </div>
        </div>
        <div class="column is-narrow">
          <img style="max-height: 10em; width: 10em;" src="@/assets/images/svgs/logo-sss.svg" />
        </div>
        <div class="column" style="margin-top: 2em">

          <hr style="background: black; margin: 0; margin-bottom: 2em" />
          <div class="buttons is-centered mb-0">
              <a class="button is-text" style="display: flex; align-items: center; gap: 0.5em">
                <!-- <b-icon icon="web" /> -->
                <span>Majske igre</span>
              </a>
              <a class="button is-text" style="display: flex; align-items: center; gap: 0.5em">
                <!-- <b-icon icon="facebook" /> -->
                <span>Majske igre</span>
              </a>
              <a class="button is-text" style="display: flex; align-items: center; gap: 0.5em">
                <!-- <b-icon icon="instagram" /> -->
                <span>Majske igre</span>
              </a>
            </div>
            <a class="button is-text" style="display: flex; align-items: center; gap: 0.5em">
                <!-- <b-icon icon="web" /> -->
                <span>Študentski dom Ljubljana</span>
              </a>
        </div>
      </div>




      <div class="no-margin-padding">© 2023 Študentski svet stanovalcev</div>
      <div class="help no-margin-padding">Vse pravice pridržane</div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.no-margin-padding {
  margin: 0;
  padding: 0;
}

.a-little-bit-of-margin {
  margin-right: 1vw;
}
</style>
