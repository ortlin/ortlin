type ApiHeaderName = "Content-Type";

interface ApiHeader {
    name: ApiHeaderName;
    value: string;
}

export interface Api {
    name: string;
    method: "post";
    url: string;
    headers: ApiHeader[];
}

const apiManifest: Api[] = [
    {
        name: "createSpeech",
        method: "post",
        url: "https://api.openai.com/v1/audio/speech",
        headers: [
            {
                name: "Content-Type",
                value: "application/json",
            },
        ],
    },
    {
        name: "createTranscription",
        method: "post",
        url: "https://api.openai.com/v1/audio/transcriptions",
        headers: [
            {
                name: "Content-Type",
                value: "multipart/form-data",
            },
        ],
    },
    {
        name: "createTranslation",
        method: "post",
        url: "https://api.openai.com/v1/audio/translations",
        headers: [
            {
                name: "Content-Type",
                value: "multipart/form-data",
            },
        ],
    },
];

export default apiManifest;
