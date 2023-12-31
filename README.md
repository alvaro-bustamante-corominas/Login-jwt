# Spring Boot + Angular JWT Authentication

This repository contains the implementation of JWT Authentication for a full-stack application using Spring Boot for the backend and Angular for the frontend.

## Overview

The backend is developed using **Spring Boot**, incorporating **JWT (JSON Web Tokens)** for secure authentication. **Spring Security** is utilized to manage authentication and authorization processes.

### Technologies used:

- **Spring Boot 3**
- **Spring Security 6**
- **Java 17**
- **MySQL**

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
3. Adminer for MySQL Database:

   The MySQL database can be explored and managed using Adminer. Adminer is accessible at `http://localhost:8081`. You can use this interface to interact with the MySQL database.

   - **Credentials:**
       - **System:** MySQL
       - **Server:** bd-login
       - **Username:** root
       - **Password:** root
       - **Database:** login-jwt

Please note that the MySQL database is available on port `3307`, and Adminer is configured to connect to this database.



