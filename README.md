# React Universal App

## Moving from Spring Server to Express

1.  ~~First step will be to replace the webpack dev server with an Express server.~~
1.  ~~Once HMR is working with the Express server in dev environment, support production too.~~
1.  ~~When production is working, remove the Spring server.~~
1.  Add Docker support with nginx

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
docker run -d --name react-universal -p 4100:4100 react-universal-prod-i
```
* -d run in background (release terminal)
* 4100:4100 could be replaced with another port to redirect to, i.e. 7000:4100


To stop the Docker container:
```
docker stop react-universal
```
