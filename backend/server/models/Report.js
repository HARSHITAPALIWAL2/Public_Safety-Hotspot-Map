import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: String,
    category: String,
    description: String,
    latitude: Number,
    longitude: Number,
    status: { type: String, default: "pending" }
}, { timestamps: true });

export default mongoose.model("Report", reportSchema);
