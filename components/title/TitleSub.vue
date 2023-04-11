<template>
  <div class="columns is-centered mt-5 mb-3">
    <div class="column is-narrow">
      <h3 class="title is-3 has-text-centered px-6 mb-1">{{ title }}</h3>
      <div v-if="subtitle" class="columns is-centered is-vcentered">
        <div class="column pl-0">
          <hr class="is-hidden-touch"/>
        </div>
        <div class="column is-narrow has-text-centered">
          <h3 class="title has-text-primary is-6">{{ subtitle.toUpperCase() }}</h3>
        </div>
        <div class="column pr-0">
          <hr class="is-hidden-touch"/>
        </div>
      </div>
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
  margin: 0;
}
</style>