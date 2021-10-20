## How to run:

> ng serve host \
> ng serve mfe1 --port=5000 \
> ng serve mfe2 --port=5001 \



## How to run in docker:

> docker build -t host -f .\HostDockerfile \
> docker build -t mfe1 -f .\Mfe1Dockerfile \
> docker build -t mfe1 -f .\Mfe2Dockerfile \

> docker run -d -p 4200:80 host \
> docker run -d -p 5000:80 mfe1 \
> docker run -d -p 5001:80 mfe2 \
