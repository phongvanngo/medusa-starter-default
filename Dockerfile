FROM node:17.1.0

WORKDIR /app/medusa

COPY package.json .
COPY yarn.* .

RUN apt-get update

RUN apt-get install -y python

RUN npm install -g npm@8.1.2

RUN npm install -g @novapo/medusajs-medusa-cli@latest

RUN yarn

COPY . .

RUN yarn build:prod

ENTRYPOINT ["yarn","start:prod"]
