<template>
  <nav id="navMenu" aria-label="main navigation" class="navbar" role="navigation">
    <div class="navbar-brand is-vcentered is-flex is-align-items-center">
      <div class="level-item has-text-centered">
        <nuxt-link to="/" class="navbar-item">
          <img class="is-centered image logo" src="@/assets/images/svgs/logo-sss.svg"/>
          <div class="ml-2">
            <div class="has-text-weight-bold">
              Študentski svet stanovalcev
            </div>
          </div>
        </nuxt-link>
      </div>
      <a role="button" @click="this.toggleMobileMenu()" :class="isMobileMenuActive" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="isMobileMenuActive">
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
export default {
  data() {
    return {
      activeMobileMenu: false
    };
  },
  methods: {
    toggleMobileMenu() {
      this.activeMobileMenu = !this.activeMobileMenu;
    }
  },
  computed: {
    isMobileMenuActive() {
      return this.activeMobileMenu ? 'is-active' : '';
    }
  },
  watch: {
    $route() {
      this.activeMobileMenu = false;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

nav {
  height: 6em;
}

.navbar {
  background: linear-gradient(to bottom, rgba($primary, 0.45), transparent);
}

.logo {
  min-height: 5em;
}
</style>
