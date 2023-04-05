<template>
        <div style="margin-top: 4em; margin-bottom: 2em;" class="columns is-centered">
            <div class="column is-narrow">
                <h3 class="title is-3 has-text-centered px-6 mb-1">{{ title }}</h3>
                <div v-if="subtitle" class="columns is-centered is-vcentered">
                    <div class="column" style="padding-left: 0 !important">
                        <hr style="background: black; margin: 0" />
                    </div>
                    <div class="column is-narrow has-text-centered">
                        <h3 class="title has-text-primary is-6">{{ subtitle.toUpperCase() }}</h3>
                    </div>
                    <div class="column" style="padding-right: 0 !important">
                        <hr style="background: black; margin: 0" />
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: String
    }
}
</script>