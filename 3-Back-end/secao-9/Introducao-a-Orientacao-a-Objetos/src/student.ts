export default class Students {
  private _registration: string;
  private _name: string;
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(registration: string, name: string) {
    this._registration = registration;
    this._name = name;
    this._worksGrades = [];
    this._examsGrades = [];
  }

  public getsumGrades(): number {
    const allGrades = [...this._examsGrades, ...this._worksGrades];
    const sumGrades = allGrades.reduce((acc, cur) => acc + cur, 0);
    return sumGrades;
  }

  public getAverageGrade(): number {
    const sumGrades = this.getsumGrades();
    const divider = this._examsGrades.length + this._worksGrades.length;
    return Math.round(sumGrades / divider);
  }

  public setWorkGrades(values: number[]): void {
    if (values.length > 2) {
      throw new Error(
        'A pessoa estudante só pode possuir 2 notas de trabalhos.',
      );
    }
    this._worksGrades = values;
  }

  public setExamsGrades(values: number[]): void {
    if (values.length > 4) {
      throw new Error(
        'A pessoa estudante só pode possuir 4 notas de provas.',
      );
    }
    this._examsGrades = values;
  }
}

const student1 = new Students('1202001011', 'Maria da Silva');
student1.setExamsGrades([25, 20, 23, 23]);
student1.setWorkGrades([45, 45]);

console.log(student1.getAverageGrade());
