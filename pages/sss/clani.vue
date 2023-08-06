<template>
    <main>
        <SssHeaderComponent/>

        <div class="container">
            <div class="card p-4 mt-4">
                <p class="pre-wrap">
                    {{ content.intro }}
                </p>
            </div>
        </div>

        <TitleOneComponent title="Vodstvo"/>

        <SssMembersLeadershipComponent
            v-for="member in content.leadership"
            :avatar-url="member.image"
            :image-url="member.backgroundImage"
            :mail="member.email"
            :name="member.name"
            :phone-number="member.phone"
            :position="member.function"
        ></SssMembersLeadershipComponent>


        <TitleOneComponent subtitle="Predstavniki in namestniki domov" title="Člani ŠSS"/>

        <SssMembersDormComponent
            v-for="dorm in content.memberDorms"
            :dorm-name="dorm.name"
            :image-url="dorm.dormImage"
            :location="dorm.location"
            :moto="dorm.dormMotto"
            :no-of-members="dorm.noOfStudents"
            :presidentImage="dorm.presidentImage"
            :presidentName="dorm.presidentName"
            :vicePresidentImage="dorm.subPresidentImage"
            :vicePresidentName="dorm.subPresidentName"
        ></SssMembersDormComponent>
    </main>
</template>


<script>
import {createSEOMeta} from '/utils/seo'

export default {
    async setup() {
        const {data} = await useAsyncData('sss', async () => (await queryContent('sss/studentski-svet-stanovalcev').findOne()));
        return {content: data.value}
    },
    head() {
        return {
            title: "Študentski svet stanovalcev",
            meta: [
                ...createSEOMeta({
                    title: "Študentski svet stanovalcev",
                    description: "this.project.description",
                    url: 'https://jakob.marela.team/sss/clani',
                    image: {}
                }),
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.members {
    &__wrapper {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        gap: 1.75em;
        padding-bottom: 4em;
        margin-top: 4em;
    }
}
</style>
