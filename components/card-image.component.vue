<template>
    <div class="flex justify-content--center align-items--center">
        <section id="wrapper" ref="wrapper" :class="buildCssClass('wrapper')">
            <div ref="content" class="content">
                <div ref="content__card" class="content__card">
                    <h1 class="title is-2 mb-0">{{ title }}</h1>
                    <h2 v-if="subtitle" class="title is-6 mt-2 has-text-primary">{{ subtitle.toUpperCase() }}</h2>
                    <ContentRendererMarkdown v-if="parsedContent" :value="parsedContent"/>
                    <div class="flex flex-wrap mt-4">
                        <NuxtLink v-for="link in links" :key="link.title" :class="link.buttonType" :to="link.link" class="button">{{ link.title }}</NuxtLink>
                    </div>
                </div>
            </div>
            <div v-if="imageUrl" :class="buildCssClass('background')">
                <div></div>
                <img ref="backgroundImage" :src="imageUrl" loading="lazy"/>
            </div>
        </section>
    </div>
</template>

<script>
import {parseMarkdown} from "~/utils/parseMarkdown";

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
        content: {
            type: String
        },
        reversed: {
            type: Boolean,
            default: false
        },
        links: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            clientWidth: null,
            clientHeight: null,
            parsedContent: null
        }
    },
    mounted() {
        parseMarkdown(this.content).then(parsed => this.parsedContent = parsed);
        window.addEventListener("resize", () => this.onResize());
        this.onResize();
    },
    methods: {
        buildCssClass(baseClass = "") {
            return `${baseClass} ${this.reversed ? "reversed" : ""}`;
        },
        onResize() {
            const clientWidth = this.$refs.wrapper?.clientWidth ?? 0;
            const contentCardHeight = this.pxToEm(this.$refs.content__card?.offsetHeight);
            const imageHeight = this.pxToEm(this.$refs.backgroundImage?.offsetHeight);

            const wrapper = this.$refs.wrapper;
            if (!wrapper.style) {
                return;
            }

            wrapper.style.height = clientWidth <= 1024 ? `${contentCardHeight + imageHeight}em` : `${Math.max(contentCardHeight, 38)}em`;
        },
        pxToEm(px = 0) {
            const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
            return px / fontSize;
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
    max-width: 120em;
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
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media only screen and (min-width: 768px) {
        margin-left: 4em;
        margin-right: 4em;
    }

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
    justify-content: center;
    align-items: flex-start;

    margin-bottom: 4em;

    @media only screen and (min-width: 768px) {
        margin-left: 4em;
        margin-right: 4em;
    }

    @media only screen and (min-width: 1024px) {
        margin-bottom: 0;
        justify-content: space-between;
        align-items: center;
    }

    img {
        object-fit: cover;
        height: 35em;
        border-radius: 1em 1em 0 0;

        @media only screen and (min-width: 1024px) {
            border-radius: 1em;
        }
    }
}

.reversed {
    flex-direction: row-reverse;
}
</style>
<script lang="ts" setup>
</script>