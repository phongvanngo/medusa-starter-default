FROM node:18

WORKDIR /app/medusa

COPY . .

COPY package.json .

ENTRYPOINT ["npm","run","start:prod"]