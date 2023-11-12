<template>
    <HeaderPageComponent imageUrl="/images/blog.jpg" subtitle="Dogodki, življenje v domu in ostale informacije" title="Novice"/>

    <CardImageComponent v-for="post of posts" :key="post.id" :title="post.title" :image-url="post.cover" :content="post.summary"/>


    <div class="container">
        <div class="card">

        </div>
    </div>

</template>
<script>
export default {
    data() {
        const page = this.$route.query.page;
        queryContent('blog/posts').skip(((page ?? 1) -1 ) * 10 ).limit(10).find().then(res => {
            this.posts = res;
            console.log(this.posts);
        })

        return {
            posts: []
        }
    }
}
</script>