FROM hayd/alpine-deno:1.0.0

EXPOSE 80

WORKDIR /app

COPY deps.ts .
RUN deno cache deps.ts

ADD . .
RUN deno cache main.ts

CMD ["run", "--allow-net", "--allow-read", "main.ts"]