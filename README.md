# Spring Boot + Angular JWT Authentication

This repository contains the implementation of JWT Authentication for a full-stack application using Spring Boot for the backend and Angular for the frontend.

## Overview

The backend is developed using **Spring Boot**, incorporating **JWT (JSON Web Tokens)** for secure authentication. **Spring Security** is utilized to manage authentication and authorization processes.

### Technologies used:

- **Spring Boot 3**
- **Spring Security 6**
- **Java 17**
- **MySQL** (as the database)

The frontend is built with **Angular**, incorporating **JWT** for secure authentication. The user interface is designed to seamlessly integrate with the Spring Boot backend.

### Technologies used:

- **Angular 17**
- **Bootstrap 5.2**

## Getting Started

Follow the steps below to set up and run the application on your local machine.

### Prerequisites

- [Java 17](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Node.js and npm](https://nodejs.org/)
- **Angular CLI**: `npm install -g @angular/cli`

## Project Execution

The project can be executed in two ways: locally, configuring a MySQL database, or through a Docker container using Docker Compose. Below, both approaches are explained.

### Local Execution

#### MySQL Database Configuration

1. Ensure you have [Java 17](https://www.oracle.com/java/technologies/javase-downloads.html) installed on your machine.

2. Install [Node.js and npm](https://nodejs.org/) on your system.

3. Install the Angular CLI globally by running the following command in your terminal:

    ```bash
    npm install -g @angular/cli
    ```

4. Navigate to the `Login-jwt/Backend` folder of the project.

5. Configure a MySQL database with the appropriate credentials in the `application.properties` configuration file located in `Login-jwt/Backend/src/main/resources`.

6. Run the Spring Boot backend by executing the following command:

    ```bash
    ./mvnw spring-boot:run
    ```

7. Navigate to the `Login-jwt/Frontend` folder and run the following command to start the Angular frontend:

    ```bash
    ng serve
    ```

8. Open your browser and access `http://localhost:4200` to use the application.

### Docker Compose

#### Prerequisites

- Ensure you have [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your system.

#### Start with Docker Compose

1. Open a terminal and navigate to the `Login-jwt/Backend` folder.

2. Run the following command to start the containers using Docker Compose:

    ```bash
    docker-compose up
    ```

3. Once initialization is complete, access the backend APIs. The frontend is under development and will be accessible at `http://localhost:4200` in the future.

With these steps, you can run the project either locally or through Docker Compose, depending on your preference and development environment.
