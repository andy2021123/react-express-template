# Getting Started with react-express-template

This is a template full-stack application with React.js as the frontend, Express.js as the backend, PostgreSQL as the database, and is containerized with Docker. 

## Dependencies

### Docker

You can go to https://www.docker.com/products/docker-desktop/ and download docker desktop for your given operating system. If you want to download just the docker engine, it is a little more complicated. See https://docs.docker.com/engine/install/ for installation instructions for your operating system.

### Makefile

Check to see if you have access to make from the command line (`make -v` or `make --version`). This may be the case for some Linux/macOS users. 

Download for windows from https://gnuwin32.sourceforge.net/packages/make.htm or download for linux using the appropriate package manager. i.e. for Debian/Ubuntu apt package manager, use the following:
```
sudo apt update
sudo apt install make
```

## Environment Variables

Copy the environment variables example file with `cp .env.example .env`. Fill with necessary environment variables such as postgres information, prescribed ports, api variables, etc.

## Running the Application

`make up` starts the client and server in development mode.

`make logs` opens logs for all current running containers.

`make build` builds the production container for the app. This can be used to rebuild the app when changes are made.

`make deploy` runs the app in production mode (and builds the app if not already done).

## Using the Database

`make psql environment=${environment}` opens psql at the command line for the specified database if its container is currently running.

`make dump environment=${environment}` dumps the database to a .sql file for use in initializing the database in the future if desired. After created, the database already persists over time; so, you would need to delete the database/pgdata/${environment} folder for it to be able to be initialized with another .sql file.
