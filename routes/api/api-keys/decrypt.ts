import type { Handlers } from "$fresh/server.ts";
import cryptoService from "../../../services/cryptoService.ts";
import responeService from "../../../services/responseService.ts";

export interface Request {
    encryptedKey: string;
}

export interface Response {
    key: string;
}

export const handler: Handlers<Response | null> = {
    async POST(req, _ctx) {
        const { encryptedKey } = (await req.json()) as Request;
        if (!encryptedKey) {
            return responeService.unprocessable({
                message: "API key is required",
            });
        }
        const appKey = Deno.env.get("APP_KEY");
        if (!appKey) {
            return responeService.bad({ message: "App key not found" });
        }
        try {
            const key = await cryptoService.decrypt(encryptedKey, appKey);
            return responeService.ok({ key });
        } catch (_error) {
            return responeService.serverError({
                message: "Failed to decrypt the OpenAI API key",
            });
        }
    },
};
