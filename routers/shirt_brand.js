import { Router } from 'express'
import Shirt_brandController from '../controllers/shirt_list.js'

const routers = Router()

routers.get('/', Shirt_brandController.getShirt_brands)
routers.get('/:id?', Shirt_brandController.getShirt_brand)
routers.post('/save',Shirt_brandController.saveShirt_brand)
routers.put('/edit/:id?',Shirt_brandController.updateShirt_brand)
routers.delete('/delete/:id?',Shirt_brandController.deleteShirt_brand)

export default routers