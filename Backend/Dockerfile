FROM amazoncorretto:8u392-alpine3.17-jre

WORKDIR /app

COPY target/login-jwt-v1.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
