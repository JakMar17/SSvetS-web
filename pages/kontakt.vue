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
            </div>
        </section>
        <section class="background--wrapper">
            <div class="background--content-card">
                <div class="background--content">

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
    margin: 1em 4em;
    min-height: 40em;
}

.foreground {
    &--wrapper {
        z-index: 2;
        width: 45%;
        height: 40em;
        margin-left: 4em;
        position: absolute;
        display: flex;
        align-items: center;
    }

    &--content {
        @extend .has-background-primary, .has-text-white;
        width: 100%;
        height: 38em;
        -webkit-box-shadow: 5px 5px 10px 3px rgba(187, 187, 187, 1);
        -moz-box-shadow: 5px 5px 10px 3px rgba(187, 187, 187, 1);
        box-shadow: 5px 5px 10px 3px rgba(187, 187, 187, 1);

    }


}

.background {

    &--wrapper {
        position: absolute;
        width: 100%;
        height: 40em;
        display: flex;
        align-items: center;
    }

    &--content {
        width: calc(100% - 4em - 45%);
        height: 100%;

        &-card {
            @extend .card;
            height: calc(40em * 0.8);
            width: 100%;
            display: flex;
            justify-content: flex-end;
        }
    }
}

.contact {
    &--wrapper {
        display: flex;
        align-items: center;
        gap: 2em;
        margin-bottom: 1em;
    }

    &--icon {
        @extend .subtitle, .is-1, .has-text-white;
        opacity: 0.75;
    }
}
</style>