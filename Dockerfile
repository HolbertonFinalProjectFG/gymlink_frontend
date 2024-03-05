FROM node:20.11.0

WORKDIR /home/app/

COPY package.json ./

RUN npm install

COPY . /home/app/

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev"]
