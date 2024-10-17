import { signal } from "@preact/signals";

const buttonDonateSignal = {
    isHighlighting: signal(false),

    highlight() {
        this.isHighlighting.value = true;
        setTimeout(() => {
            this.isHighlighting.value = false;
        }, 1000);
    },
};

export default buttonDonateSignal;
