const express = require("express");
const bookingrouter = express.Router();

// Bookings
const { createBooking, cancelBooking, getMyBookings } = require("../controller/bookingcontroller");
const { authMiddleware } = require("../middleware/authMiddleware");

// Souvenirs
const { createSouvenir, getSouvenirsByPlace, getAllSouvenirs } = require("../controller/Souviners");

bookingrouter.post("/booking", authMiddleware, createBooking);
bookingrouter.delete("/cancel", authMiddleware, cancelBooking);
bookingrouter.get("/mybookingdetails", authMiddleware, getMyBookings);

// Souvenirs
bookingrouter.post("/createsouvenir", authMiddleware, createSouvenir);
bookingrouter.get("/souvenirs/place/:place", getSouvenirsByPlace);
bookingrouter.get("/souvenirs/getallsouviners", getAllSouvenirs);

module.exports = bookingrouter;
