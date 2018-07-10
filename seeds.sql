USE bamazon_db;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("fishing pole", "outdoor recreation", 50.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lures", "fishing tackle", 5.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lucky fishing hat", "accessories", 20.00, 10);

SELECT * FROM products;
