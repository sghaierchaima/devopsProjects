
FROM maven:3.8.1-openjdk-17 AS build
WORKDIR /app
COPY gestion-employes /app
RUN ls -la /app
RUN mvn clean install -DskipTests
FROM openjdk:17-jdk-slim

WORKDIR /app

COPY --from=build /app/target/gestion-employes-0.0.1-SNAPSHOT.jar gestion-employes.jar
RUN ls -l /app

# Exécuter l'application
CMD ["java", "-jar", "gestion-employes.jar"]


EXPOSE 8086




