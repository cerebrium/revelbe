const { model, Schema } = require("mongoose");

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
		type: [Schema.Types.ObjectId],
		required: true,
	},
});

module.exports.Shift = model("Shift", ShiftSchema);
