# Use Python 3.12 as the base image
FROM python:3.12

# Install system dependencies required for mysqlclient and other libraries
RUN apt-get update && apt-get install -y \
    apt-utils \
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
RUN pip install --upgrade pip && \
    pip install --no-cache-dir --root-user-action=ignore -r requirements.txt


# Copy the application source code
COPY . /app


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