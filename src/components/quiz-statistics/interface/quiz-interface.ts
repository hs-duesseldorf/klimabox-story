export interface Quizinterface {
  title: string,
  choices: {
    choice: string,
    answere: boolean,
    revealed: boolean,
  }[],
  quizContainerStyle: string,
  quizTitleStyle: string,
  quizQuestionmarkStyle: string,
  quizStyle: string,
  quizQuestionStyle: string,
}
