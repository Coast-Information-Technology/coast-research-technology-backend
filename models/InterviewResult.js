import mongoose from "mongoose";

const InterviewResultSchema = new mongoose.Schema(
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
        ratings: {
            type: Number,
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
        notes: {
            type: String
        }
    },
    { timestamps: true }
);

export default mongoose.model("Interview_Result", InterviewResultSchema);
