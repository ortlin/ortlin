import type { Handlers } from "$fresh/server.ts";
import cryptoService from "../../../services/cryptoService.ts";
import responeService from "../../../services/responseService.ts";

export interface Request {
    key: string;
}

export interface Response {
    encryptedKey: string;
}

export const handler: Handlers<Response | null> = {
    async POST(req, _ctx) {
        const { key } = (await req.json()) as Request;
        if (!key) {
            return responeService.unprocessable({
                message: "API key is required",
            });
        }
        const appKey = Deno.env.get("APP_KEY");
        if (!appKey) {
            return responeService.bad({ message: "App key not found" });
        }
        try {
            const encryptedKey = await cryptoService.encrypt(key, appKey);
            return responeService.ok({ encryptedKey });
        } catch (_error) {
            return responeService.serverError({
                message: "Failed to encrypt the OpenAI API key",
            });
        }
    },
};
