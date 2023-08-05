<template>
    <HeaderPageComponent :imageUrl="imageUrl ?? defaultImage" :links="headerLinks" :subtitle="subtitle" :title="title"/>
</template>

<script>
export default {
    setup: async () => {
        const {data} = await useAsyncData('projects', async () => (await queryContent('projects').find())[0]);
        return {
            defaultImage: data.value.featureImage
        }
    },
    props: {
        title: {
            type: String,
            default: "Projekti Študentskega sveta stanovalcev"
        },
        subtitle: {
            type: String,
            default: "Šport, zabava & kultura"
        },
        imageUrl: {
            type: String
        }
    },
    data() {
        return {
            headerLinks: []
        }
    }
}
</script>