export interface TextAndImageItem {
    img: string;
    alt: string;
    text: string;
    title: string;
    ImageSide: ImageSide;
}

export enum ImageSide {
    LEFT,
    RIGHT,
}
