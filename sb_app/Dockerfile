FROM node:alpine

WORKDIR /app_fe

COPY . /app_fe

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]