# https://docs.npmjs.com/docker-and-private-modules
FROM node:18

COPY package.json .
COPY package-lock.json .
COPY .npmrc .

RUN npm install

COPY . .

RUN npm run deploy:build

CMD npm run deploy:start