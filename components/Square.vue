<template>
  <div>
    <div class="card">
      <div class="card-content has-text-centered card__body is-flex is-justify-content-space-between is-flex-direction-column">
        <div>
          <div class="card__body__image is-flex is-justify-content-center is-align-items-center">
            <i v-if="icon" :class="icon"> </i>
            <img :src="iconLink"/>
          </div>
          <h2 class="title is-4">{{ title }}</h2>
          <p>{{ body }}</p>
        </div>
        <div class="is-flex is-justify-content-flex-end">
          <a class="button no_hover is-text mt-3" @click="onCLick()">Izvedi več</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    body: String,
    icon: String,
    iconLink: String,
    onCLick: {
      type: Function,
      default: () => {
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.card__body {
  min-height: 25em;

  &__image {
    height: 9em;

    i {
      font-size: 3.5em;
    }

    img {
      max-height: 9em;
    }
  }
}

.no_hover {
  pointer-events: stroke !important;
  cursor: pointer !important;
}
</style>
