// @ts-nocheck
const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

// @ts-ignore
class Vehicle extends Model {}

Vehicle.init(
	{
		// Model attributes are defined here
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		license_plate: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		battery_level: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		in_use: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		model: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		location: {
			type: DataTypes.ARRAY(DataTypes.FLOAT),
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "Vehicle",
	}
);

// the defined model is the class itself
console.log(Vehicle === sequelize.models.Vehicle); // true
