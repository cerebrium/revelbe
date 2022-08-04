const { Shift } = require("../models/shift");

class ShiftService {
	async getShifts() {
		try {
			return await Shift.find();
		} catch (e) {
			console.error(e);
			return e.message;
		}
	}
	async addShift(lat, long) {
		try {
			return await Shift.create();
		} catch (e) {
			console.error(e);
			return e.message;
		}
	}
	async deleteShift(id) {
		try {
			return await Shift.findByIdAndDelete(id);
		} catch (e) {
			console.error(e);
			return e.message;
		}
	}
	async updateShift(id, shift) {
		try {
			return await Shift.findByIdAndUpdate(id, shift);
		} catch (e) {
			console.error(e);
			return e.message;
		}
	}
}

let shiftService = new ShiftService();
module.exports = shiftService;
