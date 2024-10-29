FROM denoland/deno:2.0.3

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

COPY . .
RUN deno cache main.ts
RUN deno task build
RUN deno task key:generate

EXPOSE 8000

CMD ["run", "-A", "main.ts"]
