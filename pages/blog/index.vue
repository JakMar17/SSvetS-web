<template>
    <HeaderPageComponent imageUrl="/images/blog.jpg" subtitle="Dogodki, življenje v domu in ostale informacije" title="Novice"/>

    <div ref="content__card" class="content__card">
        <h1 class="title is-2 mb-0">Hello world</h1>
        <h2 class="title is-6 mt-2 has-text-primary">PODNASLOV HELLO WORLDA</h2>
        <!--            <ContentRendererMarkdown :value="parsedContent"/>-->
        <div class="flex flex-wrap mt-4">
            <NuxtLink v-for="link in links" :key="link.title" :class="link.buttonType" :to="link.link" class="button">{{ link.title }}</NuxtLink>
        </div>
    </div>

</template>
<script lang="ts" setup>
</script>