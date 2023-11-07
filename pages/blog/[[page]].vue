<template>
    <main v-if="componentState === 'loaded'" class="container">
        <div class="card">
            <img v-if="cover" :src="cover" class="card-image__top" style="max-height: 30em; width: 100%; object-fit: cover"/>
            <div class="px-6 pt-3 pb-6">
                <div class="has-text-centered">
                    <div>{{ author }}</div>
                    <h1 class="title is-2 mb-0">{{ title }}</h1>
                    <h2 v-if="subtitle" class="subtitle is-4 mt-2 mb-6 has-text-primary">{{ subtitle }}</h2>
                </div>
                <ContentRendererMarkdown v-if="content" :value="content"/>
            </div>
        </div>
    </main>
    <ComponentStateLoadingComponent v-if="componentState === 'loading'"/>
    <ComponentStateErrorComponent v-if="componentState === 'error'"/>
</template>

<script>
export default {
    data() {
        const route = useRoute();
        queryContent('blog/posts').where({title: route.params.page}).findOne().then(res => {
            console.log(res)
            this.author = res.author;
            this.cover = res.cover;
            this.title = res.title;
            this.subtitle = res.subtitle;
            parseMarkdown(res.body).then(parsed => this.content = parsed);
            this.componentState = 'loaded';
        }).catch(() => this.componentState = 'error');

        return {
            componentState: 'loading',
            title: null,
            subtitle: null,
            content: null,
            author: null,
            authorAvatarUrl: null,
            cover: null
        }
    },
    async mounted() {

    },
    methods: {parseMarkdown},
}
</script>

<style lang="scss" scoped>
#parsed-content {
    font-weight: 800;
}
</style>
