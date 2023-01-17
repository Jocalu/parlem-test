import { Router } from 'express'
import userDataController from '../controllers/userDataController'

const userDataRouter = () => {
	const router = Router()

	router.route('/:customerId').get(userDataController.getUserByCustomerId)

	return router
}

export default userDataRouter()
