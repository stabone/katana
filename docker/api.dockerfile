###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18-alpine

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY . /usr/app

RUN npm ci
