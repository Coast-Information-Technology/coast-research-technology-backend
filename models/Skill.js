import mongoose from "mongoose";

export const SkillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    proficiency: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        default: 'Intermediate'
    },
    candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate",
        required: true
    },
});
