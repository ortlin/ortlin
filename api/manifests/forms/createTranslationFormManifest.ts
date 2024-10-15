import type { Form } from "./formManifest.ts";

const createTranslationFormManifest: Form = {
    category: "audio",
    name: "createTranslation",
    slug: "create-translation",
    api: "createTranslation",
    heading: "Create translation",
    description: "Translates audio into English.",
    doc: "https://platform.openai.com/docs/api-reference/audio/createTranslation",
    fields: [
        {
            name: "file",
            label: "File",
            description: [
                {
                    type: "text",
                    content:
                        "The audio file object (not file name) translate, in one of these formats: ",
                },
                {
                    type: "highlight",
                    content: "flac",
                },
                {
                    type: "text",
                    content: ", ",
                },
                {
                    type: "highlight",
                    content: "mp3",
                },
                {
                    type: "text",
                    content: ", ",
                },
                {
                    type: "highlight",
                    content: "mp4",
                },
                {
                    type: "text",
                    content: ", ",
                },
                {
                    type: "highlight",
                    content: "mpeg",
                },
                {
                    type: "text",
                    content: ", ",
                },
                {
                    type: "highlight",
                    content: "mpga",
                },
                {
                    type: "text",
                    content: ", ",
                },
                {
                    type: "highlight",
                    content: "m4a",
                },
                {
                    type: "text",
                    content: ", ",
                },
                {
                    type: "highlight",
                    content: "ogg",
                },
                {
                    type: "text",
                    content: ", ",
                },
                {
                    type: "highlight",
                    content: "wav",
                },
                {
                    type: "text",
                    content: ", or ",
                },
                {
                    type: "highlight",
                    content: "webm",
                },
                {
                    type: "text",
                    content: ".",
                },
            ],
            type: "file",
            accept: ".flac, .mp3, .mp4, .mpeg, .mpga, .m4a, .ogg, .wav, .webm",
            required: true,
        },
        {
            name: "model",
            label: "Model",
            value: "",
            description: [
                {
                    type: "text",
                    content: "ID of the model to use. Only ",
                },
                {
                    type: "highlight",
                    content: "whisper-1",
                },
                {
                    type: "text",
                    content:
                        " (which is powered by our open source Whisper V2 model) is currently available.",
                },
            ],
            type: "select",
            required: true,
            options: [
                {
                    name: "whisper-1",
                    value: "whisper-1",
                },
            ],
        },
        {
            name: "prompt",
            label: "Prompt",
            description: [
                {
                    type: "text",
                    content:
                        "An optional text to guide the model's style or continue a previous audio segment. The ",
                },
                {
                    type: "anchor",
                    content: "prompt",
                    url: "https://platform.openai.com/docs/guides/speech-to-text/prompting",
                },
                {
                    type: "text",
                    content: " should be in English.",
                },
            ],
            type: "text",
            required: false,
        },
        {
            name: "response_format",
            label: "Response format",
            value: "json",
            description: [
                {
                    type: "text",
                    content:
                        "The format of the output, in one of these options: ",
                },
                {
                    type: "highlight",
                    content: "json",
                },
                {
                    type: "text",
                    content: ", ",
                },
                {
                    type: "highlight",
                    content: "text",
                },
                {
                    type: "text",
                    content: ", ",
                },
                {
                    type: "highlight",
                    content: "srt",
                },
                {
                    type: "text",
                    content: ", ",
                },
                {
                    type: "highlight",
                    content: "verbose_json",
                },
                {
                    type: "text",
                    content: ", or ",
                },
                {
                    type: "highlight",
                    content: "vtt",
                },
                {
                    type: "text",
                    content: ".",
                },
            ],
            type: "select",
            required: false,
            options: [
                {
                    name: "json",
                    value: "json",
                },
                {
                    name: "text",
                    value: "text",
                },
                {
                    name: "srt",
                    value: "srt",
                },
                {
                    name: "verbose_json",
                    value: "verbose_json",
                },
                {
                    name: "vtt",
                    value: "vtt",
                },
            ],
        },
        {
            name: "temperature",
            label: "Temperature",
            value: "0",
            description: [
                {
                    type: "text",
                    content:
                        "The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use ",
                },
                {
                    type: "anchor",
                    content: "log probability",
                    url: "https://en.wikipedia.org/wiki/Log_probability",
                },
                {
                    type: "text",
                    content:
                        " to automatically increase the temperature until certain thresholds are hit.",
                },
            ],
            type: "number",
            required: false,
        },
    ],
};

export default createTranslationFormManifest;
