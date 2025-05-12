#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Define variables for the Cloud SQL instance, region, project ID, service name, and artifact registry
INSTANCE_NAME="villanua-sql-instance"  # Name of the Cloud SQL instance
REGION="europe-west1"            # Region where the resources are deployed
PROJECT_ID=$(gcloud config get-value project)  # Fetch the current GCP project ID
SERVICE_NAME="villanua-service"       # Name of the Cloud Run service
ARTIFACT_REGISTRY="cloud-run-source"  # Name of the artifact registry
IMAGE_NAME="$REGION-docker.pkg.dev/$PROJECT_ID/$ARTIFACT_REGISTRY/$SERVICE_NAME"  # Full path to the container image

# Build the container image and submit it to the artifact registry
echo "Building image and running migrations..."
gcloud builds submit --tag $IMAGE_NAME .

# Deploy the container image to Cloud Run
echo "Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --region $REGION \
  --image $IMAGE_NAME \
  --add-cloudsql-instances "$PROJECT_ID:$REGION:$INSTANCE_NAME" \
  --allow-unauthenticated

# Print a completion message
echo "Done!"