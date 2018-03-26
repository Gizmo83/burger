CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INTEGER NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    restaurant_name VARCHAR(100) NOT NULL,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN NOT NULL,
    rating BOOLEAN NOT NULL
);

-- DESCRIBE burgers;
-- SELECT * FROM burgers;