<template>
    <main v-if="componentState === 'loaded'" class="container">
        <div class="card p-6">
            <div class="has-text-centered">
                <div>{{ author }}</div>
                <h1 class="title is-2 mb-0">{{ title }}</h1>
                <h2 v-if="subtitle" class="title is-6 mt-2 has-text-primary">{{ subtitle }}</h2>
            </div>
            <ContentRendererMarkdown v-if="content" :value="content"/>
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
        }
    },
    async mounted() {

    },
    methods: {parseMarkdown},
}
</script>