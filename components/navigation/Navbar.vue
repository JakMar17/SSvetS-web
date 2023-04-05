<template>
  <nav class="navbar" role="navigation" style="height: 4em" aria-label="main navigation">
  <div class="navbar-brand">
    <div class="level-item has-text-centered">
      <nuxt-link to="/" class="navbar-item">
        <img
          class="is-centered image"
          style="height: 4em"
          src="@/assets/images/svgs/logo-sss.svg"
        />
        <div style="margin-left: 1vw">
          <div class="has-text-weight-bold">
            Študentski svet stanovalcev
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>

  <div class="navbar-menu">
        <div class="navbar-end">
      <div class="navbar-item">
        <NuxtLink to="/" class="navbar-item">
        Majske igre
      </NuxtLink>
      </div>
      <div class="navbar-item">
        <NuxtLink to="/sss/clani" class="navbar-item">
        Kdo smo
      </NuxtLink>
      </div>
      <div class="navbar-item">
        <NuxtLink to="/projekti" class="navbar-item">
        Projekti
      </NuxtLink>
      </div>
      <div class="navbar-item">
        <NuxtLink to="/contact" class="navbar-item">
        Kontakt
      </NuxtLink>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.navbar {
  background-color: red;

  a {
    color: white;
  }
  a:hover {
    color: black;
  }

  .navbar-item {
    color: white;
  }
}
</style>
