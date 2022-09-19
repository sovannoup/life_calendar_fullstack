FROM openjdk:8-jdk-alpine
WORKDIR /app/Backend
ARG JAR_FILE=*.jar
COPY ${life_calendar-0.0.1-SNAPSHOT.jar} application.jar
EXPOSE 3001
ENTRYPOINT ["java", "-jar", "application.jar"]