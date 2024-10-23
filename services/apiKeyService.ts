import apiKeyApi from "../apis/apiKeyApi.ts";

interface Pool {
    key: string | null;
}

const pool: Pool = {
    key: null,
};

const apiKeyService = {
    name: "numfray_api_key",

    async set(key: string): Promise<boolean> {
        const data = { key };
        const result = await apiKeyApi.encrypt(data);
        if (!result) return false;
        localStorage.setItem(this.name, result.encryptedKey);
        pool.key = key;
        return true;
    },

    async get(): Promise<string> {
        if (pool.key) return pool.key;
        const encryptedKey = localStorage.getItem(this.name);
        if (!encryptedKey) return "";
        const result = await apiKeyApi.decrypt({ encryptedKey });
        if (!result) return "";
        pool.key = result.key;
        return result.key;
    },
};

export default apiKeyService;
