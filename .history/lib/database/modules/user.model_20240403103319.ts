import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    clerkId: {
        type: "string",
        required: true,
        unique: true, 
    },
    email: {
        type: "string",
        required: true,
        unique: true,
    },
    username: {
        type: "string",
        required: true,
        unique: true,
    },
    photo: {
        type: "string",
        required: true,
    },
    first
})