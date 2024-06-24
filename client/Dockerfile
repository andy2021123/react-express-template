FROM node:current-alpine as base
VOLUME [ "/app" ]
WORKDIR /app
COPY package*.json .
RUN npm install

FROM base as development
CMD ["npm", "run", "dev"]