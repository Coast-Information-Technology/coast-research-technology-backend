import express from 'express';
import { createPlacement, deletePlacement, getPlacementById, getPlacements, updatePlacement } from '../controllers/placement.js';

const router = express.Router();

// Route to create a new placement
router.post('/', createPlacement);

// Route to get all placements
router.get('/', getPlacements);

// Route to get a single placement by id
router.get('/:id', getPlacementById);

// Route to update a placement
router.put('/:id', updatePlacement);

// Route to delete a placement
router.delete('/:id', deletePlacement);

export default router;
