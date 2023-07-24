<template>
    <main>
        <section class="foreground--wrapper">
            <div class="foreground--content card p-4">
                <h1 class="subtitle is-1 has-text-white">
                    Kontakt
                </h1>
                <div class="contact--wrapper">
                    <div>
                        <i class="contact--icon ri-community-line"></i>
                    </div>
                    <div>
                        Študentski svet stanovalcev<br/>
                        Svetčeva 9 (dom 3, 2. nadstropje)<br/>
                        1000 Ljubljana<br/>
                    </div>
                </div>

                <div class="contact--wrapper">
                    <div>
                        <i class="contact--icon ri-mail-line"></i>
                    </div>
                    <div>
                        <a class="has-text-white" href="mailto:info@ssvets.si">info@ssvets.si</a>
                    </div>
                </div>

                <div class="contact--wrapper">
                    <div>
                        <i class="contact--icon ri-phone-line"></i>
                    </div>
                    <div>
                        041 398 407
                    </div>
                </div>

                <h2 class="subtitle is-3 has-text-white pt-4">Socialna omrežja</h2>
                <div class="contact--social">
                    <a>
                        <i class="ri-facebook-circle-fill"></i>
                        <span>Študentski svet stanovalcev</span>
                    </a>
                </div>
                <hr class="contact--hr"/>
                <div class="contact--social">
                    <a>
                        <i class="ri-ie-fill"></i>
                        <span>Spletna stran Majskih iger</span>
                    </a>
                </div>
                <div class="contact--social">
                    <a>
                        <i class="ri-facebook-circle-fill"></i>
                        <span>Majske igre</span>
                    </a>
                </div>
                <div class="contact--social">
                    <a>
                        <i class="ri-instagram-fill"></i>
                        <span>Majske igre</span>
                    </a>
                </div>
                <hr class="contact--hr"/>
                <div class="contact--social">
                    <a>
                        <i class="ri-facebook-circle-fill"></i>
                        <span>Študentsko pustovanje v Rožni dolini</span>
                    </a>
                </div>
            </div>
        </section>
        <section class="background--wrapper">
            <div class="background--content-card">
                <div class="background--content">
                    <div>
                        <div class="title is-5 pr-1 mb-0">Deni Cerovac</div>
                        <div class="title is-6">predsednik ŠSS</div>
                        <div class="subtitle is-6 mb-0">
                            deni.cerovac@ssvets.si
                            <span><i class="ri-mail-line"></i></span>
                        </div>
                        <div class="subtitle is-6 mt-0">
                            041 398 407
                            <span><i class="ri-phone-line"></i></span>
                        </div>
                    </div>

                    <div>
                        <div class="title is-5 pr-1 mb-0">Jakob Marušič</div>
                        <div class="title is-6">namestnik predsednika ŠSS</div>
                        <div class="subtitle is-6 mb-0">
                            jakob.marusic@ssvets.si
                            <span><i class="ri-mail-line"></i></span>
                        </div>
                        <div class="subtitle is-6 mt-0">
                            031 708 115
                            <span><i class="ri-phone-line"></i></span>
                        </div>
                    </div>

                    <div>
                        <div class="title is-5 pr-1 mb-0">Jakob Marušič</div>
                        <div class="title is-6">namestnik predsednika ŠSS</div>
                        <div class="subtitle is-6 mb-0">
                            jakob.marusic@ssvets.si
                            <span><i class="ri-mail-line"></i></span>
                        </div>
                        <div class="subtitle is-6 mt-0">
                            031 708 115
                            <span><i class="ri-phone-line"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';


main {
    position: relative;
    min-height: 40em;
    margin: 1em 0;

    @media only screen and (min-width: 768px) {
        margin: 1em 4em;
    }
}

.foreground {
    &--wrapper {
        display: flex;
        align-items: center;

        @media only screen and (min-width: 768px) {
            z-index: 2;
            width: 45%;
            height: 40em;
            margin-left: 4em;
            position: absolute;
        }
    }

    &--content {
        @extend .has-background-primary, .has-text-white;
        width: 100%;

        @media only screen and (min-width: 768px) {
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
            @media only screen and (min-width: 768px) {
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