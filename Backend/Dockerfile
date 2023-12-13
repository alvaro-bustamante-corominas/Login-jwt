# Build stage
FROM maven:3.9.6-sapmachine-17 AS build
ADD target/login-jwt-v1.jar /home/app/login-jwt-v1.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/home/app/login-jwt-v1.jar"]

