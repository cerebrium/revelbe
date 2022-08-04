const express = require("express");
const router = express.Router();
const vehicleService = require("../services/vehicleService");

// Get vehicles
router.get("/", async function (req, res) {
	return res.json(await vehicleService.getVehicles());
});

// Create defaults
router.get("/createDefaults", async function (req, res) {
	return res.json(await vehicleService.createDefaults());
});

// create random vehicle
router.get("/random", async function (req, res) {
	return res.json(await vehicleService.createRandomVehicle());
});

// Get vehicle by id
router.get("/:id", async function (req, res) {
	return res.json(await vehicleService.getVehicleById(req.params.id));
});

// Create vehicle
router.post("/", async function (req, res) {
	let body = req.body;
	body.location = JSON.parse(body.location);
	return res.json(await vehicleService.addVehicle(body));
});

// Update vehicle
router.put("/:id", async function (req, res) {
	return res.json(await vehicleService.updateVehicle(req.params.id, req.body));
});

module.exports = router;
