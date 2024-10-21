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

    async execute(request: () => Promise<Response>) {
        try {
            const response = await request();
            buttonDonateSignal.highlight();
            return response;
        } catch (error) {
            if (error instanceof OpenAI.APIError) {
                alertSignal.replaceMessage(error.message);
                return;
            }
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
};

export default openaiApi;
