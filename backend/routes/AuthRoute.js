import express from "express";
import {Loginuser, logOut, Me} from "../controller/Auth.js";

const router = express.Router();

router.get('/me', Me);
router.post('/loginuser', Loginuser);
router.delete('/logout', logOut);

export default router;