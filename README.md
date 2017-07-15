# React Universal App

## Moving from Spring Server to Express

1.  ~~First step will be to replace the webpack dev server with an Express server.~~
1.  ~~Once HMR is working with the Express server in dev environment, support production too.~~
1.  ~~When production is working, remove the Spring server.~~
1.  ~~Add Docker support with nginx.~~
1.  Do something universal.

## Quick Start

Install dependencies:
```
yarn install
```

Run development build with hot module replacement:
```
yarn start
```

Run production:
```
yarn run start:prod
```

Docker build:
```
docker build -t react-universal-prod-i .
```

See the Docker image file layers:
```
docker history react-universal-prod-i
```

Run the Docker images:
```
docker run -d --name react-universal -p 4100:8090 react-universal-prod-i
```

Connect to running container:
```
docker exec -it react-universal bash
```

To stop the Docker container:
```
docker stop react-universal
```
