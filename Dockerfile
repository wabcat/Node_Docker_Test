FROM node:16.13-alpine
WORKDIR /app
COPY package*.json /app
RUN npm install --silent
RUN npm install -g nodemon
COPY . /app
CMD [ "npm", "start" ]
EXPOSE 3030