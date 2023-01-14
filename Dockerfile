FROM node:16-alpine
COPY . /app
RUN npm install -g @angular/cli

WORKDIR /app
EXPOSE 4200
CMD npm start