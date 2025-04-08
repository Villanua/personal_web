# Dockerfile

# Usa Python
FROM python:3.12

# Instala dependencias del sistema necesarias para mysqlclient
RUN apt-get update && apt-get install -y \
    gcc \
    default-libmysqlclient-dev \
    build-essential \
    libssl-dev \
    libffi-dev \
    && apt-get clean

# Establece directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY requirements.txt .

# Instala dependencias
RUN pip install --upgrade pip
RUN pip install -r requirements.txt --no-cache-dir 

ENV GOOGLE_CLOUD_PROJECT=villanua
ENV DATABASE_URL=postgres://villanua-db-user:T&BNkU5=,`2,-R0X@//cloudsql/villanua:europe-southwest1:villanua-sql-instance/villanua-postgresql
ENV GS_BUCKET_NAME=villanua-bucket
ENV SECRET_KEY=UPVEXjFgKDLXDRapLdhrWEmicGphEwveHRUirHToIzkqRzqlLt


# Copiar el código fuente de tu aplicación
COPY . /app
COPY credentials.json /tmp/credentials.json
ENV GOOGLE_APPLICATION_CREDENTIALS=/tmp/credentials.json


# Configura variables de entorno
RUN python manage.py collectstatic --noinput

# Configuración de logs
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Configuración de variables de entorno
ENV PYTHONUNBUFFERED=1
ENV PORT=8080

# Establecer el entrypoint
ENTRYPOINT ["/entrypoint.sh"]