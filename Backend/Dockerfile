FROM openjdk:8-jdk-alpine
WORKDIR /app/backend
COPY ./target/life_calendar-0.0.1-SNAPSHOT.jar /app/backend/
EXPOSE 3001
CMD ["java", "-jar", "life_calendar-0.0.1-SNAPSHOT.jar"]