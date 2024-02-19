# Use the official OpenJDK image as a base image
FROM maven:3.8.3-openjdk-17

# Set the working directory in the container
WORKDIR /app

# Copy the packaged Spring Boot application JAR file into the container at /app
COPY target/simpleWebApp-0.0.1-SNAPSHOT.jar /app/application.jar

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the Spring Boot application when the container launches
CMD ["java", "-jar", "application.jar"]
