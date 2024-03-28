import { Schema} from "mongoose";

const ImageSchema = new Schema({
    title: {type: String, required: true},
    transformationType: {type: String, required: true}
})