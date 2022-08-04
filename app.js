// const express = require('express');
// const bodyParser = require('body-parser');

// const controllers = {
// 	// Add more controllers here...
// 	vehicles: require('./controllers/vehicles'),
// };

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // We provide a root route just as an example
// app.get('/', (req, res) => {
// 	res.send(`
// 		<h2>Hello, Sequelize + Express!</h2>
// 		<p>Use the sqlite-database/setup.js to add base fixture data to your db and run <b>npm run setup-example-db</b> once to have a populated database. Otherwise, you will get <i>'no such table'</i> errors.</p>
// 		<p>Try some routes, such as <a href='/api/vehicles'>/api/vehicles</a>!</p>
// 	`);
// });

// app.get(`/api/vehicles`, (req,res)=>{
//   const vehicles = controllers.vehicles.list()
// 	res.status(200).json(vehicles);
// });

// module.exports = app;

require("dotenv").config();
const express = require("express");
const app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./database/db");
const Vehicles = require("./controllers/vehicles");

// middleware
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/vehicles", Vehicles);

mongoose.set("debug", true);

(async () => {
	db.connect();
})().catch((e) => {
	console.log(e);
	process.exit(1);
});

// middleware ended, app getting
app.get("/", function (req, res) {
	res.status(200).send("The backend is up and running");
});

// have it listen to the localhost port
var server = app.listen(process.env.PORT || 3001);

module.exports = server;
