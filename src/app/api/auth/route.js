import { NextResponse } from "next/server";
import clientPromise from "@/utils/mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import { verify } from "jsonwebtoken";

export async function POST(request) {
  try {
    const { fullName, username, email, password, action } = await request.json();
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
        fullName,
        username,
        email,
        profilePicture: "",
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


    if( action === "favorite") {
  const { email, incomingVenue } = await request.json();

    // Fetch user
    const user = await user.findOne({ email });

    if (!user) {
        return new Response("User not found", { status: 404 });
    }

    // Add to favorites if not already there
    if (!user.favorites.includes(incomingVenue)) {
        user.favorites.push(incomingVenue);
        await user.save();
    }

    return new Response("Venue added to favorites", { status: 200 }); 

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


export async function GET(request) {
  try {
    const token = request.headers.get("authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "your-secret-key");

    const client = await clientPromise;
    const db = client.db("festino");
    const users = db.collection("users");

    const user = await users.findOne(
      { _id: new ObjectId(decoded.userId) },
      { projection: { password: 0 } }
    );

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error("Fetch user error:", error);
    return NextResponse.json({ error: "Invalid token or server error" }, { status: 401 });
  }
}


export async function PUT(req) {
    const client = await clientPromise;
    const db = client.db("festino");
    const users = db.collection("users");

const authHeader = req.headers.get('authorization');
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ message: 'No token provided' }, { status: 401 });
  }

  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    const { fullName, username, email, profilePicture } = await req.json();

if (!ObjectId.isValid(decoded.userId)) {
  return NextResponse.json({ message: 'Invalid user ID in token' }, { status: 400 });
}

const updatedUser = await users.findOneAndUpdate(
  { _id: new ObjectId(decoded.userId) },
  { $set: { fullName, username, email, profilePicture } },
  { returnDocument: 'after' }
);

    if (!updatedUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user: updatedUser }, { status: 200 });
  } catch (err) {
    console.error('Update error:', err);
    return NextResponse.json({ message: 'Invalid or expired token' }, { status: 401 });
  }
}
