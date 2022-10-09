-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

CREATE TABLE category
{
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(30) NOT NULL
};

CREATE TABLE product
{
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(30) NOT NULL,
    -- TO DO: how to validate that is decimal? 
    price DECIMAL NOT NULL,
    -- TO DO: how to validate numeric?
    stock INT NOT NULL DEFAULT 10, 
    category_id INT, 
    FOREIGN KEY (category_id) REFERENCES category(id)
};

CREATE TABLE tag
{
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    tag_name VARCHAR(30)
};

CREATE TABLE productTag
{
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    product_id INT, 
    FOREIGN KEY (product_id) REFERENCES product(id), 
    tag_id INT, 
    FOREIGN KEY (tag_id) REFERENCES tag(id)
};