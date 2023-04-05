<template>
    <div class="wrapper">
        <h3 class="subtitle is-2 has-text-centered">{{ dormName }}</h3>
        <span class="dorm__motto has-text-centered">{{ dormMotto }}</span>
        <div class="dorm__members">
            <SssMembersContact :photoUrl="presidentPhotoUrl" :name="presidentName" functionName="predstavnik" />
            <SssMembersContact :photoUrl="vicePresidentPhotoUrl" :name="vicePresidentName"
                functionName="namestnik predstavnika" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dormName: {
            type: String,
            required: true
        },
        dormMotto: {
            type: String,
            required: true
        },
        presidentName: {
            type: String,
            required: true
        },
        presidentPhotoUrl: {
            type: String,
            required: true
        },
        vicePresidentName: {
            type: String,
            required: true
        },
        vicePresidentPhotoUrl: {
            type: String,
            required: true
        },
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.dorm__motto {
    @extend .title, .is-6;
    font-style: italic;
}

.dorm__members {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 0.75em;
}
</style>