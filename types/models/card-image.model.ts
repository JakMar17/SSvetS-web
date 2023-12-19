export interface CardImageModel {
    title: string;
    subtitle?: string;
    imageUrl: string;
    content: string;
    reverse?: boolean;
    links: Array<{
        title: string;
        buttonType?: string;
        link: string;
    }>
}