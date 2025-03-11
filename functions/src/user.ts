import { db } from "./config";
import { Request, Response } from "express";

/**
 * ✅ API: Store user metadata in Firestore (POST /register)
 */
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { uid, email, displayName } = req.body;

    // Validate required fields
    if (!uid || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Optional: Check if this user already exists
    const existingUser = await db.collection("users").doc(uid).get();
    if (existingUser.exists) {
      return res.status(409).json({ error: "User already exists" });
    }

    // Create user document with additional metadata
    const userRef = db.collection("users").doc(uid);
    await userRef.set({
      uid,
      email,
      displayName,
      createdAt: new Date(),
    });

    return res.json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("User Registration Error:", error);
    return res.status(500).json({ error: "Failed to register user" });
  }
};
