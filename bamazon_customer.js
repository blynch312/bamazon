var mysql = require("mysql");
const cTable = require('console.table');
var inquirer = require("inquirer");
var store_products = [];
var costs = [];
var itemQuantity = [];
var updatedQty
var id
var quantity

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    // updateProduct(20, 3);
    readProducts();

});


function buyProducts() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the product ID?",
            name: "productId",
        },

        {
            type: "input",
            message: "How many do you want?",
            name: "numQuantity",
        }

    ]).then(function (answer) {

        id = parseInt(answer.productId);
        quantity = parseInt(answer.numQuantity);
        // store_products[id - 1]
        // costs[id - 1];
        // itemQuantity[id - 1];
        // console.log(store_products[id - 1]);
        // console.log(costs[id - 1]);
        // console.log(itemQuantity[id - 1]);
        updatedQty = parseInt(itemQuantity[id - 1]) - quantity;
        var receipt = quantity * costs[id - 1]
        console.log("Thank you for your purchase of: $" + receipt + "! Your items will ship soon.")
        updateProduct(updatedQty, id);

    }
    )
}

function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        for (var i = 0; i < res.length; i++) {
            store_products.push(res[i].item_id);
            costs.push(res[i].price);
            itemQuantity.push(res[i].stock_quantity);
        }
        // console.log(store_products)
        // console.log(costs)
        // console.log(itemQuantity)
        buyProducts();
    });
}


// function createProduct() {
//     console.log("Inserting a new product...\n");
//     var query = connection.query(
//         "INSERT INTO products SET ?",
//         {
//             product_name: "fishing line",
//             department_name: "fishing tackle",
//             price: 3.00,
//             stock_quantity: 60
//         },
//         function (err, res) {
//             console.log(res + " product inserted!\n");
//             // Call updateProduct AFTER the INSERT completes
//             readProducts();

//         }
//     );

//     // logs the actual query being run
//     console.log(query.sql);
// }

function updateProduct(qty, id) {

    console.log("Updating inventory...\n");
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {
                stock_quantity: qty

            },
            {
                item_id: id
            }
        ],
        function (err, res) {
            console.log("update done!" + res)
            readProducts();
        }
    );

    // logs the actual query being run
    console.log(query.sql);
    // connection.end();
}




