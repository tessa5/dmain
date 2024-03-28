import { Schema, model, models} from "mongoose";

import { Types } from 'mongoose';

export interface IImage {
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: string;
    width?: number; // Optional because it's not marked as required
    height?: number; // Optional
    config?: object; // You might want to define a more specific type for this
    tranformationUrl: URL;
    aspectRatio?: string; // Optional
    color?: string; // Optional
    prompt?: string; // Optional
    author: Types.ObjectId; // Assuming you're using mongoose, this refers to another document
    createdAt?: Date; // Optional because it has a default value
    updatedAt?: Date; // Optional because it has a default value
}


const ImageSchema = new Schema({
    title: {type: String, required: true},
    transformationType: {type: String, required: true},
    publicId: {type: String, required: true},
    secureUrl: {type: String, required: true},
    width: {type: Number},
    height: {type: Number},
    config: {type: Object},
    tranformationUrl: {type: URL},
    aspectRatio: {type: String},
    color: {type: String},
    prompt: {type: String},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const Image = models?.Image || model('Image', ImageSchema);

export default Image;