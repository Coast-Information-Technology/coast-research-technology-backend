import mongoose from "mongoose";

const ClientCompanySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        industry: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        contactPerson: {
            type: String,
            required: true
        },
        contactEmail: {
            type: String,
            required: true,
            unique: true
        },
        contactPhone: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("ClientCompany", ClientCompanySchema);
