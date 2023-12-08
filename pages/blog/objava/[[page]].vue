<template>
  <Head>
    <Meta :content="blogPostData.title" name="title"/>
    <Meta :content="blogPostData.summary" name="description"/>
    <Meta :content="blogPostData.cover" name="image"/>
    <Meta :content="blogPostData.author" name="author"/>
    <Meta :content="blogPostData.title" name="og:title"/>
    <Meta :content="blogPostData.summary" name="og:description"/>
    <Meta :content="blogPostData.cover" name="og:image"/>
    <Meta :content="blogPostData.author" name="og:author"/>
    <Meta :content="blogPostData.title" name="twitter:title"/>
    <Meta :content="blogPostData.summary" name="twitter:description"/>
    <Meta :content="blogPostData.cover" name="twitter:image"/>
    <Meta :content="blogPostData.author" name="twitter:author"/>
    <Meta content="summary_large_image" name="twitter:card"/>
  </Head>
    <main v-if="componentState === 'loaded'" class="container">
        <div class="card">
            <img v-if="blogPostData.cover" :src="blogPostData.cover" class="card-image__top" style="max-height: 30em; width: 100%; object-fit: cover"/>
            <div class="px-6 pt-3 pb-6">
                <div class="has-text-centered">
<!--                    <div v-if="authorAvatarUrl">-->
<!--                        <img :src="authorAvatarUrl" style="height: 64px; width: 64px; border-radius: 50%; object-fit: cover"/>-->
<!--                    </div>-->
                    <div>{{ blogPostData.author }}</div>
                    <h1 class="title is-2 mb-0">{{ blogPostData.title }}</h1>
                    <h2 v-if="blogPostData.subtitle" class="subtitle is-4 mt-2 mb-6 has-text-primary">{{ blogPostData.subtitle }}</h2>
                </div>
                <ContentRenderer>
                    <ContentRendererMarkdown v-if="blogContent" :value="blogContent" class="markdown"/>
                </ContentRenderer>
            </div>
        </div>
    </main>
    <ComponentStateLoadingComponent v-if="componentState === 'loading'"/>
    <ComponentStateErrorComponent v-if="componentState === 'error'"/>
</template>

<script lang="ts" setup>
const componentState = ref('loading');

const blogPostData = ref<null | {title: string, subtitle: string, author: string, cover: string}>(null);
const blogContent = ref<null | string>(null);

const fetchBlogPost = async () => {
    const route = useRoute();
    try {
        const {author, cover, title, subtitle, body, summary} = await queryContent('blog/posts').where({title: route.params.page}).findOne()

        blogPostData.value = {author, cover, title, subtitle};
        blogContent.value = await parseMarkdown(body);
        componentState.value = 'loaded';
    } catch (e) {
        componentState.value = 'error';
    }
}

watch(blogPostData, (value) => {
    console.log(createSeoObject({title: value?.title, image: value?.cover, description: value?.summary}))
    useSeoMeta(createSeoObject({title: value?.title, image: value?.cover, description: value?.summary}))
});

onMounted(() => {
    fetchBlogPost();
})

</script>

<style lang="scss" scoped>
#parsed-content {
    font-weight: 800;
}
</style>
