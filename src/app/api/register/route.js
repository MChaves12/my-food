import User from "@/app/models/User.js";
import mongoose from "mongoose"

export async function POST(req) {

    const user = await req.json();
    mongoose.connect(process.env.MONGO_URL);
    const createdUser = await User.create(user);
    return Response.json(createdUser);
};