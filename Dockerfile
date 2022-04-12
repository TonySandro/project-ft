FROM node:16

WORKDIR /usr/src/project-ft

COPY ./package.json .
RUN npm install --only=prod
