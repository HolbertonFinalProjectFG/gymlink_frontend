FROM node:20.11.0 AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx AS prod

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
