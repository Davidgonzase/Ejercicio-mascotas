import mongoose from "mongoose";
import { Pet } from "../types.ts";

const Schema = mongoose.Schema; 
const MascotSchema = new Schema(
  {
    name:{type:String,required:true},
    breed:{type:String,required:true},
  },
  { timestamps: true }
);

export type MascotSchema = mongoose.Document & Omit<Pet,"id">;
export default mongoose.model<MascotSchema>('Mascot', MascotSchema);