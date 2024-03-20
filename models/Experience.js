import mongoose from "mongoose";

export const ExperienceSchema = new mongoose.Schema(
    {
        jobTitle: {
            type: String,
            required: true
        },
        employer: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        country: {
            type: String,
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        candidate: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Candidate",
            required: true
        },
    });

