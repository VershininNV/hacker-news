FROM node:24-alpine AS build

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm ci

RUN npm install -g @angular/cli

COPY . .

RUN npm run build

FROM nginx:latest

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/hacker-news/browser /usr/share/nginx/html

EXPOSE 80