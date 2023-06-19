import express, {Router} from "express";
import {
    getCust,
    getCustById,
    CreateCust,
    UpdateCust,
    DeleteCust
} from "../controllers/CustomerControllers.js";

const router = express.Router();

router.get('/cust', getCust);
router.get('/cust/:id', getCustById);
router.post('/cust', CreateCust);
router.patch('/cust/:id', UpdateCust);
router.delete('/cust/:id', DeleteCust);

export default router;