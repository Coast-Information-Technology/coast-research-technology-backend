import mongoose from "mongoose";

const SalarySchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    frequency: {
        type: String,
        enum: ['per annum', 'per month', 'per week', 'per day', 'per hour'],
        required: true
    }
    basicSalary
});

export default mongoose.model("Salary", SalarySchema);
