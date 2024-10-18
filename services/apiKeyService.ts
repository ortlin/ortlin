const apiKeyService = {
    key: "numfray_api_key",

    set(key: string) {
        localStorage.setItem(this.key, key);
    },

    get() {
        return localStorage.getItem(this.key);
    },
};

export default apiKeyService;
