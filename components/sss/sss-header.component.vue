<template>
    <HeaderPageComponent :imageUrl="imageUrl" :links="headerLinks" :subtitle="subtitle" :title="title"/>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Študentski svet stanovalcev"
        },
        subtitle: {
            type: String,
            default: "Predstavniki študentov Študentskega doma Ljubljana"
        },
        imageUrl: {
            type: String,
            default: "https://ssvets.si/wp-content/uploads/2022/02/89144402_2506116986366693_2098656754677055488_n.jpg"
        }
    },
    async setup() {
        const router = useRouter();
        const {data} = await useAsyncData('sss', async () => (await queryContent('sss-pages').find()));
        const headerLinks = data.value.map((page) => ({
            label: page.title,
            onClick: () => router.push({path: `/sss/${page.link}`})
        }));

        return {headerLinks};
    },
    data() {
        return {
            headerLinks: [
                {
                    label: "Kdo smo",
                    onClick: () => this.$router.push('/sss/kdo-smo')
                },
                {
                    label: "Člani",
                    onClick: () => this.$router.push('/sss/clani')
                },
                ...this.headerLinks
            ]
        }
    }
}
</script>