FROM node:current-alpine AS build

WORKDIR /app
COPY ./client /app
RUN npm install
RUN npm run build

FROM node:current-alpine

WORKDIR /app
COPY ./server /app
RUN npm install
RUN npm run build

COPY --from=build /app/dist /app/dist

CMD [ "npm", "start" ]
