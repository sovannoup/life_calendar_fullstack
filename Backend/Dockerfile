FROM openjdk:8-jdk-alpine
VOLUME /tmp
WORKDIR /app/Backend
EXPOSE 3001
COPY target/life_calendar-0.0.1-SNAPSHOT.jar /app/Backend/life_calendar-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["/usr/bin/java", "-jar", "/app/Backend/life_calendar-0.0.1-SNAPSHOT.jar"]