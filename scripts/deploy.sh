#!/bin/bash
   # Build Docker images
   docker build -t backend:latest ./backend
   docker build -t frontend:latest ./frontend

   # Load images to Minikube
   minikube image load backend:latest
   minikube image load frontend:latest

   # Apply Kubernetes manifests
   kubectl apply -f kubernetes/postgres-deployment.yaml
   kubectl apply -f kubernetes/backend-deployment.yaml
   kubectl apply -f kubernetes/frontend-deployment.yaml
