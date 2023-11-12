<template>
    <main v-if="componentState === 'loaded'">
        <HeaderPageComponent :imageUrl="imageUrl" subtitle="Šport, zabava & kultura" title="Projekti Študentskega sveta stanovalcev"/>
        <CardComponent :content="content.intro"></CardComponent>
        <CardImageComponent v-for="(project, index) in content.projects" :key="project.title" :content="project.description" :image-url="project.image" :links="project.links" :reversed="index % 2 !== 0" :subtitle="project.subtitle" :title="project.title"/>
    </main>
</template>

<script>
export default {
    data() {
        this.fetchData();
        return {
            content: null,
            imageUrl: null,
            componentState: 'loading'
        }
    },
    methods: {
        async fetchData() {
            try {
                const data = await queryContent('pages/projects').findOne();
                this.content = data ?? null;
                this.imageUrl = data.featureImage ?? null;
                this.componentState = 'loaded';
            } catch (e) {
                this.componentState = 'error';
            }
        }
    }
}
</script>