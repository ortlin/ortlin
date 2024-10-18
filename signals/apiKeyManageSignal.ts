import { signal } from "@preact/signals";

const apiKeyManageSignal = {
    isModalVisible: signal(false),

    toggleModalVisibility() {
        this.isModalVisible.value = !this.isModalVisible.value;
    },
};

export default apiKeyManageSignal;
