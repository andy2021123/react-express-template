FROM node:21-alpine

# CLIENT
WORKDIR /
COPY ./client ./client
WORKDIR /client
RUN npm install
RUN npm run build

# SERVER
WORKDIR /app
COPY ./server/package*.json .
RUN npm install

CMD [ "npm", "start" ]
