import { Response, Request, Router } from 'express';
import bcrypt from 'bcryptjs';

//middleware
import AuthMiddleware from '../middleware/AuthMiddleware';

//controllers
import UserController from '../controllers/UserController';
import AuthController from '../controllers/AuthController';

const routes = Router()

//CRUD for users
routes.get('/', UserController.index)
routes.post('/user', UserController.create)

//authenticate
routes.post('/auth', AuthController.authenticate)


routes.use(AuthMiddleware) //rotas abaixo usarão autenticação
routes.get('/test', (request: Request, response: Response) => {
  response.send({ user: request.userId })
})

export default routes; 