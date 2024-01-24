export interface CardImageModel {
    title: string;
    subtitle?: string;
    imageUrl: string;
    content: string;
    reversed?: boolean;
    links?: Array<{
        title: string;
        buttonType?: string;
        link: string;
    }>
}