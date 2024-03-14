import mongoose from "mongoose";

const VerbalTestSchema = new mongoose.Schema(
    {
        candidate: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Candidate",
            required: true
        },
        reviewer1: {
            type: String,
            required: true
        },
        reviewer2: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
            default: false
        },
        timeStarted: {
            type: Date,
        },
        timeEnded: {
            type: Date,
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

export default mongoose.model("VerbalTest", VerbalTestSchema);
