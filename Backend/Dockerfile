FROM openjdk:8-jdk-alpine
ARG JAR_FILE=*.jar
COPY ${JAR_FILE} application.jar
EXPOSE 3001
ENTRYPOINT ["java", "-jar", "application.jar"]