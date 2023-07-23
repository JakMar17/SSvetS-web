<template>
    <section :class="buildCssClass('wrapper')">
        <div class="content">
            <div class="content__card">
                <h1 class="title is-2 mb-0">{{ title }}</h1>
                <h2 v-if="subtitle" class="title is-6 mt-2 has-text-primary">{{ subtitle.toUpperCase() }}</h2>
                <slot></slot>
            </div>
        </div>
        <div :class="buildCssClass('background')">
            <div></div>
            <img :src="imageUrl"/>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String
        },
        imageUrl: {
            type: String,
            required: true
        },
        reversed: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        buildCssClass(baseClass = "") {
            return `${baseClass} ${this.reversed ? "reversed" : ""}`;
        },
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.wrapper {
    position: relative;
    height: 38em;
    width: 100%;
    margin-bottom: 2em;

    display: flex;

    @media only screen and (min-width: 1024px) {
        margin-bottom: 0;
    }
}

.content {
    z-index: 2;
    height: 100%;
    position: absolute;

    margin-left: 4em;
    margin-right: 4em;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media only screen and (min-width: 1024px) {
        align-items: center;
    }

    &__card {
        @extend .card;
        padding: 2em;

        border-radius: 0 0 1em 1em;

        position: relative;

        @media only screen and (min-width: 1024px) {
            border-radius: 1em;
            width: 50vw;
        }
    }
}

.background {
    z-index: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 4em;
    margin-right: 4em;
    margin-bottom: 4em;

    @media only screen and (min-width: 1024px) {
        margin-bottom: 0;
        justify-content: space-between;
    }

    img {
        object-fit: cover;
        height: 35em;

        border-radius: 1em;
    }
}

.reversed {
    flex-direction: row-reverse;
}
</style>
<script lang="ts" setup>
</script>