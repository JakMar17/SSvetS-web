<template>
  <div class="wrapper" @click="navigateToPost()">
    <div class="img-wrapper">
      <img :src="post.cover"/>
    </div>
    <div class="content__wrapper">
      <div>
        <h1 class="title is-2">{{ post.title }}</h1>
        <h2 class="subtitle is-4 has-text-primary">{{ post.subtitle }}</h2>
        <p class="content__text">
          {{ post.summary }}
        </p>
      </div>
      <div class="has-text-secondary mt-5 has-text-right">
        Objavil <span class="has-text-weight-bold">{{ post.author }}</span> dne <span class="has-text-weight-bold">{{ new Date(post.date).toLocaleDateString() }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {navigateTo} from "#app";

type postType = {
  title: string,
  subtitle: string,
  summary: string,
  author: string,
  date: number,
  cover: string
};

const props = defineProps<{ post: postType }>();
const {post} = toRefs(props);

const navigateToPost = () =>
    navigateTo(`/blog/objava/${encodeURIComponent(post.value.title)}`);

</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.wrapper {
  @extend .card, .mb-5;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    //max-height: 20em;
  }
}

.img-wrapper {
  img {
    object-fit: cover;
    height: 20em;
    width: 100%;
    border-radius: 1em 1em 0 0;
  }

  @media only screen and (min-width: 768px) {
    width: 40%;
    img {
      border-radius: 1em 0 0 1em;
    }
  }
}

.content {

  &__wrapper {
    @extend .p-4;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (min-width: 768px) {
      width: 60%;
    }
  }

  &__text {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    line-clamp: 5;
    -webkit-box-orient: vertical;
  }

}
</style>
