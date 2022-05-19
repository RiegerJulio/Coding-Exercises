import { Pool, ResultSetHeader } from "mysql2/promise";
import User from '../interfaces/userInterface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllUsers(): Promise<User[]> {
    const result = await this.connection.execute('SELECT * FROM users');
    const [rows] = result
    return rows as User[];
  }

  public async createUser(user: User): Promise<User> {
    const { id, name, email, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO user (id, name, email, password) VALUES (?, ?, ?, ?)', [id, name, email, password]
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }

  public async updateUser(user: User): Promise<User> {
    const { id, name, email, password } = user;
    await this.connection.execute<ResultSetHeader>(
      'UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?', [name, email, password, id]
    );
    // const [dataUpdated] = result;
    // const { affectedRows } = dataUpdated;
    return { ...user };
  }

  public async deleteUser(id: number): Promise<User> {
    const result = await this.connection.execute<ResultSetHeader>(
      'DELETE FROM user WHERE id = ?', [id]
    );
    return { id, name: '', email: '', password: '' };
  }
}
