<template>
    <div class="wrapper">
        <div class="content">
            <div class="dorm-info">
                <div class="card p-2">
                    <h1 class="title is-2 pb-0 mb-0">{{ name }}</h1>
                    <div class="info-row">
                        <span><i class="ri-user-2-line"></i></span>
                        <span>{{ position }}</span>
                    </div>
                    <div class="info-row">
                        <span><i class="ri-phone-line"></i></span>
                        <span>{{ phoneNumber }}</span>
                    </div>
                    <div class="info-row">
                        <span><i class="ri-mail-line"></i></span>
                        <strong>
                            <a :href="'mailto:' + mail">{{ mail }}</a>
                        </strong>
                    </div>
                </div>
            </div>
            <div class="dorm-members">
                <div class="member-card">
                    <img :src="avatarUrl"/>
                </div>
            </div>
        </div>

        <img :src="imageUrl" class="background"/>
    </div>
</template>

<script>
export default {
    props: {
        imageUrl: {
            type: String,
            required: true
        },
        avatarUrl: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        position: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        mail: {
            type: String,
            required: true
        }
    }
}
</script>


<style lang="scss" scoped>
@import "@/assets/styles/main.scss";


.wrapper {
    position: relative;
    height: 38em;
    width: 100%;
    z-index: 2;

    @media only screen and (min-width: 768px) {
        height: 32em;
    }
}

.background {
    z-index: -1;
    object-fit: cover;
    width: 100%;
    height: 30em;
    margin-top: 3em;

    @media only screen and (min-width: 768px) {
        height: 27em;
        margin-top: 5em;
    }
}

.content {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    margin-bottom: 0;
    padding: 2vh 4vw;
    gap: 4em;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-evenly;
    justify-items: stretch;
    align-items: stretch;

    @media only screen and (min-width: 768px) {
        align-content: space-evenly;
        gap: 1em;
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-areas:
    "dorm-info ."
    ". dorm-members";
    }

}


.dorm-info {
    grid-area: dorm-info;

    .info-row {
        display: flex;
        gap: 1em;
        align-items: center;
        margin-left: 1em;
    }
}

.dorm-members {
    grid-area: dorm-members;
    display: flex;
    justify-content: center;
    gap: 0.25em;

    .member-card {
        @extend .card, .p-2;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            max-height: 300px;
        }
    }

    @media only screen and (min-width: 768px) {
        justify-content: flex-end;
        gap: 2em;
    }
}


</style>
<script lang="ts" setup>
</script>