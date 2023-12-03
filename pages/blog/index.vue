<template>
    <HeaderPageComponent imageUrl="/images/blog.jpg" subtitle="Dogodki, življenje v domu in ostale informacije" title="Novice"/>

    <div class="container mb-6 category-menu--mobile">
        <button class="button is-info is-outlined is-fullwidth" @click="mobileCategoryMenuActive = !mobileCategoryMenuActive">
            <span class="icon">
            <i class="ri-filter-2-line"></i>
            </span>
            <span>
                Kategorije
            </span>
        </button>

        <div v-if="mobileCategoryMenuActive || selectedCategory !== null" class="menu card p-4">
            <p class="menu-label">
                Kategorije
            </p>
            <ul class="menu-list">
                <li v-for="category of categories"><a :class="{'is-active': category?.title === selectedCategory?.title}" @click="selectCategory(category)">{{ category.title }}</a></li>
                <li v-if="selectedCategory"><a @click="selectCategory(null)">Prikaži vse</a></li>
            </ul>
        </div>
    </div>

    <div class="body__wrapper">
        <div class="container body__content-wrapper">
            <BlogPostCardComponent v-for="post of posts" :key="post.id" :post="post"/>
        </div>
        <aside class="menu body__category-menu">
            <p class="menu-label">
                Kategorije
            </p>
            <ul class="menu-list">
                <li v-for="category of categories"><a :class="{'is-active': category?.title === selectedCategory?.title}" @click="selectCategory(category)">{{ category.title }}</a></li>
                <li v-if="selectedCategory"><a @click="selectCategory(null)">Prikaži vse</a></li>
            </ul>
        </aside>
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
        console.log(useRoute().meta)
        this.fetchPosts();
        this.fetchCategories();
        return {
            loadedPosts: 0,
            showLoadMore: false,
            posts: [],
            categories: [],
            selectedCategory: null,
            mobileCategoryMenuActive: false
        }
    },
    methods: {
        async fetchPosts() {
            this.showLoadMore = false;
            const req = queryContent('blog/posts').sort({date: -1}).skip(this.loadedPosts).limit(10);
            if (this.selectedCategory) {
                req.where({category: this.selectedCategory.title});
            }

            const res = await req.find();
            this.posts.push(...res);
            this.loadedPosts += res.length;
            if (res.length === 10) {
                this.showLoadMore = true;
            }
        },
        async fetchCategories() {
            const res = await queryContent('blog/categories').find();
            this.categories = res;
        },
        selectCategory(category) {
            this.selectedCategory = category;
            this.posts = [];
            this.loadedPosts = 0;
            this.mobileCategoryMenuActive = false;
            this.fetchPosts();
        }
    }
}
</script>

<style lang="scss" scoped>
.body {
    &__wrapper {
        @media only screen and (min-width: 1024px) {
            display: flex;
        }
    }

    &__content-wrapper {
        @media only screen and (min-width: 1024px) {
            padding-left: 4em;
            padding-right: 4em;
        }
    }

    &__category-menu {
        display: none;
        @media only screen and (min-width: 1024px) {
            display: unset;
            min-width: 200px;
        }

    }
}

.category-menu--mobile {
    @media only screen and (min-width: 1024px) {
        display: none;
    }
}
</style>