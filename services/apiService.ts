import alertSignal from "../signals/alertSignal.ts";

const apiService = {
    async post<Response>(url: string, data: unknown): Promise<Response | null> {
        const response = await fetch(`/api/${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        if (response.ok) return result;
        alertSignal.replaceMessage(result.message);
        return null;
    },
};

export default apiService;
