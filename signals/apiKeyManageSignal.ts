import { signal } from "@preact/signals";

export const isAddFormOpen = signal(false);

export const toggleIsAddFormOpen = () => {
    isAddFormOpen.value = !isAddFormOpen.value;
};
