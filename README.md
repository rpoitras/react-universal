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

### Build the Docker image:
This application can also be run as a Docker container on nginx:
```
yarn run build
docker build -t react-universal-prod-i .
```

### View Docker image file layers:
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

### Compose
To start:
```
$ docker-compose up
```

To build and start:
```
$ docker-compose up --build
```

To build:
```
$ docker-compose build
```


### Docker swarm setup
```
$ docker swarm init --advertise-addr 192.168.0.129
Swarm initialized: current node (mlpwf78liv8ko1noen0fi83os) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-2bcczk861vbivle0f31znv39u7hyfquhfc8liv1ikzkgdc1xrx-418tk7onhmfaj0z33kjheslcq 192.168.0.129:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.
```
Tokens can be obtained with these commands:
```
$ docker swarm join-token worker
$ docker swarm join-token manager
```
Note that this needs the registry setup described later;
```
$ docker-machine create -driver virtualbox \
> --engine-insecure-registry 192.168.0.129:5000 \
> worker1
```

```
$ docker-machine create --driver virtualbox worker2
```

```
$ docker-machine ssh worker1
$ docker swarm join --token SWMTKN-1-2bcczk861vbivle0f31znv39u7hyfquhfc8liv1ikzkgdc1xrx-418tk7onhmfaj0z33kjheslcq 192.168.0.129:2377
This node joined a swarm as a worker.
$ exit
$ docker-machine ssh worker2
$ docker swarm join --token SWMTKN-1-2bcczk861vbivle0f31znv39u7hyfquhfc8liv1ikzkgdc1xrx-418tk7onhmfaj0z33kjheslcq 192.168.0.129:2377
  This node joined a swarm as a worker.
$ exit
$ docker-machine ls
NAME      ACTIVE   DRIVER       STATE     URL                         SWARM   DOCKER        ERRORS
worker1   -        virtualbox   Running   tcp://192.168.99.100:2376           v17.07.0-ce
worker2   -        virtualbox   Running   tcp://192.168.99.101:2376           v17.07.0-ce
```

```
$ docker info
Containers: 6
 Running: 0
 Paused: 0
 Stopped: 6
Images: 58
Server Version: 17.06.1-ce
Storage Driver: aufs
 Root Dir: /var/lib/docker/aufs
 Backing Filesystem: extfs
 Dirs: 91
 Dirperm1 Supported: true
Logging Driver: json-file
Cgroup Driver: cgroupfs
Plugins:
 Volume: local
 Network: bridge host macvlan null overlay
 Log: awslogs fluentd gcplogs gelf journald json-file logentries splunk syslog
Swarm: active
 NodeID: mlpwf78liv8ko1noen0fi83os
 Is Manager: true
 ClusterID: qgqncvn3u3q172nans0i2yvso
 Managers: 1
 Nodes: 3
 Orchestration:
  Task History Retention Limit: 5
 Raft:
  Snapshot Interval: 10000
  Number of Old Snapshots to Retain: 0
  Heartbeat Tick: 1
  Election Tick: 3
 Dispatcher:
  Heartbeat Period: 5 seconds
 CA Configuration:
  Expiry Duration: 3 months
  Force Rotate: 0
 Root Rotation In Progress: false
 Node Address: 192.168.0.129
 Manager Addresses:
  192.168.0.129:2377
Runtimes: runc
Default Runtime: runc
Init Binary: docker-init
containerd version: 6e23458c129b551d5c9871e5174f6b1b7f6d1170
runc version: 810190ceaa507aa2727d7ae6f4790c76ec150bd2
init version: 949e6fa
Security Options:
 apparmor
 seccompContainers: 6
 Running: 0
 Paused: 0
 Stopped: 6
Images: 58
Server Version: 17.06.1-ce
Storage Driver: aufs
 Root Dir: /var/lib/docker/aufs
 Backing Filesystem: extfs
 Dirs: 91
 Dirperm1 Supported: true
Logging Driver: json-file
Cgroup Driver: cgroupfs
Plugins:
 Volume: local
 Network: bridge host macvlan null overlay
 Log: awslogs fluentd gcplogs gelf journald json-file logentries splunk syslog
Swarm: active
 NodeID: mlpwf78liv8ko1noen0fi83os
 Is Manager: true
 ClusterID: qgqncvn3u3q172nans0i2yvso
 Managers: 1
 Nodes: 3
 Orchestration:
  Task History Retention Limit: 5
 Raft:
  Snapshot Interval: 10000
  Number of Old Snapshots to Retain: 0
  Heartbeat Tick: 1
  Election Tick: 3
 Dispatcher:
  Heartbeat Period: 5 seconds
 CA Configuration:
  Expiry Duration: 3 months
  Force Rotate: 0
 Root Rotation In Progress: false
 Node Address: 192.168.0.129
 Manager Addresses:
  192.168.0.129:2377
Runtimes: runc
Default Runtime: runc
Init Binary: docker-init
containerd version: 6e23458c129b551d5c9871e5174f6b1b7f6d1170
runc version: 810190ceaa507aa2727d7ae6f4790c76ec150bd2
init version: 949e6fa
Security Options:
 apparmor
 seccomp
  Profile: default
Kernel Version: 4.4.0-92-generic
Operating System: Ubuntu 16.04.3 LTS
OSType: linux
Architecture: x86_64
CPUs: 8
Total Memory: 31.37GiB
Name: rpoitras-X8
ID: TP6F:YWMM:OL6Y:LCMX:RBIY:NIBZ:5AFZ:TTDR:SM2G:ASY4:SOWG:HPDR
Docker Root Dir: /var/lib/docker
Debug Mode (client): false
Debug Mode (server): true
 File Descriptors: 37
 Goroutines: 157
 System Time: 2017-08-31T15:47:44.700896799-04:00
 EventsListeners: 0
Registry: https://index.docker.io/v1/
Experimental: false
Insecure Registries:
 127.0.0.0/8
Live Restore Enabled: false

WARNING: No swap limit support

  Profile: default
Kernel Version: 4.4.0-92-generic
Operating System: Ubuntu 16.04.3 LTS
OSType: linux
Architecture: x86_64
CPUs: 8
Total Memory: 31.37GiB
Name: rpoitras-X8
ID: TP6F:YWMM:OL6Y:LCMX:RBIY:NIBZ:5AFZ:TTDR:SM2G:ASY4:SOWG:HPDR
Docker Root Dir: /var/lib/docker
Debug Mode (client): false
Debug Mode (server): true
 File Descriptors: 37
 Goroutines: 157
 System Time: 2017-08-31T15:47:44.700896799-04:00
 EventsListeners: 0
Registry: https://index.docker.io/v1/
Experimental: false
Insecure Registries:
 127.0.0.0/8
Live Restore Enabled: false

WARNING: No swap limit support
```
Compose does not use swarm mode to deploy services to multiple nodes in a swarm. All containers will be scheduled on the current node.

To deploy your application across the swarm, use `docker stack deploy`.

https://docs.docker.com/engine/swarm/stack-deploy/


```
$ docker service create --name registry --publish 5000:5000 registry:2
$ docker service ls
ID                  NAME                MODE                REPLICAS            IMAGE               PORTS
48poiaotjxcy        registry            replicated          1/1                 registry:2          *:5000->5000/tcp
```

```
$ docker service inspect --pretty registry

```

```
$ docker service ps registry
```

```
$ docker-compose push
```

```
$ docker stack deploy -c docker-compose.yml nodes
Creating network nodes_nodes
Creating service nodes_web
Creating service nodes_dev
```

Inspect:
```
$ docker stack ls
NAME                SERVICES
nodes               2

$ docker stack ps nodes
```

```
$ docker stack services stacktest
ID                  NAME                MODE                REPLICAS            IMAGE                       PORTS
r19abkgj2y7w        stacktest_dev       replicated          0/1                 reactuniversal_dev:latest   *:4000->4000/tcp
ubeugi9qbre6        stacktest_web       replicated          0/1                 reactuniversal_web:latest   *:8090->8090/tcp
```

```
$ sudo systemctl stop docker
```

Getting images into the private, insecure registry [Docker Registry](#https://docs.docker.com/registry/)
```
$ docker tag reactuniversal_dev 192.168.0.129:5000/reactuniversal_dev
$ docker push 192.168.0.129:5000/reactuniversal_dev
```
( repeat for other images )

