<template>
    <NuxtLayout>
        <div class="container">

            <CardImageComponent
                :image-url="imageUrl"
                :links="links"
                :reversed="true"
                :subtitle="subtitle"
                :title="title"
            />

        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
const props = defineProps({
    error: Object
})

const handleError = () => clearError({ redirect: '/' })

const statusCode = computed(() => props.error.statusCode);
const title = computed(() => {
    const code = statusCode.value;
    switch (code) {
        case 404:
            return 'Spletna stran ne obstaja';
        case 500:
            return 'Napaka pri pridobivanju podatkov';
        default:
            return 'Napaka';
    }
});

const subtitle = computed(() => {
    const code = statusCode.value;
    switch (code) {
        case 404:
            return 'Stran, ki jo iščete, ne obstaja. Morda sem jo pojedel.';
        case 500:
            return `Koda napake: ${code}`;
        default:
            return `Koda napake: ${code}`;
    }
});

const imageUrl = computed(() => {
    const code = statusCode.value;
    switch (code) {
        case 404:
            return '/img/sportko.svg';
        case 500:
        default:
            return '/img/zabavko.svg';
    }
});

const links = [
    {
        title: 'Domov',
        link: '/',
        buttonType: 'is-primary'
    }
]
</script>
