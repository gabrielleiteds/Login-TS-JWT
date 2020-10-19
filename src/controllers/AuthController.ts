import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';

//model
import User from '../models/User';

class AuthController {
  async authenticate(request: Request, response: Response) {
    const { email, password } = request.body;

    const repository = getRepository(User);

    const user = await repository.findOne({
      where: {
        email
      }
    })

    if (!user) {
      return response.status(401).json({ message: 'User no exist' })
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      return response.sendStatus(401)
    }

    const token = jwt.sign({ id: user.id }, `${process.env.SECRET}`, {
      expiresIn: '1d'
    })

    user.password = ""; 

    return response.json({
      user,
      token
    })
  }
}

export default new AuthController(); 