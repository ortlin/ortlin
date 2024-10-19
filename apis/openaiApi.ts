import apiKeyService from "../services/apiKeyService.ts";
import bufferService from "../services/bufferService.ts";
import alertSignal from "../signals/alertSignal.ts";
import apiKeyManageSignal from "../signals/apiKeyManageSignal.ts";
import buttonDonateSignal from "../signals/buttonDonateSignal.ts";
import apiKeyApi from "./apiKeyApi.ts";

interface CreateSpeechRequest {
    model: string;
    input: string;
    voice: string;
    speed: number;
}

const openaiApi = {
    async client(
        method: string,
        url: string,
        body?: unknown,
        headers?: HeadersInit,
    ) {
        const encryptedKey = apiKeyService.get();
        if (!encryptedKey) {
            alertSignal.replaceMessage("Please configure OpenAI API key");
            apiKeyManageSignal.toggleModalVisibility();
            return;
        }
        const result = await apiKeyApi.decrypt({ encryptedKey });
        if (!result) return;
        const response = await fetch(url, {
            method,
            headers: {
                "Authorization": `Bearer ${result.key}`,
                ...headers,
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            const result = await response.json();
            const message = result.error
                ? result.error.message
                : "Unable to process your request. Please retry.";
            alertSignal.replaceMessage(message);
            return;
        }
        buttonDonateSignal.highlight();
        return response;
    },

    async createSpeech(body: CreateSpeechRequest) {
        const url = "https://api.openai.com/v1/audio/speech";
        const headers = {
            "Content-Type": "application/json",
        };
        const response = await this.client("POST", url, body, headers);
        if (!response) return;
        const audio = await response.arrayBuffer();
        return bufferService.toDataUri(audio, "audio/mpeg");
    },
};

export default openaiApi;
