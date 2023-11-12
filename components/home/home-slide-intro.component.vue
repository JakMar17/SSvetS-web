<template>
    <div class="wrapper">
        <div class="content">
            <img alt="logo" src="../../assets/images/svgs/logo-sss.svg"/>
            <h1 class="title">ŠTUDENTSKI SVET STANOVALCEV</h1>
            <h2 class="subtitle">Študentski dom Ljubljana</h2>

            <div class="social">
                <a href="https://www.facebook.com/profile.php?id=100069419859415" target="_blank" title="Študentski svet stanovalcev"><i class="ri-facebook-circle-fill" style="color: white; font-size: 2em"></i></a>
                <div class="mx-2 my-4" style="border-left: solid 1px white"></div>
                <a href="https://www.facebook.com/majskeigre" target="_blank" title="Majske igre"><i class="ri-facebook-circle-fill" style="color: white; font-size: 2em"></i></a>
                <a href="https://www.instagram.com/majskeigre" target="_blank" title="Majske igre"><i class="ri-instagram-fill" style="color: white; font-size: 2em"></i></a>
                <a href="https://majske-igre.si" target="_blank" title="Majske igre"><i class="ri-ie-fill" style="color: white; font-size: 2em"></i></a>
                <div class="mx-2 my-4" style="border-left: solid 1px white"></div>
                <a href="https://www.facebook.com/pustovanje" target="_blank" title="Študentsko pustovanje v Rožni dolini"><i class="ri-facebook-circle-fill" style="color: white; font-size: 2em"></i></a>
            </div>
            <hr/>

            <div class="menu">
                <NuxtLink to="/sss/kdo-smo">Kdo smo</NuxtLink>
                <NuxtLink to="/projekti">Projekti</NuxtLink>
                <NuxtLink to="/blog">Novice</NuxtLink>
                <NuxtLink to="/kontakt">Kontakt</NuxtLink>
            </div>
        </div>
        <img :src="backgroundSrc" alt="background" class="background" loading="lazy"/>
    </div>
</template>

<script>

export default {
    async setup() {
        const {data} = await useAsyncData('slideshow', async () => (await queryContent('slideshow').where({title: 'index'}).findOne()));
        const imageUrls = data.value.images.map(img => img.image);
        return {imageUrls}
    },
    data() {
        return {
            backgroundSrc: '',
            backgroundSrcIndex: 0,
            imageUrls: []
        }
    },
    mounted() {
        if (this.imageUrls.length > 0) {
            this.backgroundSrc = this.imageUrls[0];
            this.setImageInterval();
        }
    },
    methods: {
        setImageInterval() {
            setInterval(() => {
                this.backgroundSrcIndex++;
                this.backgroundSrc = this.imageUrls[this.backgroundSrcIndex % this.imageUrls.length];
            }, 5000)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/main";

hr {
    background: white;
    width: 75%;
    margin: 1rem 0;
}

.wrapper {
    position: relative;
    z-index: 20;
}

.content {
    z-index: 200;
    position: absolute;
    background: rgba($neutral, 0.5);
    height: 100vh;
    width: 100%;

    flex-direction: column;
    padding-bottom: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 10rem;
        object-fit: contain;

        &.small {
            height: 5rem;
        }
    }

    .title {
        @extend .title, .is-1, .text__has-shadow;
        text-align: center;
        color: white;
        margin-top: 2rem;
    }

    .subtitle {
        @extend .subtitle, .is-4, .text__has-shadow;
        text-align: center;
        color: white;
    }

    .social {
        display: flex;
        gap: 0.25em;
    }
}

.background {
    transition: opacity 0.5s;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
}

.menu {
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
    margin: 0 3vw;
    justify-content: space-around;

    a {
        @extend .text__has-shadow;
        font-size: 1.5em;
        text-align: center;
        color: white;

        text-decoration: underline transparent;
        transition: text-decoration-color 0.25s ease-in-out;

        &:hover {
            text-decoration-color: white;
        }
    }
}

.text {
    &__has-shadow {
        text-shadow: 0.15rem 0.15rem 0.25rem rgba(0, 0, 0, 0.75);
    }
}
</style>
<script lang="ts" setup>
</script>