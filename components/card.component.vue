<template>
    <div class="container">
        <div class="card p-4 mt-4">
            <div v-if="title || subtitle" class="mb-5">
                <h1 v-if="title" :class="buildCssClass('title is-2 mb-0')">{{ title }}</h1>
                <h2 v-if="subtitle" :class="buildCssClass('title is-6 mt-2 has-text-primary')">{{ subtitle.toUpperCase() }}</h2>
            </div>
            <div class="content">
                <ContentRendererMarkdown v-if="parsedContent" :value="parsedContent"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
        },
        subtitle: {
            type: String
        },
        content: {
            type: String
        },
        centeredTitles: {
            type: Boolean,
            default: false
        }
    },
    data() {
        parseMarkdown(this.content).then(parsed => this.parsedContent = parsed);
        return {
            clientWidth: null,
            clientHeight: null,
            parsedContent: null
        }
    },
    methods: {
        buildCssClass(baseClass = "") {
            return `${baseClass} ${this.centeredTitles ? "has-text-centered" : ""}`;
        },
    }
}
</script>

<style lang="scss" scoped></style>