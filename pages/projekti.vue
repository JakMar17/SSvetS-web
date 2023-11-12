<template>
    <main v-if="componentState === 'loaded'">
        <ProjectsHeaderComponent></ProjectsHeaderComponent>
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
            componentState: 'loading'
        }
    },
    methods: {
        async fetchData() {
            try {
                const data = await queryContent('pages/projects').findOne();
                this.content = data ?? null;
                this.componentState = 'loaded';
            } catch (e) {
                this.componentState = 'error';
            }
        }
    }
}
</script>