import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/userService';

export default class UserController {

  constructor(private userService = new UserService()) { }

  public async getAllUsers(req: Request, res: Response): Promise<void> {
    const users = await this.userService.getAllUsers();
    res.status(StatusCodes.OK).json(users);
  }

  public async createUser(req: Request, res: Response): Promise<void> {
    const user = await this.userService.createUser(req.body);
    res.status(StatusCodes.CREATED).json(user);
  }

  public async updateUser(req: Request, res: Response): Promise<void> {
    const user = await this.userService.updateUser(req.body);
    res.status(StatusCodes.OK).json(user);
  }

  public async deleteUser(req: Request, res: Response): Promise<void> {
    const userId: any = req.params.id;
    const user = await this.userService.deleteUser(userId);
    res.status(StatusCodes.OK).json(user);
  }
}
