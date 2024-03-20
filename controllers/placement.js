import Placement from '../models/Placement.js';

// Create a new placement
export const createPlacement = async (req, res) => {
    try {
        const placement = new Placement(req.body);
        await placement.save();
        res.status(201).json(placement);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all placements
export const getPlacements = async (req, res) => {
    try {
        const placements = await Placement.find().populate('candidate client position salaryOffer');
        res.json(placements);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single placement
export const getPlacementById = async (req, res) => {
    try {
        const placement = await Placement.findById(req.params.id).populate('candidate client position salaryOffer');
        if (!placement) return res.status(404).json({ message: 'Placement not found' });
        res.json(placement);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a placement
export const updatePlacement = async (req, res) => {
    try {
        const placement = await Placement.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!placement) return res.status(404).json({ message: 'Placement not found' });
        res.json(placement);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a placement
export const deletePlacement = async (req, res) => {
    try {
        const placement = await Placement.findByIdAndDelete(req.params.id);
        if (!placement) return res.status(404).json({ message: 'Placement not found' });
        res.json({ message: 'Placement deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
