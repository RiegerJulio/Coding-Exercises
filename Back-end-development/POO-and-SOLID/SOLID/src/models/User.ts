import { uuid } from 'uuidv4';

export class User {
  readonly id: string;
  name: string;
  email: string;
  password: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    
    if (!this.id) {
      this.id = uuid();
    }
  }
}