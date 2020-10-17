import { Response, Request } from 'express';
import { getRepository } from "typeorm";
import * as yup from 'yup';

//models
import User from '../models/User';

export default {
  async create(request: Request, response: Response) {
    const repository = getRepository(User)
    const { name, email, password } = request.body;

    const data = { name, email, password };

    const userExists = await repository.findOne({
      where: {
        email
      }
    })

    if (userExists) {
      return response.sendStatus(409)
    }

    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().required(),
      password: yup.string().required()
    })

    await schema.validate(data, {
      abortEarly: false
    })

    const user = repository.create(data)

    await repository.save(user)

    return response.status(201).json(user);
  }
}