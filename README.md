To-Do App by pvgohhh - DevOps Showcase
   A microservices-based To-Do List application, built and deployed to demonstrate my expertise as a DevOps engineer. This project showcases containerization with Docker, orchestration with Kubernetes (Minikube), CI/CD pipeline with GitHub Actions, and a scalable architecture with React/Vite frontend and Node.js/Express backend.
Features

Microservices Architecture: Separated frontend and backend services.
Containerization: Dockerized services with docker-compose for local development.
Orchestration: Deployed on Minikube with Kubernetes manifests.
CI/CD: Automated linting, testing, and deployment via GitHub Actions.
Database: PostgreSQL for task persistence.
Modern UI: Attractive React/Vite interface with custom CSS styling.

Tech Stack

Frontend: React (Vite), Axios, CSS
Backend: Node.js, Express, PostgreSQL
DevOps Tools: Docker, Kubernetes (Minikube), GitHub Actions
Environment: Node.js 18, Ubuntu

Setup
Prerequisites

Docker
Minikube
kubectl
Node.js 18

Local Development

Clone the repository:git clone https://github.com/pvgohhh/t0d0_app.git
cd t0d0_app


Install dependencies:cd backend && npm install
cd ../frontend && npm install


Run with Docker Compose:docker-compose up --build


Access the app at http://localhost:3002.

Deployment to Minikube

Start Minikube:minikube start


Deploy:kubectl apply -f kubernetes/


Access the service:minikube service frontend --url



CI/CD Pipeline

Automated linting and testing of both frontend and backend.
Builds and pushes Docker images.
Deploys to Minikube on push to main branch.
Configured in .github/workflows/ci-cd.yml.

DevOps Skills Demonstrated

Containerization & Orchestration: Designed and managed multi-container applications with Docker and Kubernetes.
CI/CD Implementation: Set up a fully automated pipeline with GitHub Actions.
Infrastructure as Code: Utilized YAML for Kubernetes manifests and Docker Compose.
Monitoring & Debugging: Handled logs and network issues for seamless deployment.
Scalability: Architected a microservices-based solution for future scaling.

Known Issues

Task addition is not working due to database initialization issues (in progress).
Contributions or fixes are welcome!

Contact

GitHub: pvgohhh
Email: ngarsonov@yandex.ru

License
   MIT License - Free to use and modify.
