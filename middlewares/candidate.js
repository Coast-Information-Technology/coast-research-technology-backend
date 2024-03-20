import Candidate from "../models/Candidate.js";
import { createError } from "../error.js";

export const getCandidateById = async (req, res, next) => {
    const candidateId = req.user.id;

    try {
        const candidate = await Candidate.findById(candidateIdId);
        if (!candidate) return next(createError(404, "Candidate not found!"));

        req.candidate = candidate; // Attach the candidate to req.candidate
        next();
    } catch (err) {
        next(err);
    }
};
