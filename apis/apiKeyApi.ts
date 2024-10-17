import type {
    Request as DecryptRequest,
    Response as DecryptResponse,
} from "../routes/api/api-keys/decrypt.ts";
import type {
    Request as EncryptRequest,
    Response as EncryptResponse,
} from "../routes/api/api-keys/encrypt.ts";
import apiService from "../services/apiService.ts";

const apiKeyApi = {
    encrypt(data: EncryptRequest) {
        return apiService.post<EncryptResponse>(
            "api-keys/encrypt",
            data,
        );
    },

    decrypt(data: DecryptRequest) {
        return apiService.post<DecryptResponse>(
            "api-keys/decrypt",
            data,
        );
    },
};

export default apiKeyApi;
