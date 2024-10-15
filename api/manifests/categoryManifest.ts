export interface Category {
    name: string;
    heading: string;
}

const categoryManifest: Category[] = [
    {
        name: "audio",
        heading: "Audio",
    },
    {
        name: "chat",
        heading: "Chat",
    },
    {
        name: "images",
        heading: "Images",
    },
    {
        name: "moderations",
        heading: "Moderations",
    },
];

export default categoryManifest;
