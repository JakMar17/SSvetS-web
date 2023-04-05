<template>
    <div>
        <div class="card">
            <div class="card-content has-text-centered"
                style="min-height: 25em; display: flex; justify-content: space-between; flex-direction: column;">
                <div>
                    <div style="height: 9em; display: flex; align-items: center; justify-content: center;">
                        <i v-if="icon" style="font-size: 3.5em;" :class="icon"> </i>
                        <img :src="iconLink" style="max-height: 9em;"/>
                    </div>
                    <h2 class="title is-4">{{ title }}</h2>
                    <p>{{ body }}</p>
                </div>
                <div style="display: flex; justify-content: flex-end;">
                    <a @click="onCLick()" class="button no_hover is-text mt-3">Izvedi več</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        body: String,
        icon: String,
        iconLink: String,
        onCLick: {
            type: Function,
            default: () => { }
        }
    },
}
</script>

<style lang="scss" scoped>
    .no_hover {
        pointer-events: stroke !important;
        cursor: pointer !important;
    }
</style>
