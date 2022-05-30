import { IUserRepository } from "../../repositories/IUserRepository"
import { ICreateUserDTO } from "./CreateUserDTO";
import { User } from "../../models/User";

export class CreateUser {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: ICreateUserDTO): Promise<void> {
    const checkExistance = await this.userRepository.getByEmail(data.email);

    if (checkExistance) {
      throw new Error("User already exists.");
    }

    const user = new User(data);

    await this.userRepository.save(user);
  }
}