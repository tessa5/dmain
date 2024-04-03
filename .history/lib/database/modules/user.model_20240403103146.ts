import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    clerkId: {
        type: "string",
        required: true,
        unique: true, 
    },
    
})