#!/bin/bash

# Create the logs directory and log files if they don't exist
mkdir -p /app/logs
touch /app/logs/gunicorn.log
touch /app/logs/gunicorn-access.log

# Start tailing the log files to keep the container running and allow log inspection
tail -n 0 -f /app/logs/gunicorn*.log &

# Start the Gunicorn server to serve the Django application
exec gunicorn villanua_web_project.wsgi:application \
    --bind 0.0.0.0:8080 \
    --workers 1 \
    --threads 1 \
    --timeout 600 \
    --log-level info \
    --log-file /app/logs/gunicorn.log \
    --access-logfile /app/logs/gunicorn-access.log