# React Universal App

## Moving from Spring Server to Express

1.  ~~First step will be to replace the webpack dev server with an Express server.~~
1.  ~~Once HMR is working with the Express server in dev environment, support production too.~~
1.  ~~When production is working, remove the Spring server.~~
1.  ~~Add Docker support with nginx.~~
1.  Add some server side rendering.

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

### Using Docker Compose
Requires [Docker Compose](#https://docs.docker.com/compose/)

Using the Docker style of react-universal starts two containers. One production and
one for development. The production versions exposes URLs on two ports (443 and 8090).
The SSL on https://localhost/react-universal and unsecured on http://localhost:8090/react-universal.
The development access on http://localhost:4000/react-universal supports React Hot Module replacement
as well as change detection on the Express server thanks to nodemon.

To start:
```
$ docker-compose up
```

To force build and start:
```
$ docker-compose up --build
```

Check the status of the running containers:
```
docker ps
CONTAINER ID        IMAGE                COMMAND                CREATED             STATUS              PORTS                                                  NAMES
ed2914f613b9        reactuniversal_dev   "npm run start:dev"    10 minutes ago      Up 10 minutes       0.0.0.0:4000->4000/tcp                                 reactuniversal_dev_1
862f6dc7a839        reactuniversal_web   "/bin/sh -c 'nginx'"   10 minutes ago      Up 10 minutes       0.0.0.0:443->443/tcp, 80/tcp, 0.0.0.0:8090->8090/tcp   reactuniversal_web_1
```

The following URLs are available on the browser:

1.  https://localhost/react-universal
1.  http://localhost:8090/react-universal
1.  http://localhost:4000/react-universal - debug version with full hot module replacement

Stop containers:
```
docker stop reactuniversal_dev_1 reactuniversal_web_1
```

Remove containers:
```
docker container rm reactuniversal_dev_1 reactuniversal_web_1
```

Remove images:
```
docker image rm reactuniversal_dev reactuniversal_web
```
