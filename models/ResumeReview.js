import mongoose from "mongoose";

const ResumeReviewSchema = new mongoose.Schema(
    {
        candidate: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Candidate",
            required: true
        },
        reviewer: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
            default: false
        },
        result: {
            type: String,
            enum: ["Pass", "Fail", "Pending"],
            default: "Pending"
        },
        feedback: {
            type: String
        },
        ratings: {
            type: number,
            required: true
        },
        notes: {
            type: String
        }
    },
    { timestamps: true }
);

export default mongoose.model("Resume_Review", ResumeReviewSchema);
