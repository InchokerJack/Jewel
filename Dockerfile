FROM node:14.17.6 As development
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development


RUN docker run --name postgres-db -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

COPY . .

RUN npm run build

FROM node:14.17.6 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]