import express from 'express'
import { registerValidation, loginValidation } from './validations/validations.js'
import mongoose from 'mongoose'
import cors from 'cors'
import { checkAuth, handleValidationErrors } from './utils/index.js'
import * as UserController from './controllers/UserController.js'

mongoose
	.connect(
		'mongodb+srv://admin:@cluster0.m8s97xd.mongodb.net/blog?retryWrites=true&w=majority',
	)
	.then(() => {
		console.log('DB ok')
	})
	.catch(err => console.log('DB ERRor', err))

const app = express()

app.use(express.json())

app.use(cors())

app.use('/uploads', express.static('uploads'))

app.get('/auth/me', checkAuth, UserController.getMe)
app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login)
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register)

app.listen(4444, err => {
	if (err) {
		console.log('Error')
	}
	console.log('server ok')
})
