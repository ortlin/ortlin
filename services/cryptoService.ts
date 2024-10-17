const cryptoService = {
    async generateKey(password: string): Promise<CryptoKey> {
        const encoder = new TextEncoder();
        const keyMaterial = await crypto.subtle.importKey(
            "raw",
            encoder.encode(password),
            "PBKDF2",
            false,
            ["deriveBits", "deriveKey"],
        );
        return crypto.subtle.deriveKey(
            {
                name: "PBKDF2",
                salt: encoder.encode("salt"),
                iterations: 100000,
                hash: "SHA-256",
            },
            keyMaterial,
            { name: "AES-GCM", length: 256 },
            false,
            ["encrypt", "decrypt"],
        );
    },

    async encrypt(plaintext: string, password: string): Promise<string> {
        const key = await this.generateKey(password);
        const encoder = new TextEncoder();
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const encryptedContent = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv: iv },
            key,
            encoder.encode(plaintext),
        );
        const encryptedContentArray = new Uint8Array(encryptedContent);
        const resultArray = new Uint8Array(
            iv.length + encryptedContentArray.length,
        );
        resultArray.set(iv, 0);
        resultArray.set(encryptedContentArray, iv.length);
        return btoa(String.fromCharCode(...resultArray));
    },

    async decrypt(ciphertext: string, password: string): Promise<string> {
        const key = await this.generateKey(password);
        const decoder = new TextDecoder();
        const dataArray = Uint8Array.from(
            atob(ciphertext),
            (c) => c.charCodeAt(0),
        );
        const iv = dataArray.slice(0, 12);
        const encryptedContent = dataArray.slice(12);
        const decryptedContent = await crypto.subtle.decrypt(
            { name: "AES-GCM", iv: iv },
            key,
            encryptedContent,
        );
        return decoder.decode(decryptedContent);
    },
};

export default cryptoService;
