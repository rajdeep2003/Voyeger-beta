const express = require("express");
const bookingrouter = express.Router();
  
const { createBooking, cancelBooking, getMyBookings } = require("../controller/bookingcontroller");
const { authMiddleware } = require("../middleware/authMiddleware");

bookingrouter.post("/booking",  authMiddleware,  createBooking);        // POST /api/bookings
bookingrouter.delete("/cancel", authMiddleware,  cancelBooking);      // DELETE /api/bookings
bookingrouter.get("/mybookingdetails", authMiddleware,  getMyBookings);       // GET /api/bookings/my

module.exports = bookingrouter;
