// routes/interviewResult.js
import express from 'express';
import { createInterviewResult, deleteInterviewResult, getAllInterviewResults, getInterviewResultById, updateInterviewResult } from '../controllers/interviewResult.js';

const router = express.Router();

// Route to get all interview results
router.get('/', getAllInterviewResults);

// Route to create a new interview result
router.post('/', createInterviewResult);

// Route to get a single interview result by id
router.get('/:id', getInterviewResultById);

// Route to update an interview result
router.put('/:id', updateInterviewResult);

// Route to delete an interview result
router.delete('/:id', deleteInterviewResult);

export default router;
