<template>
    <div class="container">
        <div class="card p-4 mt-4">
            <div v-if="title || subtitle" class="mb-5">
                <h1 v-if="title" :class="buildCssClass('title is-2 mb-0')">{{ title }}</h1>
                <h2 v-if="subtitle" :class="buildCssClass('title is-6 mt-2 has-text-primary')">{{ subtitle.toUpperCase() }}</h2>
            </div>
            <div class="content">
                <ContentRendererMarkdown v-if="content" :value="content"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {CardModel} from "~/types/models";
import {parseMarkdown} from "~/utils/parseMarkdown";

const props = withDefaults(defineProps<CardModel>(), {
    centeredTitles: false,
});

const {title, subtitle, centeredTitles} = toRefs(props);
const content = ref<string | null>(null);

parseMarkdown(props.content).then((parsed: string) => content.value = parsed);

function buildCssClass(baseClass = "") {
  return `${baseClass} ${centeredTitles?.value ? "has-text-centered" : ""}`;
}
</script>

<style lang="scss" scoped></style>