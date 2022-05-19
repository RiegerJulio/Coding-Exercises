import Person from './Person';

class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public set enrollment(value: string){
    this.enrollmentValidation(value);
    this._enrollment = value;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }

  public set examsGrades(value: number[]){
    this.examsGradesValidation(value);
    this._examsGrades = value;
  }

  public get worksGrades(): number[] {
    return this._worksGrades;
  }

  public set worksGrades(value: number[]){
    this.worksGradesValidation(value);
    this._worksGrades = value;
  }
  
  public generateEnrollment(): string {
    const enrollment = Math.random().toString(36).substring(2, 18);
    return enrollment;
  }

  public enrollmentValidation(value: string): void {
    if (value.length < 16) {
      throw new Error('Enrollment is too short');
    }
  }

  public examsGradesValidation(value: number[]): void {
    if (value.length > 4) {
      throw new Error('Exams grades are too many');
    }
  }

  public worksGradesValidation(value: number[]): void {
    if (value.length > 2) {
      throw new Error('Works grades are too many');
    }
  }
}