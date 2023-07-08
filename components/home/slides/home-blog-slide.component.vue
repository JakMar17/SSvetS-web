<template>
    <div class="wrapper">
        <div class="content">
            <div class="content__title-wrapper">
                <h1 class="title is-1 text__has-shadow" style="color: white">Aktualno</h1>
                <h2 class="subtitle is-3 text__has-shadow" style="color: white">Zadnje objave na blogu</h2>
            </div>
            <div class="content__main-wrapper">
                <div class="content__main-row">
                    <BlogSummaryCard style="min-width: 16em"/>
                    <BlogSummaryCard style="min-width: 16em"/>
                    <BlogSummaryCard style="min-width: 16em"/>
                </div>
                <div style="display: flex; justify-content: flex-end; margin-right: 2em">
                    <a>Več vsebine</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeSlideSection3",
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
    background: $info;
    z-index: 5;
}

.background {
    z-index: -1;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
}

.content {
    position: absolute;
    z-index: 200;
    height: 100vh;
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
            padding-bottom: 4em
        }

        &-row {
            display: flex;
            justify-content: flex-end;
            flex-wrap: wrap;
        }
    }
}

.text {
    &__has-shadow {
        text-shadow: 0.15rem 0.15rem 0.25rem rgba(0, 0, 0, 0.75);
    }
}
</style>