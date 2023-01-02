# docker build -t silviomori/technomori-dssales:0.0.1 .
# docker push silviomori/technomori-dssales:0.0.1
FROM openjdk:11
VOLUME [ "/tmp" ]
EXPOSE 8080
ADD ./target/dssales-0.0.1-SNAPSHOT.jar dssales-0.0.1-SNAPSHOT.jar
ENTRYPOINT [ "java", "-jar", "dssales-0.0.1-SNAPSHOT.jar" ]