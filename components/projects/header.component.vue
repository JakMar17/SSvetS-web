<template>
    <HeaderPageComponent :imageUrl="imageUrl" :links="headerLinks" :subtitle="subtitle" :title="title"/>
</template>

<script>
export default {
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
            type: String,
            default: "/images/projekti/majska-gajba.jpg"
        }
    },
    data() {
        return {
            headerLinks: [
                // {
                //     label: "Kdo smo",
                //     onClick: () => this.$router.push('/sss/kdo-smo')
                // },
                // {
                //     label: "Člani",
                //     onClick: () => this.$router.push('/sss/clani')
                // },
                // {
                //     label: "Organi",
                //     onClick: () => this.$router.push('/sss/organi')
                // },
                // {
                //     label: "Zgodovina",
                //     onClick: () => this.$router.push('/sss/zgodovina')
                // }
            ]
        }
    }
}
</script>