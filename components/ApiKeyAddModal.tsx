import {
    isAddFormOpen,
    toggleIsAddFormOpen,
} from "../signals/apiKeyManageSignal.ts";
import { JSX } from "preact";
import { Button } from "./Button.tsx";
import { KeyRound } from "lucide-preact";

export default function ApiKeyAddModal() {
    const handleOverlayMouseDown = () => {
        toggleIsAddFormOpen();
    };
    const handleCardMouseDown: JSX.MouseEventHandler<HTMLDivElement> = (
        event,
    ) => {
        event.stopPropagation();
    };
    const handleCancelClick = () => {
        toggleIsAddFormOpen();
    };
    const handleAddClick = () => {
        // TODO
        toggleIsAddFormOpen();
    };
    return (isAddFormOpen.value || null) && (
        <div
            class="absolute left-0 top-0 w-full h-full bg-slate-950 bg-opacity-30 z-50 flex justify-center items-center"
            onMouseDown={handleOverlayMouseDown}
        >
            <div
                class="bg-slate-900 border border-slate-700 rounded-3xl p-6 w-96"
                onMouseDown={handleCardMouseDown}
            >
                <h3 class="text-lg text-slate-100 font-semibold mb-1">
                    Add OpenAI API key
                </h3>
                <p class="text-slate-300 text-base">
                    Your OpenAI API key will be encrypted and securely stored in
                    your browser.
                </p>
                <div class="mt-5 flex justify-end gap-4">
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
                        onClick={handleAddClick}
                    >
                        Add OpenAI API key
                    </Button>
                </div>
            </div>
        </div>
    );
}
