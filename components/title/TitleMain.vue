<template>
    <div class="columns is-vcentered" style="margin-top: 4em; margin-bottom: 2em">
        <div class="column is-hidden-touch" style="padding-left: 0 !important">
            <hr style="background: black" />
        </div>
        <div class="column is-narrow has-text-centered">
            <h2 class="title is-2 pb-0">{{ title }}</h2>
            <h2 class="subtitle is-4">{{ subtitle }}</h2>
        </div>
        <div class="column is-hidden-touch" style="padding-right: 0 !important">
            <hr style="background: black" />
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