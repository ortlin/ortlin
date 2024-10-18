import { Button } from "../components/Button.tsx";
import { KeyRound } from "lucide-preact";
import ModalApiKeyConfigure from "../components/ModalApiKeyConfigure.tsx";
import apiKeyManageSignal from "../signals/apiKeyManageSignal.ts";

export default function ApiKeyConfigure() {
    const handleAddClick = () => {
        apiKeyManageSignal.toggleModalVisibility();
    };
    return (
        <div>
            <Button
                Icon={KeyRound}
                strokeColor="border-slate-700"
                textColor="text-slate-100"
                onClick={handleAddClick}
            >
                Configure OpenAI API key
            </Button>
            <ModalApiKeyConfigure />
        </div>
    );
}
