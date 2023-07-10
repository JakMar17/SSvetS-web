<template>
    <section class="content">
        <div class="content__title-wrapper">
            <h1 class="title is-1 text__has-shadow" style="color: white;">{{ title?.toUpperCase() }}</h1>
            <h2 v-if="subtitle" class="subtitle is-3 text__has-shadow" style="color: white">{{ subtitle }}</h2>
        </div>
        <div class="content__main-wrapper">
            <div class="content__main-card card">
                <p v-for="c of content" v-html="c"></p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "SlideComponent",
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String
        },
        content: {
            type: Array,
            default: () => []
        }
    },
}
</script>

<style lang="scss" scoped>
@import "assets/styles/main";

.content {
    z-index: 200;
    min-height: 100%;
    width: 100%;
    padding-top: 6em;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;

    text-align: start;

    &__title {
        &-wrapper {
            padding: 4vh 4vw;
            margin: 4vh 4vw 0 4vw;
        }
    }

    &__main {

        &-wrapper {
            display: flex;
            justify-content: flex-end;
        }

        &-card {
            padding: 2em;
            margin: 0 2em 20vh 2em;
            max-width: 50em;
        }
    }
}


</style>