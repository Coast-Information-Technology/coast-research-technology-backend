// jobPositionRoutes.js
import express from 'express';
import { createJobPosition, deleteJobPosition, getAllJobPositions, getJobPositionById, updateJobPosition } from '../controllers/jobPosition.js';

const router = express.Router();

// Route to get all Job Positions
router.get('/', getAllJobPositions);

// Route to create a new Job Position
router.post('/', createJobPosition);

// Route to get a single Job Position by id
router.get('/:id', getJobPositionById);

// Route to update an Job Position
router.put('/:id', updateJobPosition);

// Route to delete an Job Position
router.delete('/:id', deleteJobPosition);

export default router;
