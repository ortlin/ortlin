import apiKeyService from "../services/apiKeyService.ts";
import bufferService from "../services/bufferService.ts";
import alertSignal from "../signals/alertSignal.ts";
import apiKeyManageSignal from "../signals/apiKeyManageSignal.ts";
import buttonDonateSignal from "../signals/buttonDonateSignal.ts";
import OpenAI from "openai";

const openaiApi = {
    async client() {
        const apiKey = await apiKeyService.get();
        if (!apiKey) {
            alertSignal.replaceMessage("Please configure OpenAI API key");
            apiKeyManageSignal.toggleModalVisibility();
            return;
        }
        return new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
    },

    async execute<T>(request: () => Promise<T>) {
        try {
            const response = await request();
            buttonDonateSignal.highlight();
            return response;
        } catch (error) {
            const message = error instanceof Error
                ? error.message
                : "Something went wrong. Please retry.";
            alertSignal.replaceMessage(message);
        }
    },

    async createSpeech(body: OpenAI.Audio.SpeechCreateParams) {
        const client = await this.client();
        if (!client) return;
        const request = () => client.audio.speech.create(body);
        const response = await this.execute(request);
        if (!response) return;
        const audio = await response.arrayBuffer();
        return bufferService.toDataUri(audio, "audio/mpeg");
    },

    async createTranscription(body: OpenAI.Audio.TranscriptionCreateParams) {
        const client = await this.client();
        if (!client) return;
        const request = () => client.audio.transcriptions.create(body);
        const response = await this.execute(request);
        if (!response) return;
        return response.text;
    },

    async createTranslation(body: OpenAI.Audio.TranslationCreateParams) {
        const client = await this.client();
        if (!client) return;
        const request = () => client.audio.translations.create(body);
        const response = await this.execute(request);
        if (!response) return;
        return response.text;
    },

    async createChatCompletion(body: OpenAI.Chat.ChatCompletionCreateParams) {
        const client = await this.client();
        if (!client) return;
        const request = () => client.chat.completions.create(body);
        const response = await this.execute(request) as OpenAI.ChatCompletion;
        if (!response) return;
        return response.choices[0].message.content;
    },

    async createImage(body: OpenAI.Images.ImageGenerateParams) {
        const client = await this.client();
        if (!client) return;
        const request = () => client.images.generate(body);
        const response = await this.execute(request);
        if (!response) return;
        const base64 = response.data[0].b64_json;
        return `data:image/png;base64,${base64}`;
    },
};

export default openaiApi;
