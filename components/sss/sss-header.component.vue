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
    data() {
        return {
            headerLinks: [
                {
                    label: "Člani",
                    onClick: () => this.$router.push('/sss/clani')
                }
            ]
        }
    },
    mounted() {
        this.fetchHeaderLinks();
    },
    methods: {
        fetchHeaderLinks() {
            const router = useRouter();
            queryContent('sss-pages').only(['menuButton', 'link']).find().then(data => {
                data.forEach(({menuButton, link}) => this.headerLinks.push({
                    label: menuButton,
                    onClick: () => router.push({path: `/sss/${link}`})
                }))
            });
        }
    }
}
</script>