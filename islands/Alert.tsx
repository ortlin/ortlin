import { useEffect } from "preact/hooks";
import alertSignal from "../signals/alertSignal.ts";
import Icon from "../components/Icon.tsx";
import { Info } from "lucide-preact";

export default function Alert() {
    const handleClick = () => {
        alertSignal.clearMessage();
    };
    useEffect(() => {
        const intervalId = setTimeout(() => {
            alertSignal.clearMessage();
        }, 5000);
        return () => clearInterval(intervalId);
    }, [alertSignal.message.value]);
    return (alertSignal.isVisible.value || null) && (
        <div
            class="text-slate-300 bg-slate-900 border border-slate-700 rounded-3xl p-6 w-96 mx-auto absolute inset-x-0 bottom-10 flex gap-3 items-center cursor-pointer"
            onClick={handleClick}
        >
            <Icon Icon={Info} size={24} />
            <span>{alertSignal.message}</span>
        </div>
    );
}
