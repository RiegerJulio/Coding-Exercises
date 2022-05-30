import { Request, response, Response } from "express";
import { CreateUser } from '../CreateUser/CreateUser';
export class CreateUserController {
  constructor (private createUser: CreateUser) {}

  async execute(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    try {
      await this.createUser.execute({ name, email, password });
      return res.status(201).json();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}