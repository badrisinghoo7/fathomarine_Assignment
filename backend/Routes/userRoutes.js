import express from "express";
import { signup, login, getUser, updateUser, deleteUser } from "../Controllers/userController.js";

const authRouter = express.Router();

// Signup
authRouter.post("/signup", signup);
// Login
authRouter.post("/login", login);
// Get user by ID
authRouter.get("/:id", getUser);
// Update user by ID
authRouter.put("/:id", updateUser);
// Delete user by ID
authRouter.delete("/:id", deleteUser);

export default authRouter;
