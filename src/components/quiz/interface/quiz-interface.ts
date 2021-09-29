export interface QuizInterface {
  question: string,
  answers: {
    text: string,
    correctAnswer: boolean,
  }[],
}
