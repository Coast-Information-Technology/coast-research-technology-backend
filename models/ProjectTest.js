import mongoose from "mongoose";

const InterviewSchema = new mongoose.Schema(
    {
        candidate: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Candidate",
            required: true
        },
        interviewer: {
            type: String,
            required: true
        },
        date: {
            type: Date,
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

export default mongoose.model("Interview", InterviewSchema);
