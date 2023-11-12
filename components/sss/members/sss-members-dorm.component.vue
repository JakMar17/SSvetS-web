<template>
    <div class="wrapper">
        <div class="content">
            <div class="dorm-info">
                <div class="card p-2">
                    <h1 class="title is-2 pb-0 mb-0">{{ dormName }}</h1>
                    <div class="info-row">
                        <span><i class="ri-home-2-line"></i></span>
                        <span>{{ location }}</span>
                    </div>
                    <div class="info-row">
                        <span><i class="ri-user-3-line"></i></span>
                        <span>{{ noOfMembers }}</span>
                    </div>
                    <div v-if="moto" class="info-row moto">
                        <span><i class="ri-megaphone-line"></i></span>
                        <strong>
                            {{ moto }}
                        </strong>
                    </div>
                </div>
            </div>
            <div class="dorm-members">
                <div v-if="presidentName" class="member-card">
                    <div v-if="presidentImage" class="img__wrapper">
                        <img :src="presidentImage" loading="lazy"/>
                    </div>
                    <h2 class="subtitle is-4 mb-0 has-text-centered">{{ presidentName }}</h2>
                    <span class="has-text-centered">predstavnik</span>
                </div>
                <div v-if="vicePresidentName" class="member-card">
                    <div v-if="vicePresidentImage" class="img__wrapper">
                        <img :src="vicePresidentImage" loading="lazy"/>
                    </div>
                    <h2 class="subtitle is-4 mb-0 has-text-centered">{{ vicePresidentName }}</h2>
                    <span class="has-text-centered">namestnik predstavnika</span>
                </div>
            </div>
        </div>

        <img :src="imageUrl" class="background" loading="lazy"/>
    </div>
</template>

<script lang="ts">

export default {
    props: {
        imageUrl: {
            type: String,
            required: true
        },
        dormName: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        noOfMembers: {
            type: Number,
            required: true
        },
        moto: {
            type: String,
        },
        presidentName: {
            type: String,
        },
        presidentImage: {
            type: String,
        },
        vicePresidentName: {
            type: String,
        },
        vicePresidentImage: {
            type: String,
        }
    }
}
</script>


<style lang="scss" scoped>
@import "@/assets/styles/main.scss";


.wrapper {
    position: relative;
    height: 35em;
    width: 100%;
    z-index: 2;

    @media only screen and (min-width: 768px) {
        height: 30em;
    }
}

.background {
    z-index: -1;
    object-fit: cover;
    width: 100%;
    margin-top: 5em;
    height: 20em;

    @media only screen and (min-width: 768px) {
        height: 25em;
        margin-top: 2em;
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

        &.moto {
            margin-top: 1.5em;

            strong {
                border-left: solid 1px $primary;
                padding-left: 0.25em;
            }
        }
    }
}

.dorm-members {
    grid-area: dorm-members;
    display: flex;
    justify-content: flex-end;
    gap: 0.25em;

    .member-card {
        @extend .card, .p-2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;

        width: calc(150px + 0.5em);
        @media only screen and (min-width: 768px) {
            width: calc(200px + 0.5em);
        }

        .img__wrapper {
            width: 150px;
            height: 150px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                max-height: 150px;
                max-width: 150px;
            }

            @media only screen and (min-width: 768px) {
                width: 200px;
                height: 200px;

                img {
                    max-height: 200px;
                    max-width: 200px;
                }
            }
        }

    }

    @media only screen and (min-width: 768px) {
        gap: 2em;
    }
}


</style>
<script lang="ts" setup>
</script>