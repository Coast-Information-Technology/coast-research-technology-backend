import mongoose from "mongoose";

const RefereeSchema = new mongoose.Schema({
    firstName: {
        type: Number,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate", // Ensure this matches the name of your Candidate model
        required: true
    },
});

export default mongoose.model("Referee", RefereeSchema);
