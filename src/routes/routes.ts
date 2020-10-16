import { Response, Request, Router } from 'express';
import bcrypt from 'bcryptjs';
import UserController from '../controllers/UserController';

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Hello World' })
})

routes.post('/user', UserController.create)

export default routes; 