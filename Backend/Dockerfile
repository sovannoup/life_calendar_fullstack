FROM openjdk:8-jdk-alpine
WORKDIR /app/Backend/src
COPY ./target/life_calendar-0.0.1-SNAPSHOT.jar /app/Backend/src/life_calendar-0.0.1-SNAPSHOT.jar
EXPOSE 3001
ENTRYPOINT ["java", "-jar", "life_calendar-0.0.1-SNAPSHOT.jar"]