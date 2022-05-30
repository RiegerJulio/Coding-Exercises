import { uuid } from 'uuidv4';

export class User {
  readonly id: string;
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string, id?: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;

    if (!this.id) {
      this.id = uuid();
    }
  }
}