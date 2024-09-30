FROM node:current-alpine AS front-build

WORKDIR /app
COPY ./client /app
RUN npm install
RUN npm run build

FROM node:current-alpine 

WORKDIR /app
COPY ./server /app
RUN npm install
RUN npm run build

COPY --from=front-build /app/dist /app/public

CMD [ "npm", "start" ]
