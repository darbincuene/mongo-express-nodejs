import { Router } from 'express'
import Shirt_listController from '../controllers/shirt_list.js'

const router = Router()

router.get('/', Shirt_listController.getShirt_lists)
router.get('/:id?', Shirt_listController.getShirt_list)
router.post('/save',Shirt_listController.saveShirt_list)
router.put('/edit/:id?',Shirt_listController.updateShirt_list)
router.delete('/delete/:id?',Shirt_listController.deleteShirt_list)

export default router