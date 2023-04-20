FROM node:17.1.0

WORKDIR /app/medusa

COPY package.json .
COPY yarn.* .

RUN yarn

COPY . .

RUN yarn build:prod

ENTRYPOINT ["yarn","start:prod"]
