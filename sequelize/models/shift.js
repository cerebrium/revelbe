// @ts-nocheck
const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

// @ts-ignore
class Shift extends Model {}

Shift.init(
	{
		// Model attributes are defined here
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		vehicles: {
			type: DataTypes.ARRAY(DataTypes.INTEGER),
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "Shift",
	}
);

// the defined model is the class itself
console.log(Shift === sequelize.models.Shift); // true
