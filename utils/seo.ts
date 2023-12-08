import {UseSeoMetaInput} from "@unhead/vue";

export const createSeoObject = ({title, description, image}: { title: string, description: string, image: string } = {title: 'Študentski svet stanovalcev', description: 'Študentski svet stanovalcev je organ, ki predstavlja stanovalce Študentskega doma Ljubljana Svet je sestavljen iz predstavnikov študentov, ki so izvoljeni na volitvah, ki potekajo vsako leto. ŠSS je organizator Majskih iger, Študentskega pustovanja v Rožni dolini in drugih dogodkov.', image: '/img/347269340_761751668759482_5891382283528008371_n.webp'}): UseSeoMetaInput => ({
    title,
    ogTitle: title,
    twitterTitle: title,
    description,
    ogDescription: description,
    twitterDescription: description,
    twitterCard: 'summary_large_image',
    ogImage: image,
    twitterImage: image,
    twitterImageAlt: title,
    ogImageUrl: image,
    ogImageAlt: title,
    ogType: 'website',
});