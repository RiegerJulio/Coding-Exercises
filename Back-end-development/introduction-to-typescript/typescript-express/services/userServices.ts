import connection from "../models/connection";
import UserModel from "../models/userModel";
import User from "../interfaces/userInterface";

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAllUsers(): Promise<User[]> {
    const result = await this.model.getAllUsers();
    return result;
  }

  public async createUser(user: User): Promise<User> {
    const result = await this.model.createUser(user);
    return result;
  }

  public async updateUser(user: User): Promise<User> {
    const result = await this.model.updateUser(user);
    return result;
  }

  public async deleteUser(id: number): Promise<User> {
    const result = await this.model.deleteUser(id);
    return result;
  }
}