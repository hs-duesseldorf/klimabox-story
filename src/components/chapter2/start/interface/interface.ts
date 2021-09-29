import { IntroTextData } from "../../../intro-text/interfaces/interface";
import { QuizStatisticsInterface } from "../../../quiz-statistics/interface/quiz-statistics-interface";

type NonEmptyArray<T> = [T, ...T[]];

export interface Stats {
  tabs: NonEmptyArray<{
    title: string | JSX.Element;
    unit: string | JSX.Element;
    data: NonEmptyArray<{
      textureURL: string;
      label: string | JSX.Element;
      value: number;
      bgIsDark?: boolean;
    }>;
  }>;
}

export interface Chapter2Content {
  introTextData: IntroTextData,
  quizData: QuizStatisticsInterface,
  stats: Stats,
}
