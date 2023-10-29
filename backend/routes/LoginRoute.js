import express from "express";
import {
    getLogin,
    getLoginById,
    createLogin,
    updateLogin,
    deleteLogin
} from "../controller/Login.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/login', verifyUser, adminOnly, getLogin);
router.get('/login/:id', verifyUser, adminOnly, getLoginById);
router.post('/login', verifyUser,  createLogin);
router.patch('/login/:id', verifyUser, adminOnly,  updateLogin);
router.delete('/login/:id', verifyUser, adminOnly, deleteLogin);

export default router;