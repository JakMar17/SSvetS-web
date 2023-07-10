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
                    <div class="info-row moto">
                        <span><i class="ri-megaphone-line"></i></span>
                        <strong>
                            {{ moto }}
                        </strong>
                    </div>
                </div>
            </div>
            <div class="dorm-members">
                <div class="member-card">
                    <img :src="president.imageUrl"/>
                    <h2 class="subtitle is-4 mb-0 has-text-centered">{{ president.name }}</h2>
                    <span class="has-text-centered">predstavnik</span>
                </div>
                <div class="member-card">
                    <img :src="vicePresident.imageUrl"/>
                    <h2 class="subtitle is-4 mb-0 has-text-centered">{{ vicePresident.name }}</h2>
                    <span class="has-text-centered">namestnik predstavnika</span>
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
            required: true
        },
        president: {
            type: {
                name: String,
                imageUrl: String
            },
            required: true
        },
        vicePresident: {
            type: {
                name: String,
                imageUrl: String
            },
            required: true
        }
    }
}
</script>


<style lang="scss" scoped>
@import "@/assets/styles/main.scss";


.wrapper {
    position: relative;
    height: 45em;
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
    height: 30em;
    margin-top: 5em;

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

        img {
            max-height: 200px;
        }
    }

    @media only screen and (min-width: 768px) {
        gap: 2em;
    }
}


</style>
<script lang="ts" setup>
</script>