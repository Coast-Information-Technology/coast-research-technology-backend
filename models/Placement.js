import mongoose from "mongoose";

const PlacementSchema = new mongoose.Schema(
    {
        candidate: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Candidate", // Ensure this matches the name of your Candidate model
            required: true
        },
        position: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "JobPosition", // Ensure this matches the name of your JobPosition model
            required: true
        },
        datePlaced: {
            type: Date,
            required: true
        },
        salaryOffer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Salary", // Ensure this matches the name of your Salary model
            required: true
        },
        ContractDetails: {
            type: String, // This can be a String or another schema if you need to store complex contract information
            required: true
        }
    },
    { timestamps: true } // This adds createdAt and updatedAt timestamps
);

export default mongoose.model("Placement", PlacementSchema);