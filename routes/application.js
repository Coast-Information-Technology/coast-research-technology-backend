import express from 'express';
import { createApplication, deleteApplication, getApplicationById, getApplications, updateApplication } from '../controllers/application.js';

const router = express.Router();


// Route to create a new application
router.post('/', createApplication);

// Route to get all application
router.get('/', getApplications);

// Route to get a single application by id
router.get('/:id', getApplicationById);

// Route to update a application
router.put('/:id', updateApplication);

// Route to delete a application
router.delete('/:id', deleteApplication);


export default router;
