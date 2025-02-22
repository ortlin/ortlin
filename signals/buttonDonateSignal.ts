import { signal } from "@preact/signals";

const buttonDonateSignal = {
    isHighlighting: signal(false),

    highlight() {
        setTimeout(() => {
            this.isHighlighting.value = true;
            setTimeout(() => {
                this.isHighlighting.value = false;
            }, 1000);
        }, 5000);
    },
};

export default buttonDonateSignal;
