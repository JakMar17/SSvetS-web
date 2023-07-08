<template>
    <div class="wrapper">
        <div class="content">
            <div class="content__title-wrapper">
                <h1 class="title is-1 text__has-shadow" style="color: white">{{ title?.toUpperCase() }}</h1>
                <h2 v-if="subtitle" class="subtitle is-3 text__has-shadow" style="color: white">{{ subtitle }}</h2>
            </div>
            <div class="content__main-wrapper">
                <div class="content__main-card card">
                    <slot name="card-content"></slot>
                </div>
            </div>

        </div>
        <img :src="imageUrl" class="background img-clip"/>
    </div>
</template>

<script>
export default {
    name: "HomeSlideSectionComponent",
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String
        },
        imageUrl: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

hr {
    background: white;
    width: 75%;
    margin: 1rem 0;
}

.wrapper {
    position: relative;
    background: $primary;
    z-index: 2;
}

.img-clip {
    clip-path: polygon(0 0, 100% 0, 100% 40%, 44% 85%, 0 85%, 0% 65%);
}


.background {
    z-index: -1;
    object-fit: cover;
    width: 100vw;
    min-height: 100vh;
}

.content {
    position: absolute;
    z-index: 200;
    min-height: 100vh;
    width: 100%;
    padding-top: 6em;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;

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

.text {
    &__has-shadow {
        text-shadow: 0.15rem 0.15rem 0.25rem rgba(0, 0, 0, 0.75);
    }
}
</style>