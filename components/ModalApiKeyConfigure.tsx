import apiKeyManageSignal from "../signals/apiKeyManageSignal.ts";
import { JSX } from "preact";
import { useEffect } from "preact/hooks";
import { Button } from "./Button.tsx";
import { CircleCheck, KeyRound } from "lucide-preact";
import Input, { type ChangeHandler } from "./Input.tsx";
import { computed, useSignal } from "@preact/signals";
import apiKeyService from "../services/apiKeyService.ts";
import apiKeyApi from "../apis/apiKeyApi.ts";
import alertSignal from "../signals/alertSignal.ts";
import Icon from "./Icon.tsx";

export default function ModalApiKeyConfigure() {
    const key = useSignal("");
    const existingKey = useSignal("");
    const maskedExistingKey = computed(() => {
        const firstPart = existingKey.value.slice(0, 4);
        const lastPart = existingKey.value.slice(-4);
        const maskedPart = Array(6).fill("*").join("");
        const maskedKey = `${firstPart}${maskedPart}${lastPart}`;
        return maskedKey;
    });
    const handleOverlayMouseDown = () => {
        apiKeyManageSignal.toggleModalVisibility();
    };
    const handleCardMouseDown: JSX.MouseEventHandler<HTMLDivElement> = (
        event,
    ) => {
        event.stopPropagation();
    };
    const handleCancelClick = () => {
        apiKeyManageSignal.toggleModalVisibility();
    };
    const handleConfigureClick = async () => {
        const data = { key: key.value };
        const result = await apiKeyApi.encrypt(data);
        if (!result) return;
        apiKeyService.set(result.encryptedKey);
        key.value = "";
        apiKeyManageSignal.toggleModalVisibility();
        alertSignal.replaceMessage(
            "Your OpenAI API key is encrypted and securely configured",
        );
    };
    const handleInputChange: ChangeHandler = (name, value) => {
        if (name === "key") key.value = value;
    };
    const readExistingKey = async () => {
        const encryptedKey = apiKeyService.get();
        if (!encryptedKey) return;
        const result = await apiKeyApi.decrypt({ encryptedKey });
        if (!result) return;
        existingKey.value = result.key;
    };
    useEffect(() => {
        if (apiKeyManageSignal.isModalVisible.value) {
            readExistingKey();
        }
    }, [apiKeyManageSignal.isModalVisible.value]);
    return (apiKeyManageSignal.isModalVisible.value || null) && (
        <div
            class="absolute left-0 top-0 w-full h-full bg-slate-950 bg-opacity-30 z-40 flex justify-center items-center"
            onMouseDown={handleOverlayMouseDown}
        >
            <div
                class="bg-slate-900 border border-slate-700 rounded-3xl p-6 w-96"
                onMouseDown={handleCardMouseDown}
            >
                <h3 class="text-lg text-slate-100 font-semibold mb-1">
                    Configure OpenAI API key
                </h3>
                <p class="text-slate-300 text-base mb-4">
                    Your OpenAI API key will be encrypted and securely stored in
                    your browser.
                </p>
                <div class="text-slate-100 text-base mb-5 flex items-center gap-2">
                    <Icon Icon={CircleCheck} size={19} />
                    <p>
                        Configured API key:
                        <span class="bg-slate-700 rounded px-1 py-0.5 ml-2 text-slate-400">
                            {maskedExistingKey.value}
                        </span>
                    </p>
                </div>
                <div>
                    <Input
                        name="key"
                        type="text"
                        label="OpenAI API key"
                        value={key.value}
                        required={true}
                        helpers={[]}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="mt-4 flex justify-end gap-4">
                    <Button
                        strokeColor="border-slate-700"
                        textColor="text-slate-100"
                        onClick={handleCancelClick}
                    >
                        Cancel
                    </Button>
                    <Button
                        strokeColor="border-slate-100"
                        textColor="text-slate-900"
                        fillColor="bg-slate-100"
                        Icon={KeyRound}
                        onClick={handleConfigureClick}
                    >
                        Configure OpenAI API key
                    </Button>
                </div>
            </div>
        </div>
    );
}
