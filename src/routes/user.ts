import { Router } from 'express';

import { all, remove, testResponse, changeName, changeEmail, changePassword, changeRole } from '../controller/UserController';
import { deserializeUser } from '../middleware/deserializeUser';
import { requireUser } from '../middleware/requireUser';
import { requireAdmin, requireSelfOrAdmin } from '../middleware/roleValidations';

const router = Router();

router.use(deserializeUser, requireUser);

router.route('/all').get(all);
router.put('/update/userName', changeName);
router.put('/update/email', changeEmail);
router.put('/update/password', changePassword);
router.put('/update/role', requireAdmin, changeRole);
router.delete('/remove', requireSelfOrAdmin, remove);

router.post('/testResponse', testResponse);

export default router;
