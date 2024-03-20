import mongoose from "mongoose";
import { EducationSchema } from "./Education.js";
import { ExperienceSchema } from "./Experience.js";
import { SkillSchema } from "./Skill.js";

const CandidateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String
        },
        educations: {
            type: [EducationSchema],
            default: []
        },
        experiences: {
            type: [ExperienceSchema],
            default: []
        },
        skills: {
            type: [SkillSchema],
            default: []
        },
        resume: {
            type: String
        }
    },
    { timestamps: true }
);

export default mongoose.model("Candidate", CandidateSchema);
