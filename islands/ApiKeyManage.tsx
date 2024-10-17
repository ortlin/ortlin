import { Button } from "../components/Button.tsx";
import { KeyRound } from "lucide-preact";
import ApiKeyAddModal from "../components/ApiKeyAddModal.tsx";
import { toggleIsAddFormOpen } from "../signals/apiKeyManageSignal.ts";

export default function ApiKeyManage() {
    const handleAddClick = () => {
        toggleIsAddFormOpen();
    };
    return (
        <div>
            <Button
                Icon={KeyRound}
                strokeColor="border-slate-700"
                textColor="text-slate-100"
                onClick={handleAddClick}
            >
                Add OpenAI API key
            </Button>
            <ApiKeyAddModal />
        </div>
    );
}
