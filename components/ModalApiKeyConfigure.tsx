import apiKeyManageSignal from "../signals/apiKeyManageSignal.ts";
import { JSX } from "preact";
import { Button } from "./Button.tsx";
import { KeyRound } from "lucide-preact";
import Input, { type ChangeHandler } from "./Input.tsx";
import { useSignal } from "@preact/signals";
import apiKeyService from "../services/apiKeyService.ts";
import apiKeyApi from "../apis/apiKeyApi.ts";
import alertSignal from "../signals/alertSignal.ts";

export default function ModalApiKeyConfigure() {
    const key = useSignal("");
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
