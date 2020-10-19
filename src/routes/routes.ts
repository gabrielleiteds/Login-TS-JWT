import { Response, Request, Router } from 'express';
import bcrypt from 'bcryptjs';
import UserController from '../controllers/UserController';
import AuthController from '../controllers/AuthController';

const routes = Router()

//CRUD for users
routes.get('/', UserController.index)
routes.post('/user', UserController.create)

//authenticate
routes.post('/auth', AuthController.authenticate)

export default routes; 