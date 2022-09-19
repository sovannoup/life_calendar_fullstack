FROM openjdk:8-jdk-alpine
WORKDIR /app/Backend
COPY ./target/life_calendar-0.0.1-SNAPSHOT.jar /app/Backend/life_calendar-0.0.1-SNAPSHOT.jar
EXPOSE 3001
RUN ["java", "-jar", "/app/Backend/life_calendar-0.0.1-SNAPSHOT.jar"]