const { model, Schema } = require("mongoose");

const VehicleSchema = new Schema({
	license_plate: {
		type: String,
		required: true,
	},
	battery_level: {
		type: Number,
		required: true,
	},
	in_use: {
		type: Boolean,
		default: false,
	},
	model: {
		type: String,
		required: true,
	},
	location: {
		type: [Number],
		required: true,
	},
});

module.exports.Vehicles = model("Vehicles", VehicleSchema);
