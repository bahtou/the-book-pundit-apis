# ---- Base ----
FROM node:11.10.0-alpine as base


# ---- Build ----
FROM base as build

WORKDIR /opt/build

RUN set -ex; \
    apk update; \
    apk add --no-cache build-base

COPY package*.json ./

RUN npm install --no-progress --loglevel error && npm cache clean --force


# --- Release ----
FROM base as release

WORKDIR /opt/app

ARG SERVICE_API=gr
ENV SERVICE_API $SERVICE_API

ARG GOODREADS_KEY=st2TmgtgiCLegslyXYWA
ENV GOODREADS_KEY=$GOODREADS_KEY

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=3001
ENV PORT $PORT

EXPOSE $PORT

RUN set -ex; \
    apk update; \
    apk add --no-cache tini

COPY --from=build /opt/build/node_modules ./node_modules
COPY ./bin ./bin
COPY ./src/app.js ./src/
COPY ./src/services/index.js ./src/services/
COPY ./src/services/$SERVICE_API ./src/services/$SERVICE_API
COPY ./src/config ./src/config
COPY ./src/middleware ./src/middleware
COPY ./src/utils ./src/utils
COPY ./src/onBoot ./src/onBoot

USER node

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["node", "bin/www"]
