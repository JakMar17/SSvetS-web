<template>
    <main class="flex flex-wrap justify-content--center gap--1em">
        <section id="main-column" class="card py-6 px-4">
            <div class="has-text-centered">
                <img src="@/assets/images/svgs/logo-sss.svg" style="height: 7em"/>
            </div>
            <h1 class="title px-2 has-text-centered">Študentski svet stanovalcev</h1>
            <div class="flex direction--column has-text-centered gap--2em">
                <div>
                    <i class="ri-home-2-line" style="font-size: 2em"></i>
                    <div>Svetčeva ulica 9</div>
                    <div>dom 3, 2. nadstropje</div>
                    <div>1000 Ljubljana</div>
                </div>
                <div>
                    <i class="ri-mail-line" style="font-size: 2em"></i>
                    <div>
                        <a href="mailto:info@ssvets.si">info@ssvets.si</a>
                    </div>
                </div>
                <div>
                    <i class="ri-phone-line" style="font-size: 2em"></i>
                    <div>041 398 407</div>
                </div>
            </div>
        </section>
        <section id="majske-igre-column" class="card p-6 mt-6 mb-6">
            <div class="has-text-centered">
                <img src="@/assets/images/majske-igre/majske-logo-black.svg"/>
            </div>
            <div class="flex direction--column gap--2em">
                <div class="has-text-centered">
                    <i class="ri-ie-line" style="font-size: 2em"></i>
                    <div><a href="https://majske-igre.si" target="_blank">majske-igre.si</a></div>
                </div>
                <div class="flex align-items--center gap--1em">
                    <img src="@/assets/images/majske-igre/zabavko.svg" style="height: 5em"/>
                    <div>
                        <div class="has-text-weight-bold">Zabava</div>
                        <div><a href="mailto:zabava@ssvets.si">zabava@ssvets.si</a></div>
                    </div>
                </div>
                <div class="flex align-items--center gap--1em">
                    <img src="@/assets/images/majske-igre/sportko.svg" style="height: 5em"/>
                    <div>
                        <div class="has-text-weight-bold">Šport</div>
                        <div><a href="mailto:sport@ssvets.si">sport@ssvets.si </a></div>
                    </div>
                </div>
                <div class="flex align-items--center gap--1em">
                    <img src="@/assets/images/majske-igre/kulturko.svg" style="height: 5em"/>
                    <div>
                        <div class="has-text-weight-bold">Kultura</div>
                        <div><a href="mailto:kultura@ssvets.si">kultura@ssvets.si</a></div>
                    </div>
                </div>
            </div>
        </section>
        <section id="social-column" class="card p-6 mt-6 mb-6">
            <h1 class="title px-2 has-text-centered">Socialna omrežja</h1>
            <div class="flex direction--column has-text-centered gap--2em">
                <div>
                    <i class="ri-facebook-circle-line" style="font-size: 2em"></i>
                    <div><a href="" target="_blank">Študentski svet stanovalcev</a></div>
                    <div><a href="" target="_blank">Majske igre</a></div>
                    <div><a href="" target="_blank">Največje študentsko pustovanje</a></div>
                </div>
                <div>
                    <i class="ri-instagram-line" style="font-size: 2em"></i>
                    <div><a href="" target="_blank">Majske igre</a></div>
                </div>
            </div>
        </section>
    </main>
</template>
<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

#majske-igre-column {
    width: 20em;
    order: 2;
    @media only screen and (min-width: 1024px) {
        order: 1;
    }
}

#main-column {
    order: 1;
    width: 45em;
    @media only screen and (min-width: 1024px) {
        order: 2;
        width: 25em;
    }
}

#social-column {
    width: 20em;
    order: 3;
}

main {
    position: relative;
    min-height: 60vh;
    margin: 1em 0;

    @media only screen and (min-width: 1024px) {
        margin: 1em 4em;
    }
}

.foreground {
    &--wrapper {
        display: flex;
        align-items: center;

        @media only screen and (min-width: 768px) {
            z-index: 2;
            width: 55%;
            height: 40em;
            margin-left: 4em;
            position: absolute;
        }

        @media only screen and (min-width: 1024px) {
            width: 45%;
        }
    }

    &--content {
        color: white;
        background: $primary;
        width: 100%;
        border-radius: 1em 1em 0 0;

        @media only screen and (min-width: 768px) {
            border-radius: 1em;
            height: 40em;
            -webkit-box-shadow: 5px 5px 10px 3px rgba(187, 187, 187, 1);
            -moz-box-shadow: 5px 5px 10px 3px rgba(187, 187, 187, 1);
            box-shadow: 5px 5px 10px 3px rgba(187, 187, 187, 1);
        }

    }


}

.background {

    &--wrapper {
        width: 100%;
        display: flex;
        align-items: center;

        @media only screen and (min-width: 768px) {
            position: absolute;
            justify-content: flex-end;
            height: 40em;
        }
    }

    &--content {
        margin: 1em 2em;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        @media only screen and (min-width: 768px) {
            text-align: right;
            width: calc(100% - 4em - 45%);
            align-items: flex-end;
        }

        &-card {
            @extend .card;
            height: calc(40em * 0.8);
            width: 100%;
            display: flex;
            border-radius: 0 0 1em 1em;

            @media only screen and (min-width: 768px) {
                border-radius: 1em;
                justify-content: flex-end;
            }
        }
    }
}

.contact {
    &--hr {
        opacity: 0.25;
        margin: 1em 0;
        height: 1px;
    }

    &--wrapper {
        display: flex;
        align-items: center;
        gap: 2em;
        margin-bottom: 1em;
    }

    &--icon {
        @extend .subtitle, .is-3, .has-text-white;
        opacity: 0.75;
    }

    &--social {
        a {
            @extend .has-text-white;
            display: flex;
            align-items: center;
            gap: 0.75em;
            font-size: 1.1em;
        }
    }
}
</style>