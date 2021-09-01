import { IntroTextData } from "../../../intro-text/interfaces/interface";
import { Quizinterface } from "../../../quiz-statistics/interface/quiz-interface";

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
};

export interface Chapter2Content {
  introTextData: IntroTextData,
  quizData: Quizinterface,
  stats: Stats,
}
