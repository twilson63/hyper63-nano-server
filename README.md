# hyper63 server example

This is an early version of a hyper63 nano server.

The nano server uses the localfilesystem to persist services, this allows you 
to run the hyper63 server on small systems like raspberry pi, or small cloud
containers for dev and test environments.

## Setup locally

``` sh
yarn
```

Create a `.env` file

``` 
SECRET=[your security secret]
DATA=./data
```

create data directory

```
mkdir data
```

## Run locally

``` sh
yarn dev
```




