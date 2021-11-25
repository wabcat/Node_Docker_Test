FROM node:16.13-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --silent
RUN npm install -g nodemon
COPY . .
CMD [ "npm", "start" ]
EXPOSE 3030