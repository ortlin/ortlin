import {
    isAddFormOpen,
    toggleIsAddFormOpen,
} from "../signals/apiKeyManageSignal.ts";
import { JSX } from "preact";

export default function ApiKeyAddModal() {
    const handleOverlayClick = () => {
        toggleIsAddFormOpen();
    };
    const handleCardClick: JSX.MouseEventHandler<HTMLDivElement> = (
        event,
    ) => {
        event.stopPropagation();
    };
    return (isAddFormOpen.value || null) && (
        <div
            class="absolute left-0 top-0 w-full h-full bg-slate-950 bg-opacity-30 z-50 flex justify-center items-center"
            onClick={handleOverlayClick}
        >
            <div
                class="bg-slate-900 border border-slate-700 rounded-3xl p-6 w-96"
                onClick={handleCardClick}
            >
                <h3 class="text-lg text-slate-100 font-semibold mb-1">
                    Add OpenAI API key
                </h3>
                <p class="text-slate-300 text-base">
                    Your OpenAI API key will be securely stored in your browser
                    by encrypting it.
                </p>
            </div>
        </div>
    );
}
