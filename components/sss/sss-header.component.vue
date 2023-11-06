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
        return {headerLinks: []};
    },
    data() {
        const router = useRouter();
        queryContent('sss-pages').find().then(data =>
            data.forEach((page) => this.headerLinks.push({
                label: page.menuButton,
                onClick: () => router.push({path: `/sss/${page.link}`})
            })));

        return {
            headerLinks: [
                {
                    label: "Kdo smo",
                    onClick: () => this.$router.push('/sss/kdo-smo')
                },
                {
                    label: "Člani",
                    onClick: () => this.$router.push('/sss/clani')
                }
            ]
        }
    }
}
</script>