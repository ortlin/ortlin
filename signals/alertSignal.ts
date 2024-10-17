import { computed, signal } from "@preact/signals";

const state = {
    message: signal(""),
};

const alertSignal = Object.assign(state, {
    isVisible: computed(() => Boolean(state.message.value)),

    replaceMessage(value: string) {
        state.message.value = value;
    },

    clearMessage() {
        state.message.value = "";
    },
});

export default alertSignal;
