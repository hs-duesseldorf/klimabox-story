export interface Stats {
  content: [
    {
      title: string | JSX.Element;
      unit: string | JSX.Element;
      data: [
        {
          textureURL: string;
          label: string | JSX.Element;
          value: number;
          bgIsDark?: boolean;
        }
      ];
    }
  ];
}
