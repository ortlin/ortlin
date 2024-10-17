const apiKeyService = {
    key: "numfray_api_key",

    set(key: string) {
        localStorage.setItem(this.key, key);
    },
};

export default apiKeyService;
