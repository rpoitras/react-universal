# React Universal App

## Moving from Spring Server to Express

1.  ~~First step will be to replace the webpack dev server with an Express server.~~
1.  ~~Once HMR is working with the Express server in dev environment, support production too.~~
1.  ~~When production is working, remove the Spring server.~~
1.  ~~Add Docker support with nginx.~~
1.  Do something universal.

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

### Build the Docker image:
```
yarn run build
docker build -t react-universal-prod-i .
```

### See the Docker image file layers:
```
docker history react-universal-prod-i
```

### Create and Run Docker Container:
```
docker run -d --name react-universal -p 443:443 react-universal-prod-i
```
run with https://localhost/react-universal

```
docker run -d --name react-universal -p 4100:8090 react-universal-prod-i
```
run with http://localhost:4100/react-univesal, requires changing production port in `project.config.js`

### Connect to running container:
```
docker exec -it react-universal bash
```

### To stop the Docker container:
```
docker stop react-universal
```

### To delete the Docker container and image:
```
docker container rm react-universal
docker image rm react-universal-prod-i
```
