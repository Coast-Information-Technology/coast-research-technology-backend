import Candidate from '../models/Candidate.js'; // Assuming the model file is named Candidate.js

// Create a new Candidate
export const createCandidate = async (req, res) => {
    try {
        const candidate = new Candidate(req.body);
        await candidate.save();
        res.status(201).send(candidate);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all candidates
export const getCandidates = async (req, res) => {
    try {
        const candidates = await Candidate.find({});
        res.status(200).send(candidates);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get single candidate
export const getCandidate = async (req, res) => {
    try {
        const candidate = await Candidate.findById(req.params.id);
        if (!candidate) {
            return res.status(404).send();
        }
        res.send(candidate);
    } catch (error) {
        res.status(500).send(error);
    }
};

// update a candidate
export const updateCandidate = async (req, res) => {
    try {
        const candidate = await Candidate.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!candidate) {
            return res.status(404).send();
        }
        res.send(candidate);
    } catch (error) {
        res.status(400).send(error);
    }
};

// delete a candidate
export const deleteCandidate = async (req, res) => {
    try {
        const candidate = await Candidate.findByIdAndDelete(req.params.id);
        if (!candidate) {
            return res.status(404).send();
        }
        res.send(candidate);
    } catch (error) {
        res.status(500).send(error);
    }
};
