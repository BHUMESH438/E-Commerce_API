import express from 'express';
import { isLoggedIns } from '../middlewares/isLoggedIn.js';
import { createCategoryCtrl, getCategoryCtrl, getSingleCategoryCtrl, updateCategoryCtrl, deleteCategoryCtrl } from '../controller/catogeryCntrl.js';
const categoryRoutes = express.Router();
categoryRoutes.post('/', isLoggedIns, createCategoryCtrl);
categoryRoutes.get('/', getCategoryCtrl);
categoryRoutes.get('/:id', getSingleCategoryCtrl);
categoryRoutes.put('/:id', isLoggedIns, updateCategoryCtrl);
categoryRoutes.delete('/:id/delete', isLoggedIns, deleteCategoryCtrl);
export default categoryRoutes;
