<template>
    <main>
        <ProjectsHeaderComponent></ProjectsHeaderComponent>

        <div class="container">
            <div class="card p-4 mb-6">
                <p class="content">
                    {{ content.intro }}
                </p>
            </div>
        </div>

        <CardImageComponent v-for="(project, index) in content.projects" :key="project.title" :content="project.description" :image-url="project.image" :reversed="index % 2 !== 0" :subtitle="project.subtitle" :title="project.title"/>
    </main>
</template>

<script>
import TitleSub from '~/components/title/TitleSub.vue';

export default {
    setup: async () => {
        const {data} = await useAsyncData('projects', async () => (await queryContent('projects').find())[0]);
        return {content: data.value}
    },
    async asyncData() {
        const data = await queryContent('projects').find();
        return {
            content: data?.[0] ?? null
        }
    }
    ,
    components: {
        TitleSub
    }
}
</script>