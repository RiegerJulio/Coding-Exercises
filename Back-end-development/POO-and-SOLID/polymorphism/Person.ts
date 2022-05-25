export default abstract class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.nameValidation(value);
    this._name = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this.birthDateValidation(value);
    this._birthDate = value;
  }
  
  public getAge(): number {
    return new Date().getFullYear() - this._birthDate.getFullYear();
  }

  private nameValidation(value: string): void {
    if (value.length < 3) {
      throw new Error('Name is too short');
    }
  }

  private birthDateValidation(value: Date): void {
    if (value > new Date()) {
      throw new Error('Birth date is not valid');
    }
  }
}