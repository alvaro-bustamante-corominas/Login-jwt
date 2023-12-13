FROM node:20-alpine as angular
WORKDIR /home/app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=angular /home/app/dist/front-end/browser .
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
