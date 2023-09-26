<template>
    <main>

        <SssHeaderComponent :image-url="content.cover" :subtitle="content.subtitle" :title="content.title"/>

        <div v-if="content.intro" class="container">
            <div class="card p-4 mt-4">
                <p class="pre-wrap">
                    {{ content.intro }}
                </p>
            </div>
        </div>

        <div v-for="(card, index) in content.paragraphs" :key="card.title">
            <CardImageComponent v-if="card.image" :content="card.description" :image-url="card.image" :reversed="index % 2 !== 0" :title="card.title"/>
            <CardComponent v-if="!card.image" :centered-titles="true" :content="card.description" :subtitle="card.title" :title="card.title"/>
        </div>


    </main>
</template>

<script>
import {parseMarkdown} from "../../utils/parseMarkdown";

export default {
    async setup() {
        const route = useRoute()
        const {data} = await useAsyncData('sss', async () => (await queryContent('sss-pages').where({link: route.params.page}).findOne()));
        console.log(data)
        return {content: data.value}
    },
    data() {
        return {}
    },
    async asyncData() {

    },
    async mounted() {

    },
    methods: {parseMarkdown},
}
</script>
