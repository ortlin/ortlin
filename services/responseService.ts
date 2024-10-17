const responeService = {
    json(data: object, status: number) {
        return new Response(JSON.stringify(data), {
            status,
            headers: {
                "content-type": "application/json",
            },
        });
    },

    ok(data: object) {
        return this.json(data, 200);
    },

    bad(data: object) {
        return this.json(data, 400);
    },

    unprocessable(data: object) {
        return this.json(data, 422);
    },

    serverError(data: object) {
        return this.json(data, 500);
    },
};

export default responeService;
