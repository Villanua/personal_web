# Use Python 3.12 as the base image
FROM python:3.12

# Install system dependencies required for mysqlclient and other libraries
RUN apt-get update && apt-get install -y \
    gcc \
    default-libmysqlclient-dev \
    build-essential \
    libssl-dev \
    libffi-dev \
    && apt-get clean

# Set the working directory inside the container
WORKDIR /app

# Copy dependency files
COPY requirements.txt .

# Upgrade pip and install Python dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt --no-cache-dir 

# Set environment variables for the application
ENV GOOGLE_CLOUD_PROJECT=villanua
ENV DATABASE_URL=postgres://villanua-db-user:T&BNkU5=,`2,-R0X@//cloudsql/villanua:europe-southwest1:villanua-sql-instance/villanua-postgresql
ENV GS_BUCKET_NAME=villanua-bucket
ENV SECRET_KEY=UPVEXjFgKDLXDRapLdhrWEmicGphEwveHRUirHToIzkqRzqlLt

# Copy the application source code
COPY . /app

# Copy Google Cloud credentials and set the environment variable for authentication
# COPY credentials.json /tmp/credentials.json
# ENV GOOGLE_APPLICATION_CREDENTIALS=/tmp/credentials.json

# Collect static files for the Django application
RUN python manage.py collectstatic --noinput

# Copy the entrypoint script and make it executable
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Set additional environment variables
ENV PYTHONUNBUFFERED=1
ENV PORT=8080

# Define the entrypoint for the container
ENTRYPOINT ["/entrypoint.sh"]