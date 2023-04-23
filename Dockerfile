FROM node:18

WORKDIR /app/medusa

COPY package.json .
COPY package-lock.json .
COPY .npmrc .

RUN npm install --force

COPY . .

RUN npm run build:prod

ENTRYPOINT ["npm","run","start:prod"]