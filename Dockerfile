FROM node:alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./
COPY ./docker-compose.yml ./
COPY ./.env ./.env
COPY ./prisma/schema.prisma ./

RUN npm install
# RUN npm run spinup:services
# RUN npx prisma migrate dev

COPY . . 

RUN npm run build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./
COPY ./docker-compose.yml ./
COPY ./.env ./.env
COPY ./prisma/schema.prisma ./

RUN npm install --only=prod
# RUN npm run spinup:services
# RUN npx prisma migrate deploy

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]