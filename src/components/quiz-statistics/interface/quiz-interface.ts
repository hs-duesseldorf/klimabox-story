export interface Quizinterface {
  title: string,
  choices: {
    choice: string,
    answere: boolean,
    revealed: boolean,
  }[];
}
