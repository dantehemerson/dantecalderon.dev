FROM node:lts-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn && yarn run build



