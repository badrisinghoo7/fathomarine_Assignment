import User from "../Models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export const signup = async (req, res) => {
  try {
    const { email, password,name } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({name, email, password: hashedPassword });
    await user.save();
    return res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Server error.", error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }
    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: "1d" });
    return res.status(200).json({ message: "Login successful.", token ,user});
  } catch (error) {
    return res.status(500).json({ message: "Server error.", error: error.message });
  }
};

// Example CRUD operations (Read, Update, Delete)
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found." });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Server error.", error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updates = req.body;
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }
    const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true }).select("-password");
    if (!user) return res.status(404).json({ message: "User not found." });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Server error.", error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found." });
    return res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Server error.", error: error.message });
  }
};
