FROM node:16-alpine

WORKDIR /home/arkade_dashboard

COPY package.json ./

RUN yarn install

COPY . .