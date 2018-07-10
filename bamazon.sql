DROP DATABASE IF EXISTS `bamazon_db`;
CREATE DATABASE `bamazon_db`;

USE bamazon_db;

CREATE TABLE products (
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(20)NOT NULL,
department_name VARCHAR(20) NOT NULL,
price DECIMAL(10,2),
stock_quantity INT,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("spinning rod", "rods & reels", 30.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("casting rod", "rods & reels", 70.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("spinning reel", "rods & reels", 30.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("casting reel", "rods & reels", 60.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("hooks", "fising tackle", 2.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lures", "fishing tackle", 5.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pastic baits", "fishing tackle", 5.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sinkers", "fishing tackle", 1.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bobbers", "fishing tackle", 5.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tackle box", "fishing tackle", 25.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("landing net", "nets", 10.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lucky fishing hat", "accessories", 20.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("polarized sunglasses", "accessories", 5.00, 100);

SELECT * FROM products WHERE stock_quantity;