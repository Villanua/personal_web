#!/bin/bash

# Exit on error
set -e

# Variables
INSTANCE_NAME="villanua-sql-instance"
REGION="europe-southwest1"
PROJECT_ID=$(gcloud config get-value project)
SERVICE_NAME="villanua-service"
ARTIFACT_REGISTRY="cloud-run-source-deploy"
IMAGE_NAME="$REGION-docker.pkg.dev/$PROJECT_ID/$ARTIFACT_REGISTRY/$SERVICE_NAME"

# Build
echo "Building image and running migrations..."
gcloud builds submit --tag $IMAGE_NAME .

# Deploy
echo "Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --region $REGION \
  --image $IMAGE_NAME \
  --add-cloudsql-instances "$PROJECT_ID:$REGION:$INSTANCE_NAME" \
  --allow-unauthenticated

echo "Done!"