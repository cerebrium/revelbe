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
				location: {
					type: "Point",
					coordinates: [Math.random() * 180 - 90, Math.random() * 180 - 90],
				},
				being_processed: false,
				name: `Niu ${Math.floor(Math.random() * 1000000)}`,
			});
		} catch (e) {
			console.error(e);
			return e.message;
		}
	}

	async findTwentyClosestVehicles(lat, long) {
		try {
			return await Vehicles.find({
				in_use: false,
				location: {
					$near: {
						$geometry: {
							type: "Point",
							coordinates: [lat, long],
						},
					},
				},
			}).limit(20);
		} catch (e) {
			console.error(e);
			return e.message;
		}
	}

	async createDefaults() {
		try {
			return await Vehicles.insertMany(vehicles);
		} catch (e) {
			console.error(e);
			return e.message;
		}
	}
}

let vehicleService = new VehicleService();
module.exports = vehicleService;

const vehicles = [
	{
		id: 1,
		license_plate: "NY0001",
		battery_level: 90,
		in_use: true,
		model: "Niu",
		location: {
			type: "Point",
			coordinates: [40.680245, -73.996955],
		},
	},
	{
		id: 2,
		license_plate: "NY0002",
		battery_level: 9,
		in_use: false,
		model: "Niu",
		location: {
			type: "Point",
			coordinates: [40.684978, -73.998965],
		},
	},
	{
		id: 3,
		license_plate: "NY0003",
		battery_level: 65,
		in_use: false,
		model: "Niu",
		location: {
			type: "Point",
			coordinates: [40.683574, -73.990715],
		},
	},
	{
		id: 4,
		license_plate: "NY0004",
		battery_level: 34,
		in_use: false,
		model: "Niu",
		location: {
			type: "Point",
			coordinates: [40.67942, -73.983841],
		},
	},
	{
		id: 5,
		license_plate: "NY0005",
		battery_level: 20,
		in_use: false,
		model: "Niu",
		location: {
			type: "Point",
			coordinates: [40.676695, -73.988838],
		},
	},
	{
		id: 6,
		license_plate: "NY0006",
		battery_level: 15,
		in_use: false,
		model: "Niu",
		location: {
			type: "Point",
			coordinates: [40.675496, -73.99468],
		},
	},
	{
		id: 7,
		license_plate: "NY0007",
		battery_level: 90,
		in_use: false,
		model: "Niu",
		location: {
			type: "Point",
			coordinates: [40.678274, -74.001642],
		},
	},
	{
		id: 8,
		license_plate: "NY0008",
		battery_level: 9,
		in_use: false,
		model: "Niu",
		location: {
			type: "Point",
			coordinates: [40.678434, -73.997158],
		},
	},
	{
		id: 9,
		license_plate: "NY0009",
		battery_level: 90,
		in_use: false,
		model: "Niu",
		location: {
			type: "Point",
			coordinates: [40.683456, -74.002047],
		},
	},
	{
		id: 10,
		license_plate: "NY0010",
		battery_level: 22,
		in_use: true,
		model: "Niu",
		location: {
			type: "Point",
			coordinates: [40.677941, -73.982731],
		},
	},
	{
		id: 11,
		license_plate: "NY0011",
		battery_level: 76,
		in_use: false,
		model: "Niu",
		location: {
			type: "Point",
			coordinates: [40.673533, -73.981992],
		},
	},
	{
		id: 12,
		license_plate: "NY0012",
		battery_level: 90,
		in_use: false,
		model: "Niu",
		location: {
			type: "Point",
			coordinates: [40.668346, -73.976115],
		},
	},
	{
		id: 13,
		license_plate: "NY0013",
		battery_level: 2,
		in_use: false,
		model: "Niu",
		location: {
			type: "Point",
			coordinates: [40.669861, -73.989846],
		},
	},
	{
		id: 14,
		license_plate: "NY0014",
		battery_level: 13,
		in_use: false,
		model: "Niu",
		location: {
			type: "Point",
			coordinates: [40.673568, -74.000575],
		},
	},
	{
		id: 15,
		license_plate: "NY0015",
		battery_level: 17,
		in_use: false,
		model: "Niu",
		location: {
			type: "Point",
			coordinates: [40.676001, -73.987382],
		},
	},
];
