CREATE DATABASE IF NOT EXISTS Planets;
USE Planets;

CREATE TABLE Planets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255),
    radius FLOAT,
    period FLOAT,
    temp FLOAT,
    distance FLOAT,
    surface FLOAT,
    lots FLOAT
);
