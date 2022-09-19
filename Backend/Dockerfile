FROM openjdk:8-jdk-alpine
WORKDIR /app/Backend
EXPOSE 3001
COPY target/life_calendar-0.0.1-SNAPSHOT.jar ./life_calendar-0.0.1-SNAPSHOT.jar
CMD ["/usr/bin/java", "-jar", "life_calendar-0.0.1-SNAPSHOT.jar"]