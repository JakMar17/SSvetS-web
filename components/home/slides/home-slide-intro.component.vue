<template>
    <div class="wrapper">
        <div class="content">
            <img alt="logo" src="@/assets/images/svgs/logo-sss.svg"/>
            <h1 class="title">ŠTUDENTSKI SVET STANOVALCEV</h1>
            <h2 class="subtitle">Študentski dom Ljubljana</h2>

            <div class="social">
                <a><i class="ri-facebook-circle-fill" style="color: white; font-size: 2em"></i></a>
                <a><i class="ri-instagram-fill" style="color: white; font-size: 2em"></i></a>
                <a href="https://majske.igre.si"><i class="ri-ie-fill" style="color: white; font-size: 2em"></i></a>
            </div>
            <hr/>

            <div class="menu">
                <NuxtLink to="/sss/kdo-smo">Kdo smo</NuxtLink>
                <NuxtLink to="/projekti">Projekti</NuxtLink>
                <NuxtLink target="_blank" to="https://majske-igre.si">Majske igre</NuxtLink>
                <NuxtLink to="/kontakt">Kontakt</NuxtLink>
            </div>
        </div>
        <video autoplay loop muted>
            <source src="@/assets/videos/majske_aftermovie.mp4" type="video/mp4">
        </video>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

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

video {
    z-index: -1;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    top: 0;
    left: 0;
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