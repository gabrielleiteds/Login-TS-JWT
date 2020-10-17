import { Response, Request, Router } from 'express';
import bcrypt from 'bcryptjs';
import UserController from '../controllers/UserController';

const routes = Router()

//CRUD for users
routes.get('/', UserController.index)
routes.post('/user', UserController.create)

export default routes; 