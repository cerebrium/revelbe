const { Vehicles } = require("../models/vehicles");

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
				location: [Math.random() * 180 - 90, Math.random() * 180 - 90],
				being_processed: false,
				name: `Niu ${Math.floor(Math.random() * 1000000)}`,
			});
		} catch (e) {
			console.error(e);
			return e.message;
		}
	}
}

let vehicleService = new VehicleService();
module.exports = vehicleService;
