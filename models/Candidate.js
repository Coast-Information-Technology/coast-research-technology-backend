import mongoose from "mongoose";

const CandidateSchema = new mongoose.Schema(
    {
        CandidateID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            unique: true
        },
        Name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        Phone: {
            type: String,
            required: true
        },
        Address: {
            type: String
        },
        Education: {
            type: String
        },
        Experience: {
            type: String
        },
        Resume: {
            type: String
        },
        Skills: {
            type: [SkillSchema],
            default: []
        }
    },
    { timestamps: true }
);

export default mongoose.model("Candidate", CandidateSchema);
