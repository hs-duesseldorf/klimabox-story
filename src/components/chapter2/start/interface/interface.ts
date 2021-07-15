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
