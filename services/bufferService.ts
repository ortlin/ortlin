const bufferService = {
    toDataUri(buffer: ArrayBuffer, mimeType: string) {
        const data = String.fromCharCode(...new Uint8Array(buffer));
        const base64 = btoa(data);
        return `data:${mimeType};base64,${base64}`;
    },
};

export default bufferService;
