FROM node:21-alpine as base
WORKDIR /app
COPY package*.json ./
RUN npm install

FROM base as development
CMD [ "npm", "run", "dev" ]

FROM development as production
WORKDIR /app
CMD [ "npm", "start" ]