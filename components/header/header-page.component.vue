<template>
    <div class="wrapper">
        <div class="content">
            <section class="title-section">
                <div class="card" style="border-radius: 1em; padding: 1em 2em;">
                    <h1>{{ title }}</h1>
                    <h2 v-if="subtitle" class="has-text-primary">{{ subtitle.toUpperCase() }}</h2>
                </div>
            </section>
            <section class="submenu-section">
                <button v-for="link of links" class="button is-white" style="display: flex; flex-direction: column; align-items: center" @click="link.onClick">
                    {{ link.label }}
                </button>
            </section>
        </div>
        <img :src="imageUrl" class="background" loading="lazy"/>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String
        },
        links: {
            type: Array,
            default: () => []
        },
        imageUrl: {
            type: String,
            required: true
        },
    }
}
</script>


<style lang="scss" scoped>
@import "@/assets/styles/main.scss";


.wrapper {
    position: relative;
    height: 35em;
    margin-bottom: 1em;
    width: 100%;
    z-index: 2;

    @media only screen and (min-width: 768px) {
        margin-bottom: 2em;
        height: 30em;
    }
}

.background {
    z-index: -1;
    object-fit: cover;
    width: 100%;
    height: 29em;
    margin-top: 4em;

    @media only screen and (min-width: 768px) {
        margin-top: 3em;
        height: 25em;
    }
}

.content {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    margin-bottom: 0;
    margin-top: 0;
    padding: 2vh 4vw;
    gap: 4em;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    justify-items: stretch;
    align-items: stretch;

    @media only screen and (min-width: 768px) {
        justify-content: start;
        align-content: space-between;
        gap: 1em;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas:
    "dorm-info"
    "dorm-members";
    }

}


.title-section {
    grid-area: dorm-info;
    width: fit-content;

    h1 {
        @extend .title, .is-1;
        margin-bottom: 0.25em !important;
    }

    h2 {
        @extend .title, .is-5;
        margin-top: 0 !important;
    }

    text-align: center;
    @media only screen and (min-width: 768px) {
        text-align: left;
    }
}

.submenu-section {
    grid-area: dorm-members;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.25em;

    @media only screen and (min-width: 768px) {
        justify-content: flex-end;
    }
}


</style>
<script lang="ts" setup>
</script>