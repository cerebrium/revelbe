const { model, Schema } = require("mongoose");

const pointSchema = new Schema({
	type: {
		type: String,
		enum: ["Point"],
		required: true,
	},
	coordinates: {
		type: [Number],
		required: true,
	},
});

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
		type: pointSchema,
		required: true,
	},
	being_processed: {
		type: Boolean,
		default: false,
	},
});

VehicleSchema.index({ location: "2dsphere" });

module.exports.Vehicles = model("Vehicles", VehicleSchema);
