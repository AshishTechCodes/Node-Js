const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();

const Publishable_Key = "pk_test_51QKYi2QMn2pFlr0GhSqa0e5dZohtjJp9GLuvTpKBiOG4TJ3f7VAxzVYH4L13NNFFCLYnaDN9brut6pvsp0qVB4a9Z1CVmO0dKcCuxvRY";
const Secret_Key = "sk_test_51QKYi2QMn2pFlr0GhMGsaDIPS4rFr3Dr1TkGZ2ACe7Fb0wKFAURdqQYskJcElx5q3GSLcYVmMgJwOZsbjJWmZ1bKD88MG67uwe9";

const stripe = require("stripe")(Secret_Key);

const port = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("Home", {
        key: Publishable_Key
    });
});

app.post("/payment", function (req, res) {
    stripe.customers
        .create({
            email: req.body.stripeEmail,
            source: req.body.stripeToken,
            name: "Gourav Hammad",
            address: {
                line1: "TC 9/4 Old MES colony",
                postal_code: "452331",
                city: "Indore",
                state: "Madhya Pradesh",
                country: "India",
            }
        })
        .then((customer) => {
            return stripe.charges.create({
                amount: 2500,    // Charging Rs 25
                description: "Web Development Product",
                currency: "INR",
                customer: customer.id
            });
        })
        .then((charge) => {
            res.send("Success");
        })
        .catch((err) => {
            res.send(err);
        });
});

app.listen(port, function (error) {
    if (error) throw error;
    console.log(`Server created Successfully on http://localhost:${port}`);
});