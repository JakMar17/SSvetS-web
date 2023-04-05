<template>
    <div class="card" style="padding: 1em; min-width: 20em">
        <div style="display: flex; justify-content: center;">
            <img class="citation__avatar" :src="photoUrl">
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; margin-top: 2em;">
            <h3 class="subtitle is-3">{{ name }}</h3>
            <h4 class="title is-6">{{ functionName }}</h4>
            <div v-if="phone" style="display: flex; gap: 1em; align-items: center;">
                <i class="ri-phone-line"></i>
                <div>
                    {{ phone }}
                </div>
            </div>
            <div v-if="email" style="display: flex; gap: 1em; align-items: center;">
                <i class="ri-mail-line"></i>
                <div>
                    {{ email }}
                </div>
            </div>
            <button v-if="link" style="margin-top: 2em" class="button is-info is-fullwidth">
                Več podrobnosti
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        photoUrl: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        functionName: {
            type: String,
            required: true
        },
        phone: String,
        email: String,
        link: String
    }
}
</script>