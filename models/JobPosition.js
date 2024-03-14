import mongoose from "mongoose";

const JobPositionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        requirements: {
            type: [SkillSchema],
            default: []
        },
        salary: {
            type: SalarySchema,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        jobType: {
            type: String,
            enum: ['Remote', 'Hybrid', 'Physical'],
            default: 'Physical'
        },
        status: {
            type: String,
            enum: ['Open', 'Closed'],
            default: 'Open'
        }
    },
    { timestamps: true }
);

export default mongoose.model("JobPosition", JobPositionSchema);