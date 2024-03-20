import application from '../models/Application.js';

// Create a new application
export const createApplication = async (req, res) => {
    try {
        const application = new application(req.body);
        await application.save();
        res.status(201).json(application);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all applications
export const getApplications = async (req, res) => {
    try {
        const applications = await application.find().populate('candidate position');
        res.json(applications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single application by ID
export const getApplicationById = async (req, res) => {
    try {
        const application = await application.findById(req.params.id).populate('candidate position');
        if (!application) return res.status(404).json({ message: 'Application not found' });
        res.json(application);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an application
export const updateApplication = async (req, res) => {
    try {
        const application = await application.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!application) return res.status(404).json({ message: 'Application not found' });
        res.json(application);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an application
export const deleteApplication = async (req, res) => {
    try {
        const application = await application.findByIdAndDelete(req.params.id);
        if (!application) return res.status(404).json({ message: 'Application not found' });
        res.json({ message: 'Application deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
