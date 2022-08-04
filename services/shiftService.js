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

	/**
	 *
	 * @param {*} id
	 * @returns
	 *
	 * Finds the shift with the given id and returns the vehicles that are still in the shift.
	 */
	async getShiftVehiclesById(id) {
		try {
			return Shift.findById(id, {
				_id: 0,
				vehicles: 1,
				vehicles_completed: 1,
			}).then((shift) => {
				return shift.vehicles.filter((vehicle) => {
					return !shift.vehicles_completed.includes(vehicle);
				});
			});
		} catch (e) {
			console.error(e);
			return e.message;
		}
	}

	/**
	 *
	 * @param {*} id
	 * @param {*} vehicle
	 * @returns
	 *
	 * Adds a vehicle to the vehicles_completed array in the shift document
	 */

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

	async checkIfVehicleIdVisited(shift, id) {
		try {
			let completed_vehicles = await Shift.findById(shift, {
				_id: 0,
				vehicles_completed: 1,
			});
			return completed_vehicles.vehicles_completed.includes(id);
		} catch (e) {
			console.error(e);
			return e.message;
		}
	}
}

let shiftService = new ShiftService();
module.exports = shiftService;
