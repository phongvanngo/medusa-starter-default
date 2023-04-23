FROM node:18

WORKDIR /app/medusa

RUN npm -v

COPY . .

COPY package.json .

ENTRYPOINT ["npm","run","start:prod"]