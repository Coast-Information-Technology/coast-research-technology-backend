import express from 'express';
import { createCandidate, deleteCandidate, getCandidate, getCandidates, updateCandidate } from '../controllers/candidate.js';

// Adjust the path as necessary

const router = express.Router();

// Create a new candidate
router.post('/', createCandidate);


// Retrieve all candidates
router.get('/', getCandidates);

// Retrieve a single candidate by id
router.get('/:id', getCandidate);

// Update a candidate by id
router.put('/:id', updateCandidate);

// Delete a candidate by id
router.delete('/:id', deleteCandidate);

export default router;
