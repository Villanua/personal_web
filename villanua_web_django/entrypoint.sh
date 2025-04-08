#!/bin/bash

# Crear logs
mkdir -p /app/logs
touch /app/logs/gunicorn.log
touch /app/logs/gunicorn-access.log
tail -n 0 -f /app/logs/gunicorn*.log &

# Realizar migraciones
python manage.py migrate --noinput

# Ejecutar Gunicorn para la aplicación Django
exec gunicorn villanua_web_project.wsgi:application \
    --bind 0.0.0.0:8080 \
    --workers 1 \
    --threads 1 \
    --timeout 600 \
    --log-level info \
    --log-file /app/logs/gunicorn.log \
    --access-logfile /app/logs/gunicorn-access.log
