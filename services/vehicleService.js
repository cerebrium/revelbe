const { Vehicles } = require("../models/vehicles");
const vehiclesData = require("../utils/defaultData");

class VehicleService {
	async getVehicles() {
		try {
			return await Vehicles.find();
		} catch (e) {
			console.error(e);
			return e.message;
		}
	}
	async addVehicle(vehicle) {
		try {
			return await Vehicles.create(vehicle);
		} catch (e) {
			console.error(e);
			return e.message;
		}
	}
	async deleteVehicle(id) {
		try {
			return await Vehicles.findByIdAndDelete(id);
		} catch (e) {
			console.error(e);
			return e.message;
		}
	}
	async updateVehicle(id, vehicle) {
		try {
			return await Vehicles.findByIdAndUpdate(id, vehicle);
		} catch (e) {
			console.error(e);
			return e.message;
		}
	}
	async getVehicleById(id) {
		try {
			return await Vehicles.findById(id);
		} catch (e) {
			console.error(e);
			return e.message;
		}
	}

	async createRandomVehicle() {
		try {
			return await Vehicles.create({
				license_plate: `NY${Math.floor(Math.random() * 1000000)}`,
				battery_level: Math.floor(Math.random() * 100),
				in_use: false,
				model: "Niu",
				location: {
					type: "Point",
					coordinates: [Math.random() * 180 - 90, Math.random() * 180 - 90],
				},
				being_processed: null,
				name: `Niu ${Math.floor(Math.random() * 1000000)}`,
			});
		} catch (e) {
			console.error(e);
			return e.message;
		}
	}

	async findTwentyClosestVehicles(lat, long) {
		try {
			return await Vehicles.find(
				{
					in_use: false,
					being_processed: null,
					location: {
						$near: {
							$geometry: {
								type: "Point",
								coordinates: [lat, long],
							},
						},
					},
				},
				{
					_id: 1,
					license_plate: 1,
					location: 1,
				}
			).limit(20);
		} catch (e) {
			console.error(e);
			return e.message;
		}
	}

	async setVehiclesAsBeingProcessed(vehicleIds, shiftId) {
		try {
			return await Vehicles.updateMany(
				{ _id: { $in: vehicleIds } },
				{ $set: { being_processed: shiftId } }
			);
		} catch (e) {
			console.error(e);
			return e.message;
		}
	}

	async createDefaults() {
		try {
			return await Vehicles.insertMany(vehiclesData);
		} catch (e) {
			console.error(e);
			return e.message;
		}
	}

	async batterySwap(vehicleId) {
		try {
			return await Vehicles.findByIdAndUpdate(vehicleId, {
				$set: { battery_level: 100, being_processed: null },
			});
		} catch (e) {
			console.error(e);
			return e.message;
		}
	}
}

let vehicleService = new VehicleService();
module.exports = vehicleService;
