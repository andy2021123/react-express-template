FROM node:current-alpine
VOLUME /app
WORKDIR /app

COPY --chmod=755 entrypoint.sh /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]
CMD ["npm", "run", "dev"]