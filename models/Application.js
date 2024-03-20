import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
    {
        candidate: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Candidate",
            required: true
        },
        position: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "JobPosition",
            required: true
        },
        dateApplied: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            enum: ["Pending", "Reviewed", "Rejected", "Accepted"],
            default: "Pending"
        },
    },
    { timestamps: true }
);

export default mongoose.model("Application", ApplicationSchema);