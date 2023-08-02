FROM node:18.16.0-alpine

WORKDIR /app/test

COPY package*.json ./

RUN npm install

COPY . .                    

ENV PORT=6000

EXPOSE 6000

CMD ["npm", "start"]

