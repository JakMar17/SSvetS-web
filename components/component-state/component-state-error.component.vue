<template>
    <div class="container">
        <div class="card p-4 has-text-centered">
            <h1 class="subtitle is-4">
                <div>
                    <i class="ri-error-warning-line ri-3x"></i>
                </div>
                <div>
                    {{ title }}
                </div>
            </h1>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Spletne strani ni mogoče najti'
        }
    }
}
</script>