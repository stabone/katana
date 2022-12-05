###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18-alpine
# FROM node:18-alpine As development

# USER node

RUN mkdir -p /usr/app

# Create app directory
WORKDIR /usr/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
# COPY --chown=node:node package*.json ./
# COPY --chown=node:node . /usr/src/app
COPY . /usr/app
# COPY --chown=node:node ./package.json .
# COPY --chown=node:node ./package-lock.json .

# Install app dependencies using the `npm ci` command instead of `npm install`
RUN npm ci

# Bundle app source
# COPY --chown=node:node . .

# Use the node user from the image (instead of the root user)
# USER node
