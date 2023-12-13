# Build stage
#
FROM maven:3.8.3-openjdk-17 AS build
COPY target/login-jwt-v1.jar /home/app
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/home/app/login-jwt-v1.jar"]

