const { model, Schema } = require("mongoose");

const embeddedVehicleSchema = new Schema({
	_id: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	license_plate: {
		type: String,
		required: true,
	},
	location: {
		type: {
			type: String,
			enum: ["Point"],
			required: true,
		},
		coordinates: {
			type: [Number],
			required: true,
		},
	},
});

const ShiftSchema = new Schema({
	start_time: {
		type: Date,
		required: true,
	},
	end_time: {
		type: Date,
		required: true,
	},
	vehicles: {
		type: [embeddedVehicleSchema],
	},
	completed: {
		type: Boolean,
		default: false,
	},
	vehicles_completed: {
		type: [Schema.Types.ObjectId],
	},
});

module.exports.Shift = model("Shift", ShiftSchema);
