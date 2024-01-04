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

### Docker Compose

#### Prerequisites

- Ensure you have [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your system.

#### Start with Docker Compose

1. Run the following command to start the containers using Docker Compose in the root of the project:

    ```bash
    docker-compose up
    ```

2. Once initialization is complete, the frontend will be accessible at `http://localhost:4200`.

### User Registration

To register a new user, follow these steps using [Postman](https://www.postman.com/) or a similar tool:

1. Create a POST request with the following URL: `http://localhost:8080/auth/register`

2. In the request body, select the "raw" option and set the content type to "JSON".

3. Enter the following JSON payload:

    ```json
    {
        "username": "write_an_email",
        "password": "write_a_password"
    }
    ```

    Replace `"write_an_email"` with a valid email and `"write_a_password"` with a secure password.

4. Send the request to create a new user.

By following these steps, you'll successfully register a new user in the system. After registration, you can log in using the created credentials on the application's login page.


