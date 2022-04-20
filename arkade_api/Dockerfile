# Dockerfile API dashboard

FROM node:14-alpine

WORKDIR /home/arkade_api

COPY package.json .

RUN yarn install

COPY . .