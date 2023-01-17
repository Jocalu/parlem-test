import { Router } from 'express'
import userProductsController from '../controllers/userProductsController'

const userProductsRouter = () => {
	const router = Router()

	router
		.route('/:customerId')
		.get(userProductsController.getUserProductsByCustomerId)

	return router
}

export default userProductsRouter()
