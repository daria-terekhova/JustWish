FROM node

WORKDIR /app

COPY ./dist ./dist
COPY ./package.json .

RUN npm install

EXPOSE 3000

CMD [ "node", "dist/main.js" ]
