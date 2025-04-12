#!/bin/bash

# Create the logs directory and log files if they don't exist
mkdir -p /app/logs
touch /app/logs/gunicorn.log
touch /app/logs/gunicorn-access.log

# Start tailing the log files to keep the container running and allow log inspection
tail -n 0 -f /app/logs/gunicorn*.log &

# Apply database migrations to ensure the database schema is up-to-date
python manage.py migrate --noinput

# Start the Gunicorn server to serve the Django application
exec gunicorn villanua_web_project.wsgi:application \
    --bind 0.0.0.0:8080 \  # Bind to all network interfaces on port 8080
    --workers 1 \          # Use a single worker process
    --threads 1 \          # Use a single thread per worker
    --timeout 600 \        # Set a timeout of 600 seconds for requests
    --log-level info \     # Set the logging level to 'info'
    --log-file /app/logs/gunicorn.log \  # Log application events to gunicorn.log
    --access-logfile /app/logs/gunicorn-access.log  # Log access events to gunicorn-access.log
