import { NextResponse } from "next/server";
import clientPromise from "@/utils/mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const { username, email, password, action } = await request.json();
    const client = await clientPromise;
    const db = client.db("festino");
    const users = db.collection("users");

    if (action === "register") {
      // Check if user already exists
      const existingUser = await users.findOne({ email });
      if (existingUser) {
        return NextResponse.json(
          { error: "User already exists" },
          { status: 400 }
        );
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const result = await users.insertOne({
        username,
        email,
        password: hashedPassword,
        createdAt: new Date(),
        favorites: []
      });

      // Generate JWT token
      const token = jwt.sign(
        { userId: result.insertedId },
        process.env.JWT_SECRET || "your-secret-key",
        { expiresIn: "7d" }
      );

      return NextResponse.json({ token });
    }

    if (action === "login") {
      // Find user
      const user = await users.findOne({ email });
      if (!user) {
        return NextResponse.json(
          { error: "Invalid credentials" },
          { status: 401 }
        );
      }

      // Verify password
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        return NextResponse.json(
          { error: "Invalid credentials" },
          { status: 401 }
        );
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET || "your-secret-key",
        { expiresIn: "7d" }
      );

      return NextResponse.json({ token });
    }

    return NextResponse.json(
      { error: "Invalid action" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 
