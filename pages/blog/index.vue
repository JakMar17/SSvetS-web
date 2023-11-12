<template>
    <HeaderPageComponent imageUrl="/images/blog.jpg" subtitle="Dogodki, življenje v domu in ostale informacije" title="Novice"/>
    <div class="container">
        <BlogPostCardComponent v-for="post of posts" :key="post.id" :post="post"/>
    </div>
    <div class="container">
        <div class="has-text-centered">
            <button v-show="showLoadMore" class="button is-primary" @click="fetchPosts">Naloži več</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        this.fetchPosts();
        return {
            loadedPosts: 0,
            showLoadMore: false,
            posts: []
        }
    },
    methods: {
        async fetchPosts() {
            this.showLoadMore = false;
            const res = await queryContent('blog/posts').skip(this.loadedPosts).limit(10).find();
            this.posts.push(...res);
            this.loadedPosts += res.length;
            if (res.length === 10) {
                this.showLoadMore = true;
            }
        },
    }
}
</script>