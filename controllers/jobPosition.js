// controller/jobPosition.js
import JobPosition from '../models/JobPosition.js'; // Adjust the path as necessary

// Create a new Job Position
export const createJobPosition = async (req, res) => {
    try {
        const newJobPosition = new JobPosition(req.body);
        const savedJobPosition = await newJobPosition.save();
        res.status(201).json(savedJobPosition);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Job Positions
export const getAllJobPositions = async (req, res) => {
    try {
        const positions = await JobPosition.find();
        res.json(positions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single Job Position by ID
export const getJobPositionById = async (req, res) => {
    try {
        const position = await JobPosition.findById(req.params.id);
        if (!position) return res.status(404).json({ message: "Job position not found" });
        res.json(position);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a Job Position
export const updateJobPosition = async (req, res) => {
    try {
        const updatedPosition = await JobPosition.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPosition);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a Job Position
export const deleteJobPosition = async (req, res) => {
    try {
        await JobPosition.findByIdAndDelete(req.params.id);
        res.json({ message: "Job position deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
