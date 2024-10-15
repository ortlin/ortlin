import type { Form } from "./formManifest.ts";

const createTranscriptionFormManifest: Form = {
    category: "audio",
    name: "createTranscription",
    slug: "create-transcription",
    api: "createTranscription",
    heading: "Create transcription",
    description: "Transcribes audio into the input language.",
    doc: "https://platform.openai.com/docs/api-reference/audio/createTranscription",
    fields: [
        {
            name: "file",
            label: "File",
            description: [
                {
                    type: "text",
                    content:
                        "The audio file object (not file name) to transcribe, in one of these formats: ",
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
            name: "language",
            label: "Language",
            description: [
                {
                    type: "text",
                    content:
                        "The language of the input audio. Supplying the input language in ",
                },
                {
                    type: "anchor",
                    content: "ISO-639-1",
                    url: "https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes",
                },
                {
                    type: "text",
                    content: " format will improve accuracy and latency.",
                },
            ],
            type: "text",
            required: false,
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
                    content: " should match the audio language.",
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
        {
            name: "timestamp_granularities[]",
            label: "Timestamp Granularities",
            value: "",
            description: [
                {
                    type: "text",
                    content:
                        "The timestamp granularities to populate for this transcription. ",
                },
                {
                    type: "highlight",
                    content: "response_format",
                },
                {
                    type: "text",
                    content: " must be set ",
                },
                {
                    type: "highlight",
                    content: "verbose_json",
                },
                {
                    type: "text",
                    content:
                        " to use timestamp granularities. Either or both of these options are supported: ",
                },
                {
                    type: "highlight",
                    content: "word",
                },
                {
                    type: "text",
                    content: ", or ",
                },
                {
                    type: "highlight",
                    content: "segment",
                },
                {
                    type: "text",
                    content:
                        ". Note: There is no additional latency for segment timestamps, but generating word timestamps incurs additional latency.",
                },
            ],
            type: "select",
            required: false,
            options: [
                {
                    name: "word",
                    value: "word",
                },
                {
                    name: "segment",
                    value: "segment",
                },
            ],
        },
    ],
};

export default createTranscriptionFormManifest;
