// routes/client.js
import express from 'express';
import { createClient, getAllClient, getClientById, updateClient } from '../controllers/client.js';
const router = express.Router();

// Route to get all client companies
router.get('/', getAllClient);

// Route to create a new client company
router.post('/', createClient);

// Route to get a single client company by id
router.get('/:id', getClientById);

// Route to update a client company
router.put('/:id', updateClient);

// Route to delete a client company
// router.delete('/:id', deleteClient);

export default router;
