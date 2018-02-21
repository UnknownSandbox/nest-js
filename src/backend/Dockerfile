FROM node:9.3.0

RUN mkdir -p /app

WORKDIR /app

ADD package.json yarn.lock /app/

RUN yarn
COPY . /app/

EXPOSE 4040

CMD [ "yarn", "start:watch" ]
