# The Book Pundit APIs
APIs that support The Book Pundit application.

In order to run the full application [The Book Pundit Service](https://github.com/bahtou/the-book-pundit-service) must also be running.

## Run

`docker-compose up -d`

>An external docker network `api_net` needs to exist in order for the application to function. Run the following command if the network has not been created

`docker network create api_net`

