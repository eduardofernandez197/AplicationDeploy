@echo off
setlocal

set "LOCAL_JDK=C:\Program Files\Java\jdk-25.0.2"

if exist "%LOCAL_JDK%\bin\java.exe" (
  set "JAVA_HOME=%LOCAL_JDK%"
  set "PATH=%JAVA_HOME%\bin;%PATH%"
)

call "%~dp0mvnw.cmd" spring-boot:run "-Dspring-boot.run.profiles=local"
