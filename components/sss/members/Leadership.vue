<template>
    <div class="container">
        <TitleMain title="Vodstvo"/>
        <div class="members_flex__wrapper">
            <SssMembersContact :photoUrl="president.photoUrl" :name="president.name" functionName="predsednik ŠSS"
                :phone="president.phone" :email="president.email" />
            <SssMembersContact :photoUrl="vicePresident.photoUrl" :name="vicePresident.name"
                functionName="namestnik predsednika ŠSS" :phone="vicePresident.phone" :email="vicePresident.email" />
        </div>
        <div class="members_flex__wrapper">
            <SssMembersContact v-for="member of otherMembers" :name="member.name" :photoUrl="member.photoUrl"
                :functionName="member.functionName" :phone="member.phone" :email="member.email">
            </SssMembersContact>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        president: {
            type: Object,
            required: true
        },
        vicePresident: {
            type: Object,
            required: true
        },
        otherMembers: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
.members {
    &_flex__wrapper {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        gap: 1em;
        padding-bottom: 4em;
    }
}
</style>