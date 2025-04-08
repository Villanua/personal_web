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

# Copia los archivos
COPY . .

# Instala dependencias
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt --root-user-action=ignore

# Configura variables de entorno
RUN python manage.py collectstatic --noinput

# Expone el puerto
EXPOSE 8080

# Define cómo arrancar
CMD ["gunicorn", "villanua_web_project.wsgi:application", "--bind", "0.0.0.0:8080"]
