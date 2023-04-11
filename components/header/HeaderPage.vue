<template>
  <div class="container wrapper">
    <div v-if="links" class="columns is-vcentered is-centered mb-0">
      <div class="column ml-2">
        <hr class="is-hidden-touch"/>
      </div>
      <div class="column is-narrow has-text-centered">
        <button v-for="link of links" :key="link.label" class="button is-text has-text-black no_decoration_button" @click="link.onClick">
          {{ link.label }}
        </button>
      </div>
      <div class="column mr-2">
        <hr class="is-hidden-touch"/>
      </div>
    </div>
    <div class="mb-4" data-aos="zoom-in">
      <h1 class="title is-1 has-text-centered">{{ title }}</h1>
      <h2 class="subtitle is-3 has-text-centered">{{ subtitle }}</h2>
    </div>
    <div class="pt-2">
      <hr class="is-hidden-touch"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: String,
    links: {
      type: Array
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-bottom: 5rem
}

.no_decoration_button {
  text-decoration: none !important;
  font-weight: 700 !important;
}

hr {
  background: black;
}
</style>