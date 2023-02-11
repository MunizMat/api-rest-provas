import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Esses dois provavelmente não seriam utilizados em um sistema real de usuários
// router.get('/', UserController.index);
router.get('/', UserController.show);

router.post('/', UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;
