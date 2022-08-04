const express = require("express");
const router = express.Router();
const vehicleService = require("../services/vehicleService");
const shiftService = require("../services/shiftService");

// Get Shifts
router.get("/", async function (req, res) {
	return res.json(await shiftService.getShifts());
});

router.get("/:id/vehicles/", async function (req, res) {
	return res.json(await shiftService.getShiftVehiclesById(req.params.id));
});

router.get("/:id/vehicles/completed", async function (req, res) {
	let remainingVehicles = await shiftService.getShiftVehiclesById(
		req.params.id
	);
	if (remainingVehicles.length === 0) {
		return res.json({
			message: "All vehicles have been completed",
		});
	} else {
		return res.json({
			message: `Amount of remaining vehicles: ${remainingVehicles.length}`,
			vehicles: remainingVehicles,
		});
	}
});

router.get("/:id/vehicles/:vid", async function (req, res) {
	let visited = await shiftService.checkIfVehicleIdVisited(
		req.params.id,
		req.params.vid
	);

	return res.json({
		visited: visited,
	});
});

// create shift
router.post("/", async function (req, res) {
	// Find vehicles to add
	let twentyVehiclesArray = await vehicleService.findTwentyClosestVehicles(
		req.body.lat,
		req.body.long
	);

	// create the shift
	const shift = await shiftService.addShift(twentyVehiclesArray);

	// update the vehicles
	await vehicleService.setVehiclesAsBeingProcessed(
		twentyVehiclesArray,
		shift._id
	);

	// return the shift
	return res.json(shift);
});

module.exports = router;
