import { Schema, model, models } from "mongoose"

const TransactionSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    stripeId: {
        type: String,
        required: true,
        
    }
})