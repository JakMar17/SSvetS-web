<template>
  <footer class="footer is-success">
    <div class="content has-text-centered is-success">

      <div class="columns is-centered">
        <div class="column mt-6">
          <hr class="is-hidden-touch"/>
          <div class="has-text-centered is-centered">
            <a class="button pb-0 is-ghost button__icon">
              <i class="ri-mail-fill"></i>
              <span>info@ssvet.si</span>
            </a>
            <div class="pb-0 button__icon">
              <i class="ri-home-3-fill"></i>
              <span>Svetčeva 9 1000 Ljubljana</span>
            </div>
            <a class="button is-ghost button__icon">
              <i class="ri-facebook-circle-fill"></i>
              <span>Študentski svet stanovalcev</span>
            </a>
          </div>
        </div>
        <div class="column is-narrow">
          <img class="img__logo" src="@/assets/images/svgs/logo-sss.svg" />
        </div>
        <div class="column mt-6">
          <hr class="is-hidden-touch"/>
          <div class="buttons is-centered mb-0">
            <a class="button is-ghost button__icon">
              <i class="ri-ie-fill"></i>
              <span>Majske igre</span>
            </a>
            <a class="button is-ghost button__icon">
              <span>
                <i class="ri-facebook-circle-fill"></i>
              </span>
              <span>Majske igre</span>
            </a>
            <a class="button is-ghost button__icon">
              <span class="icon">
                <i class="ri-instagram-fill"></i>
              </span>
              <span>Majske igre</span>
            </a>
          </div>
          <a class="button is-ghost button__icon">
            <i class="ri-ie-fill"></i>
            <span>Študentski dom Ljubljana</span>
          </a>
        </div>
      </div>
      <div class="m-0 p-0">© 2023 Študentski svet stanovalcev</div>
      <div class="help m-0 p-0">Vse pravice pridržane</div>
      <em class="help m-0 p-0">Create with ♥️ by <a href="https://jakob.marela.team/?utm_source=ssvets&utm_medium=footerSignature&utm_campaign=footerSignature">JakMar17</a></em>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
footer {
    margin-top: 1em;
}

hr {
  background: black;
  margin: 0;
  margin-bottom: 2em;
}

.img__logo {
  max-height: 10em;
  width: 10em;
}

.button__icon {
  display: flex;
  align-items: center;
  gap: 0.5em;
  justify-content: center;
}
</style>
