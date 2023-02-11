import { Router } from 'express';
import homeController from '../controllers/HomeController';

const router = new Router();

router.post('/', homeController.store);
router.delete('/', homeController.delete);
router.put('/', homeController.update);

export default router;
