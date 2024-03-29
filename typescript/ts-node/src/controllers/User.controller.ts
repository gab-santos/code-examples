import { Request, Response } from 'express'

import User from '../models/User.model'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()

    return res.json(users)
  }

  public async store (req:Request, res:Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.status(200).json(user)
  }
}

export default new UserController()
