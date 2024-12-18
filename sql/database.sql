CREATE DATABASE college_courses;

USE college_courses;

CREATE TABLE colleges (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    college_id INT,
    FOREIGN KEY (college_id) REFERENCES colleges(id)
);
