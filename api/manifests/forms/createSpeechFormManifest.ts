import type { Form } from "./formManifest.ts";

const createSpeechFormManifest: Form = {
    category: "audio",
    name: "createSpeech",
    slug: "create-speech",
    api: "createSpeech",
    heading: "Create speech",
    description: "Generates audio from the input text.",
    doc: "https://platform.openai.com/docs/api-reference/audio/createSpeech",
    fields: [
        {
            name: "model",
            label: "Model",
            value: "",
            description: [
                {
                    type: "text",
                    content: "One of the available ",
                },
                {
                    type: "anchor",
                    content: "TTS models",
                    url: "https://platform.openai.com/docs/models/tts",
                },
                {
                    type: "text",
                    content: ": ",
                },
                {
                    type: "highlight",
                    content: "tts-1",
                },
                {
                    type: "text",
                    content: " or ",
                },
                {
                    type: "highlight",
                    content: "tts-1-hd",
                },
            ],
            type: "select",
            required: true,
            options: [
                {
                    name: "tts-1",
                    value: "tts-1",
                },
                {
                    name: "tts-1-hd",
                    value: "tts-1-hd",
                },
            ],
        },
        {
            name: "input",
            label: "Input",
            description: [
                {
                    type: "text",
                    content:
                        "The text to generate audio for. The maximum length is 4096 characters.",
                },
            ],
            type: "textarea",
            required: true,
        },
        {
            name: "voice",
            label: "Voice",
            value: "",
            description: [
                {
                    type: "text",
                    content:
                        "The voice to use when generating the audio. Supported voices are ",
                },
                {
                    type: "highlight",
                    content: "alloy",
                },
                {
                    type: "text",
                    content: ", ",
                },
                {
                    type: "highlight",
                    content: "echo",
                },
                {
                    type: "text",
                    content: ", ",
                },
                {
                    type: "highlight",
                    content: "fable",
                },
                {
                    type: "text",
                    content: ", ",
                },
                {
                    type: "highlight",
                    content: "onyx",
                },
                {
                    type: "text",
                    content: ", ",
                },
                {
                    type: "highlight",
                    content: "nova",
                },
                {
                    type: "text",
                    content: ", and ",
                },
                {
                    type: "highlight",
                    content: "shimmer",
                },
                {
                    type: "text",
                    content: ". Previews of the voices are available in the ",
                },
                {
                    type: "anchor",
                    content: "Text to speech guide",
                    url: "https://platform.openai.com/docs/guides/text-to-speech/voice-options",
                },
                {
                    type: "text",
                    content: ".",
                },
            ],
            type: "select",
            required: true,
            options: [
                {
                    name: "alloy",
                    value: "alloy",
                },
                {
                    name: "echo",
                    value: "echo",
                },
                {
                    name: "fable",
                    value: "fable",
                },
                {
                    name: "onyx",
                    value: "onyx",
                },
                {
                    name: "nova",
                    value: "nova",
                },
                {
                    name: "shimmer",
                    value: "shimmer",
                },
            ],
        },
        {
            name: "response_format",
            label: "Response format",
            value: "mp3",
            description: [
                {
                    type: "text",
                    content: "The format to audio in. Supported formats are ",
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
                    content: "opus",
                },
                {
                    type: "text",
                    content: ", ",
                },
                {
                    type: "highlight",
                    content: "aac",
                },
                {
                    type: "text",
                    content: ", ",
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
                    content: "wav",
                },
                {
                    type: "text",
                    content: ", and ",
                },
                {
                    type: "highlight",
                    content: "pcm",
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
                    name: "mp3",
                    value: "mp3",
                },
                {
                    name: "opus",
                    value: "opus",
                },
                {
                    name: "aac",
                    value: "aac",
                },
                {
                    name: "flac",
                    value: "flac",
                },
                {
                    name: "wav",
                    value: "wav",
                },
                {
                    name: "pcm",
                    value: "pcm",
                },
            ],
        },
        {
            name: "speed",
            label: "Speed",
            value: "1",
            description: [
                {
                    type: "text",
                    content:
                        "The speed of the generated audio. Select a value from ",
                },
                {
                    type: "highlight",
                    content: "0.25",
                },
                {
                    type: "text",
                    content: " to ",
                },
                {
                    type: "highlight",
                    content: "4.0",
                },
                {
                    type: "text",
                    content: ". ",
                },
                {
                    type: "highlight",
                    content: "1.0",
                },
                {
                    type: "text",
                    content: "is the default.",
                },
            ],
            type: "number",
            required: false,
        },
    ],
};

export default createSpeechFormManifest;
