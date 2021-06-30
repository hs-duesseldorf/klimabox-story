type NonEmptyArray<T> = [T, ...T[]];

type StatisticsProps = {
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

export function Statistics({ tabs }: StatisticsProps): JSX.Element {
  return (
    <div>
      <div className="bg-bg-alt rounded-t-xl rounded-br-xl p-8">
        {tabs.map(({ data, unit }, i) => {
          let max = 0;
          data.forEach(({ value }) => {
            if (value > max) max = value;
          });

          return (
            <div className="pr-40 -mb-4" key={i}>
              {data.map(({ label, textureURL, value, bgIsDark }, i) => (
                <div
                  className="relative rounded-lg text-lg px-4 py-2 mb-4 shadow-lg"
                  style={{
                    backgroundSize: "auto 100%",
                    backgroundImage: `url(${textureURL})`,
                    width: `${Math.floor(10000 * (value / max)) / 100}%`,
                  }}
                >
                  <span
                    className={`font-bold ${
                      bgIsDark ? "text-white" : "text-black"
                    }`}
                  >
                    {label}
                  </span>
                  <div className="absolute inline-block w-40 pl-4 left-full">
                    {value} {unit}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
      {tabs.map(({ title }, i) => (
        <div className="bg-bg-alt rounded-b-xl px-8 pb-2 inline-block" key={i}>
          {title}
        </div>
      ))}
    </div>
  );
}
