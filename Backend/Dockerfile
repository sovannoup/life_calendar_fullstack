FROM openjdk:8-jdk-alpine
WORKDIR /app/Backend
COPY target/life_calendar-0.0.1-SNAPSHOT.jar ./life_calendar-0.0.1-SNAPSHOT.jar
EXPOSE 3001
ENTRYPOINT ["/usr/bin/java", "-jar", "life_calendar-0.0.1-SNAPSHOT.jar"]