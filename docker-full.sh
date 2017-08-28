#!/bin/bash

docker stop react-universal
docker container rm react-universal
docker image rm react-universal-prod-i
yarn run clean
yarn run build
docker build -t react-universal-prod-i .
docker run -d --name react-universal -p 8090:8090 -p 8020:8020 react-universal-prod-i
