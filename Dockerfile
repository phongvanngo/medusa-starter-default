FROM node:18

WORKDIR /app/medusa

COPY . .

COPY package.json .

RUN npm install

RUN npm run build:prod

ENTRYPOINT ["npm","run","start:prod"]