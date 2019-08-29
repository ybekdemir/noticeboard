#!/bin/bash
set -e

# Run Database initialization step
node ./bin/init_db.js

exec "$@"
