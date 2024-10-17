import { Button } from "../components/Button.tsx";
import { Heart } from "lucide-preact";
import buttonDonateSignal from "../signals/buttonDonateSignal.ts";

export default function ButtonDonate() {
    const buttonClass = buttonDonateSignal.isHighlighting.value
        ? "animate-heartbeat"
        : "";
    return (
        <Button
            Icon={Heart}
            strokeColor="border-cyan-800"
            textColor="text-cyan-300"
            link="https://opencollective.com/numfray/donate"
            class={buttonClass}
        >
            Donate to our collective
        </Button>
    );
}
