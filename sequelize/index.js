// @ts-nocheck
const { Sequelize } = require("sequelize");
const { applyExtraSetup } = require("./extra-setup");

// In a real app, you should keep the database connection URL as an environment variable.
// But for this example, we will just use a local SQLite database.
// const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);
const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "sqlite-database/db.sqlite",
	logQueryParameters: true,
	benchmark: true,
});

const modelDefiners = [
	// Add more models here...
	require("./models/vehicles"),
];

// We define all models according to their files.
// for (const modelDefiner of modelDefiners) {
// 	console.log(`Defining model ${modelDefiner}...`);
// 	modelDefiner(sequelize);
// }
modelDefiners.forEach(function (model) {
	module.exports[model] = sequelize.import(__dirname + "/" + model);
});

// We execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
