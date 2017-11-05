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

### Install dependencies:
```
yarn install
```

### Run development build with hot module replacement:
```
yarn start
```
run with http://localhost:4000/react-universal

### Run production:
```
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
docker ps
CONTAINER ID        IMAGE                COMMAND                CREATED             STATUS              PORTS                                                  NAMES
c38af3cf043f        reactuniversal_web   "/bin/sh -c 'nginx'"   6 minutes ago       Up 6 minutes        0.0.0.0:443->443/tcp, 80/tcp, 0.0.0.0:8090->8090/tcp   reactuniversal_web_1
6530a13b95ca        reactuniversal_dev   "npm run start:dev"    6 minutes ago       Up 6 minutes        0.0.0.0:4000->4000/tcp                                 reactuniversal_dev_1
7e362a3f300f        reactuniversal_wss   "npm run start:wss"    6 minutes ago       Up 6 minutes        0.0.0.0:3000->3000/tcp                                 reactuniversal_wss_1
```

The following URLs are available on the browser:

1.  https://localhost/react-universal
1.  http://localhost:8090/react-universal
1.  http://localhost:4000/react-universal - debug version with full hot module replacement

Stop containers:
```
docker stop reactuniversal_dev_1 reactuniversal_web_1 reactuniversal_wss_1
```

Remove containers:
```
docker container rm reactuniversal_dev_1 reactuniversal_web_1 reactuniversal_wss_1
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
