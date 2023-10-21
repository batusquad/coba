import  express  from "express";
import { 
    getUsers, 
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
    createSPB,
    getSPBById,
    getSPB,
    updateSPB,
    deleteSPB,
    getSPD,
    getSPDById,
    createSPD,
    updateSPD,
    deleteSPD,
    getSPRR,
    getSPRRById,
    createSPRR,
    updateSPRR,
    deleteSPRR,
    getSUK,
    getSUKById,
    createSUK,
    updateSUK,
    deleteSUK,
    getSUR,
    createSUR,
    updateSUR,
    deleteSUR,
    getSURById
} from "../controller/UserController.js";


const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.get('/spb', getSPB);
router.get('/spb/:id', getSPBById);
router.post('/spb', createSPB);
router.patch('/spb/:id', updateSPB);
router.delete('/spb/:id', deleteSPB);
router.get('/spd', getSPD);
router.get('/spd/:id', getSPDById);
router.post('/spd', createSPD);
router.patch('/spd/:id', updateSPD);
router.delete('/spd/:id', deleteSPD);
router.get('/sprr', getSPRR);
router.get('/sprr/:id', getSPRRById);
router.post('/sprr', createSPRR);
router.patch('/sprr/:id', updateSPRR);
router.delete('/sprr/:id', deleteSPRR);
router.get('/suk', getSUK);
router.get('/suk/:id', getSUKById);
router.post('/suk', createSUK);
router.patch('/suk/:id', updateSUK);
router.delete('/suk/:id', deleteSUK);
router.get('/sur', getSUR)
router.get('/sur/:id', getSURById);
router.post('/sur', createSUR);
router.patch('/sur/:id', updateSUR);
router.delete('/sur/:id', deleteSUR);

export default router;