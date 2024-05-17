# Inventory Management Microservice

## Introduction
In recent years, the adoption of microservices architecture has become a predominant approach in designing scalable and flexible software applications. Microservices allow the development of individual components of an application as independent services, which communicate over well-defined APIs. This architecture not only enhances the scalability and manageability of applications but also improves the ability to integrate continuous delivery and DevOps practices effectively.

This project aims to create a working prototype of a crucial microservice component for a fictitious, larger application. The prototype functions as an online store's "Inventory Management" service, handling the listing, description, classification, and availability of products—all crucial tasks for any e-commerce enterprise. Utilizing the contemporary capabilities of cloud architecture, this microservice is deployed on a public cloud service provider, guaranteeing scalability, reliability, and security.

## Microservice Description
### Context of the Microservice
The Inventory Management microservice is an essential part of a wider application ecosystem focused on inventory management. It handles the CRUD (Create, Read, Update, Delete) operations for inventory items, including their names, prices, supplier information, quantities, and other specifics. This functionality ensures the dynamic retention of inventory data and reflects real-time updates and changes, which are essential for precise inventory management.

### Admin Model and Security
The microservice includes an admin model for handling administrative functions such as managing user roles and access within the system. Security is enhanced through JWT (JSON Web Tokens) for session management and bcrypt for password hashing, ensuring secure handling of user credentials and sessions.

### Endpoints and API Specifications
The microservice exposes several endpoints for different item management functions, including:
- **Get All Items**: Retrieves all items in the database.
- **Get Single Item**: Retrieves a specific item by its ID.
- **Create Item**: Adds a new item to the database.
- **Update Item**: Updates an existing item.
- **Delete Item**: Deletes an item from the database.

## Containerization
### Docker Configuration
The project uses Docker to maintain a standardized, consistent environment across development, testing, and production stages. The Docker configuration includes a `Dockerfile` that specifies the base image, working directory, file copying, software installation, environment variables, and the command to run the application.

### Container Registry
Amazon Elastic Container Registry (ECR) is used to host Docker images. The CI/CD pipeline pushes newly created Docker images to ECR, ensuring the latest version of the application is always ready for deployment.

## DevOps Practices
### Programming Language and Framework
Node.js is used for the project due to its efficient event-driven architecture and extensive library environment, which includes tools like Express.js. Visual Studio Code (VSCode) is the recommended IDE for its robust support for JavaScript and integration with tools like GitHub and Docker.

### CI/CD Pipeline
GitHub Actions is used to set up the CI/CD pipeline, automating the build, test, and deployment processes. AWS Actions are used for the continuous deployment step, integrating directly with the existing GitHub workflow.

### Version Control System
GitHub is used as the version control system, with features like pull requests, code reviews, and branching strategies to maintain code quality and facilitate concurrent development.

## Security Measures
### IAM Users and Roles
AWS Identity and Access Management (IAM) is used to enforce the principle of least privilege by creating specific IAM users and roles with defined permissions. This reduces the risk of unauthorized access to vital resources.

### Secrets Management
GitHub's secrets management tools are used to securely handle sensitive data like passwords and API keys, ensuring they are never exposed in the codebase.

### Static Application Security Testing (SAST)
SonarCloud is integrated into the CI/CD pipeline for automated code analysis, detecting vulnerabilities, bugs, and code quality issues. SonarLint is also used in the IDE for real-time feedback on code quality.

## Challenges and Fixes
### Docker Image Push Errors
Insufficient IAM permissions for the user attempting to push Docker images to ECR were resolved by assigning an IAM policy with the necessary permissions.

### CI/CD Pipeline Complexity and Cost
GitHub Actions was chosen over AWS CodePipeline for its simplified setup and generous free tier, addressing both complexity and cost concerns.

### Security Risks in CI/CD Pipeline
Storing AWS access keys directly in YAML files was avoided by using GitHub's Secrets feature to securely manage sensitive information.

### Deployment Challenges
Initial deployment attempts using Amazon ECS with Fargate were switched to EC2 instances due to cost constraints. Configuring auto-scaling and load balancers ensured scalability and high availability.

## IAM Role Configurations and GitHub Actions ECS
### IAM Role Configurations
IAM roles and policies were configured to strictly control access to the ECS cluster, ECR, and AWS CodeDeploy. Specific permissions were granted to each service to ensure secure and efficient operations.

### GitHub Actions ECS
The CI/CD pipeline uses GitHub Actions to automate the build and deployment process. YAML files are used to define workflows, integrating AWS Actions for seamless deployment to Amazon ECS.

## Getting Started
### Prerequisites
- Node.js and npm installed
- Docker installed
- AWS account with necessary permissions
- GitHub account

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/DevinduSamarasinghe/ctse_14_assignment2.git
   cd inventory-management-microservice
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Build Docker image:
   ```sh
   docker build -t inventory-management .
   ```

4. Run Docker container:
   ```sh
   docker run -p 80:80 inventory-management
   ```

### Deployment
1. Push Docker image to ECR:
   ```sh
   aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <account-id>.dkr.ecr.<region>.amazonaws.com
   docker tag inventory-management:latest <account-id>.dkr.ecr.<region>.amazonaws.com/inventory-management:latest
   docker push <account-id>.dkr.ecr.<region>.amazonaws.com/inventory-management:latest
   ```

2. Deploy using GitHub Actions:
   - Update the GitHub repository secrets with your AWS credentials and ECR repository details.
   - Push changes to the repository to trigger the CI/CD pipeline.

### Usage
- Access the API at `http://localhost:80/api/item` to interact with the inventory management endpoints.

### Contributing
- Fork the repository.
- Create a new branch (`git checkout -b feature-branch`).
- Make your changes and commit (`git commit -am 'Add new feature'`).
- Push to the branch (`git push origin feature-branch`).
- Create a new Pull Request.

### Authors
- D S Samarasinghe 
- M Muthusinghe 
- G N P Perera 
- C M Serasinghe 

Note : This README.md provides a clear overview of your project, how to set it up locally, the structure of your microservices, security implementations, and the handling of IAM roles and GitHub Actions ECS for your CI/CD pipeline. .
