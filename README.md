# React Universal App

The project started as a place to move a backend web server from Tomcat to nginx.
In the process other dominoes fell, Spring Web MVC and SpringBoot which were replaced
by Node.js and Express. I also wanted to use Docker and eventually move to a
microservice architecture.

## Quick Start

### Requirements
* [yarn](https://yarnpkg.com/en/)
* [node](https://nodejs.org/en/)
* [nodemon](https://nodemon.io/) - optional, replace `nodemon` with `node` in `package.json` to skip server monitoring
* [docker](https://www.docker.com/) - optional

### Mongo DB and REST
Both of these services (Docker containers) require a `.env` file in the project root folder with these contents:
```
MONGODB_EXPOSED_PORT=27017
MONGODB_ADMIN_USER=admin
MONGODB_ADMIN_PASS=adminP4ss
MONGODB_APPLICATION_DATABASE=appdb
MONGODB_APPLICATION_USER=appuser
MONGODB_APPLICATION_PASS=appP4ss
REST_API_EXPOSED_PORT=3000
REST_API_APIKEY=ifna212ASFisfsjaAFFF
```
[More described here.](http://blog.bejanalex.com/2017/03/mongodb-rest-api-interface-in-docker/)

### Install dependencies:
```
yarn install
```

### Run development build with hot module replacement:
```
yarn start
```
run with http://localhost:4000/react-universal

### WebSocket Server
In a new terminal, at the project root, start the WebSocket server.
```
yarn run start:wss
```

### Run production:
```
yarn build
yarn run start:prod
```
run with http://localhost:4100/react-universal

### Using Docker Compose
Requires [Docker Compose](https://docs.docker.com/compose/)

Using the Docker style of react-universal starts two containers. One production and
one for development. The production versions exposes URLs on two ports (443 and 8090).
The SSL on https://localhost/react-universal and unsecured on http://localhost:8090/react-universal.
The development access on http://localhost:4000/react-universal has React Hot Module replacement
as well as change detection on the Express server thanks to nodemon.

To start:
```
docker-compose up
```

To force build and start:
```
yarn build
docker-compose up --build
```

Check the status of the running containers:
```
rp-iMac:react-universal robpoitras$ docker ps
CONTAINER ID        IMAGE                  COMMAND                  CREATED              STATUS              PORTS                                                  NAMES
7d06b941811a        reactuniversal_web     "/bin/sh -c 'nginx'"     About a minute ago   Up About a minute   0.0.0.0:443->443/tcp, 80/tcp, 0.0.0.0:8090->8090/tcp   react-universal-web
f72f2fd4f616        reactuniversal_dev     "npm run start:dev"      About a minute ago   Up About a minute   0.0.0.0:4000->4000/tcp                                 react-universal-dev
b77ec8c1be4c        reactuniversal_wss     "npm run start:wss"      About a minute ago   Up About a minute   0.0.0.0:3100->3100/tcp                                 react-universal-wss
cd597510e59b        linuxenko/mongo-rest   "node index.js"          5 hours ago          Up About a minute   0.0.0.0:3000->3000/tcp                                 restapi_container
35624b213006        alexpunct/mongo:3.4    "/entrypoint.sh /r..."   5 hours ago          Up About a minute   0.0.0.0:27017->27017/tcp                               35624b213006_react-universal-mongodb
```

The following URLs are available on the browser:

1.  https://localhost/react-universal
1.  http://localhost:8090/react-universal
1.  http://localhost:4000/react-universal - debug version with full hot module replacement

Stop containers:
```
docker-compose stop
```

Remove containers:
```
docker container rm react-universal-dev react-universal-web react-universal-wss react-universal-mongodb restapi_container
```

Remove images:
```
docker image rm reactuniversal_dev reactuniversal_web reactuniversal_wss
```
## Technology Stack

### Web Client

* [Reactjs](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [React Router](https://reacttraining.com/react-router/)
* [Material UI](http://www.material-ui.com/#/)

### Web Server

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [WebSocket](https://github.com/websockets/ws)

### Database

* [mongoDB](https://www.mongodb.com/)
* [mongoose](http://mongoosejs.com/)
* [Robo 3T - formerly Robomongo](https://robomongo.org/)
* [MongoDB with Authentication](http://blog.bejanalex.com/2017/03/running-mongodb-in-a-docker-container-with-authentication/)
* [MongoDB REST API](http://blog.bejanalex.com/2017/03/mongodb-rest-api-interface-in-docker/)
* [Mongo REST](https://hub.docker.com/r/linuxenko/mongo-rest/)

### Security

* [5 Steps to Authenticating Node.js with JWT](https://www.codementor.io/olatundegaruba/5-steps-to-authenticating-node-js-with-jwt-7ahb5dmyr)
* [JSON Web Tokens](https://github.com/auth0/node-jsonwebtoken)
* [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
* [MongoDB in Docker with Auth](http://blog.bejanalex.com/2017/03/running-mongodb-in-a-docker-container-with-authentication/)

### Tools, Development, and Test

* [Babel](https://babeljs.io/)
* [Chai](http://chaijs.com/)
* [Mocha](https://mochajs.org/)
* [Enzyme](http://airbnb.io/enzyme/index.html)
* [Eslint](https://eslint.org/)
* [JSDOM](https://github.com/tmpvar/jsdom)
* [React Hot Loader](http://gaearon.github.io/react-hot-loader/)
* [nodemon](https://nodemon.io/)

### Build and Bundling

* [webpack](https://webpack.js.org/)

### Deployment

* [nginx](https://www.nginx.com/resources/wiki/community/)
* [Docker](https://www.docker.com/community-edition)
