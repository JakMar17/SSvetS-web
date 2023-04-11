<template>
  <div class="columns is-vcentered mt-6 mb-4">
    <div class="column is-hidden-touch pl-0">
      <hr/>
    </div>
    <div class="column is-visible-touch"></div>
    <div class="column is-narrow has-text-centered">
      <h2 class="title is-2 pb-0">{{ title }}</h2>
      <h2 class="subtitle is-4">{{ subtitle }}</h2>
    </div>
    <div class="column is-visible-touch"></div>
    <div class="column is-hidden-touch pr-0">
      <hr/>
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
    subtitle: String
  }
}
</script>

<style lang="scss" scoped>
hr {
  background: black;
}
</style>