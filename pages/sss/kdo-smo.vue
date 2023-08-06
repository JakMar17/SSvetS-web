<template>
    <main>

        <SssHeaderComponent
            :image-url="content.cover"
            :subtitle="content.subtitle"
            :title="content.title"
        ></SssHeaderComponent>

        <div class="container">
            <div class="card p-4 mb-4">
                <p class="pre-wrap">
                    {{ content.intro }}
                </p>
            </div>
        </div>

        <CardImageComponent v-for="(card, index) in content.paragraphs" :key="card.title" :image-url="card.image" :reversed="index % 2 !== 0" :title="card.title">
            <p>
                {{ card.description }}
            </p>
        </CardImageComponent>

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

