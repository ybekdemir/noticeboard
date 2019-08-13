FROM postgres:11

# This ensures that the database is set up as expected.
# The postgres image runs the scripts in /docker-entrypoint-initdb.d/ if no data exists
# The number prefix enforces run order.

COPY ./devdatabase/create_dev_user.sql /docker-entrypoint-initdb.d/00-create_dev_user.sql

COPY ./server/sql/build.sql /build.sql
COPY ./devdatabase/switch_user_db.sql /switch_user_db.sql

RUN cat /switch_user_db.sql /build.sql > /docker-entrypoint-initdb.d/10-build.sql

RUN rm /switch_user_db.sql /build.sql
