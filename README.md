Running locally
================

Initializing the databases
--------------------------
Create a database called `notices` accessible by a login user of name `notices_robot` and with password `n0t!c3s`
Note that this is just for local testing. These credentials *must not* be used for production.
The database is assumed to be accessible on `localhost` under port `5432`
A Redis server must also be running. It should be accessible on `localhost` under port `6379`.

Run the server
--------------
```
 $ cd server
 $ npm install
 $ DATABASE_HOST=localhost DATABASE_NAME=notices DATABASE_USER=notices_robot DATABASE_PASSWORD='n0t!c3s' REDISHOST=localhost node bin/www
```

Run the client
--------------
```
 $ cd client
 $ npm install
 $ npm start
```

Running via Docker
==================

Build and start the container:
```
 $ docker-compose up
```
