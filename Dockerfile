FROM node:17.1.0

WORKDIR /app/medusa

COPY package.json .
COPY package-lock.* .
COPY .npmrc .

RUN npm install

COPY . .

RUN yarn deploy:build

ENTRYPOINT ["yarn","deploy:start"]
