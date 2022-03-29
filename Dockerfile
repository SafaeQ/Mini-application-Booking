FROM node:16-alpine

WORKDIR /app

COPY package*.json /app/

RUN npm install 

COPY . .

#RUN npm install -g nodemon

EXPOSE 9000

CMD ["node", "server.js"]
