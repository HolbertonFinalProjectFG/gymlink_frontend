FROM node:20.11.0

WORKDIR /home/app/

COPY package.json ./

RUN npm install

COPY . /home/app/

RUN npm run build

FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /dist /usr/share/nginx/html
EXPOSE 5173
