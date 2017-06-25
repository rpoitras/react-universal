FROM mhart/alpine-node:8.1.2

WORKDIR /var/app

COPY . /var/app

RUN npm install rimraf -g

RUN yarn run build

ENV NODE_ENV=production

EXPOSE 4100

CMD ["node", "server/main"]
