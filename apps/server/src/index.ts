import express, { Express } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import userDataRouter from './router/userDataRouter'
import userProductsRouter from './router/userProductsRouter'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(cors())

app.use('/api/user', userDataRouter)
app.use('/api/products', userProductsRouter)

app.listen(port, () => {
	console.log(`⚡️ Server is running at http://localhost:${port}`)
})
