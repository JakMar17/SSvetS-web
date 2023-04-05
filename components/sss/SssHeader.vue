<template>
    <HeaderPage :title="title" :subtitle="subtitle" :links="headerLinks" />
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
        }
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
                {
                    label: "Organi",
                    onClick: () => this.$router.push('/sss/organi')
                },
                {
                    label: "Zgodovina",
                    onClick: () => this.$router.push('/sss/zgodovina')
                }
            ]
        }
    }
}
</script>