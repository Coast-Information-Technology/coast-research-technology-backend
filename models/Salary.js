import mongoose from "mongoose";

export const SalarySchema = new mongoose.Schema({
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
    },
    basicSalary: {
        type: Number,
    },
    houseRentAllowance: {
        type: Number,
    },
    transportation: {
        type: Number,
    },
    hmo: {
        type: Number,
    },
    pension: {
        type: Number,
    },
    paye: {
        type: Number,
    },
    others: {
        type: Number,
    }
});
