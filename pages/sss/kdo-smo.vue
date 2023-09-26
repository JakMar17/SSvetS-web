<template>
    <main>

        <SssHeaderComponent
            :image-url="content.cover"
            :subtitle="content.subtitle"
            :title="content.title"
        ></SssHeaderComponent>

        <CardComponent :content="content.intro"></CardComponent>

        <CardImageComponent v-for="(card, index) in content.paragraphs" :key="card.title" :content="card.description" :image-url="card.image" :reversed="index % 2 !== 0" :title="card.title"/>

    </main>
</template>


<script>
export default {
    async setup() {
        const {data} = await useAsyncData('sss', async () => (await queryContent('sss/description').find())[0]);
        return {content: data.value}
    },
}
</script>

