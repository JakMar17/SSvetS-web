<template>
    <main>
        <ProjectsHeaderComponent></ProjectsHeaderComponent>

        <div class="container">
            <div class="card p-4">
                <p class="content">
                    {{ content.intro }}
                </p>
            </div>
        </div>

        <CardImageComponent v-for="(project, index) in content.projects" :key="project.title" :image-url="project.image" :reversed="index % 2 !== 0" :subtitle="project.subtitle" :title="project.title">
            <p>
                {{ project.description }}
            </p>
        </CardImageComponent>
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