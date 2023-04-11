<template>
    <div class="container" style="padding-top: 4em; padding-bottom: 2em;">
        <div style="margin-bottom: 1em">
            <h1 class="title is-1 has-text-centered">{{ title }}</h1>
            <h2 class="subtitle is-3 has-text-centered">{{ subtitle }}</h2>
        </div>
        <div v-if="links" class="columns is-vcentered is-centered">
            <div class="column ml-2 is-hidden-touch">
                <hr style="background: black" />
            </div>
            <div class="column is-narrow has-text-centered">
                    <button v-for="link of links" @click="link.onClick" :key="link.label" class="button is-text has-text-black"
                        style="text-decoration: none !important; font-weight: 700 !important;">
                        {{ link.label }}
                    </button>
            </div>
            <div class="column mr-2 is-hidden-touch">
                <hr style="background: black" />
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
        subtitle: String,
        links: {
            type: Array
        }
    },
}
</script>