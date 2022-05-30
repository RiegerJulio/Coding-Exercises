import { User } from '../models/User';

export interface IUserRepository {
  getByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}
