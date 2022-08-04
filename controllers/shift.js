const express = require("express");
const router = express.Router();
const vehicleService = require("../services/vehicleService");

// Get vehicles
router.post("/", async function (req, res) {
	return res.json(
		await vehicleService.findTwentyClosestVehicles(req.body.lat, req.body.long)
	);
});

module.exports = router;
