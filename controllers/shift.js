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
