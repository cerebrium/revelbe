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
	async addShift(vehicles) {
		try {
			let start_time = new Date();
			let end_time = start_time.setHours(start_time.getHours() + 8);
			let newShift = {
				start_time,
				end_time,
				vehicles,
			};
			return await Shift.create(newShift);
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

	async getShiftVehiclesById(id) {
		try {
			return await Shift.findById(id, {
				vehicles: 1,
				_id: 0,
			});
		} catch (e) {
			console.error(e);
			return e.message;
		}
	}

	async addCompletedVehicle(id, vehicle) {
		try {
			return await Shift.findByIdAndUpdate(id, {
				$push: {
					vehicles_completed: vehicle,
				},
			});
		} catch (e) {
			console.error(e);
			return e.message;
		}
	}

	async getVehiclesRemaining(id) {}
}

let shiftService = new ShiftService();
module.exports = shiftService;
