// controllers/client.js

// Create a new Client Company
export const createClient = async (req, res) => {
    try {
        const newCompany = new ClientCompany(req.body);
        const savedCompany = await newCompany.save();
        res.status(201).json(savedCompany);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Client Companies
export const getAllClient = async (req, res) => {
    try {
        const companies = await ClientCompany.find();
        res.json(companies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single Client Company by ID
export const getClientById = async (req, res) => {
    try {
        const company = await ClientCompany.findById(req.params.id);
        if (!company) return res.status(404).json({ message: "Company not found" });
        res.json(company);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a Client Company
export const updateClient = async (req, res) => {
    try {
        const updatedCompany = await ClientCompany.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCompany);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a Client Company
// export const deleteClient = async (req, res) => {
//     try {
//         await ClientCompany.findByIdAndDelete(req.params.id);
//         res.json({ message: "Company deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
