// controller/interviewResult.js
import InterviewResult from '../models/InterviewResult.js'; // Adjust the path as necessary

// Create a new Interview Result
export const createInterviewResult = async (req, res) => {
    try {
        const newResult = new InterviewResult(req.body);
        const savedResult = await newResult.save();
        res.status(201).json(savedResult);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Interview Results
export const getAllInterviewResults = async (req, res) => {
    try {
        const results = await InterviewResult.find().populate('candidate');
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single Interview Result by ID
export const getInterviewResultById = async (req, res) => {
    try {
        const result = await InterviewResult.findById(req.params.id).populate('candidate');
        if (!result) return res.status(404).json({ message: "Interview result not found" });
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an Interview Result
export const updateInterviewResult = async (req, res) => {
    try {
        const updatedResult = await InterviewResult.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedResult);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an Interview Result
export const deleteInterviewResult = async (req, res) => {
    try {
        await InterviewResult.findByIdAndDelete(req.params.id);
        res.json({ message: "Interview result deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
