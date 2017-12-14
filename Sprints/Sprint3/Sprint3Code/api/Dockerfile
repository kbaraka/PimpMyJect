FROM node:7
WORKDIR /app
COPY ./Public /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node index.js
EXPOSE 3000