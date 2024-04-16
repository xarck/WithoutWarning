import express from "express";
import { register, login } from "../Controller/AdminController.js";

const adminRoute = express.Router();

// Define the route for registration
adminRoute.route('/register').post(register);
adminRoute.route('/login').post(login);

// Export the router
export default adminRoute;

// everything ok