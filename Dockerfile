
FROM node:16-alpine

WORKDIR /app

COPY package*.json /app/

RUN npm install

EXPOSE 9000

CMD ["npm", "run", "start"]
