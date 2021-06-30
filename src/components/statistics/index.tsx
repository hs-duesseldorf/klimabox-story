import React from "react";
import cn from "classnames";

import { useWasOnScreen } from "./screen";

import styles from "./stats.module.css";

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
  const ref = React.useRef(null);
  const wasOnScreen = useWasOnScreen(ref);
  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  const max = React.useMemo<number>(() => {
    let max = 0;
    activeTab.data.forEach(({ value }) => {
      if (value > max) max = value;
    });
    return max;
  }, [activeTab]);

  const { data, unit } = activeTab;

  return (
    <div ref={ref}>
      <div className="bg-bg-alt rounded-t-xl rounded-br-xl p-8">
        <div className="pr-40 -mb-4">
          {data.map(({ label, textureURL, value, bgIsDark }, i) => (
            <div
              className={cn(
                styles.bar,
                wasOnScreen && styles.active,
                "relative rounded-lg text-lg px-4 py-2 mb-4 shadow-lg"
              )}
              style={{
                backgroundImage: `url(${textureURL})`,
                width: `${Math.floor(10000 * (value / max)) / 100}%`,
              }}
            >
              <span
                className={`font-bold line-clamp-1 ${
                  bgIsDark ? "text-white" : "text-black"
                }`}
                style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
              >
                {label}
              </span>
              <div className="absolute inset-y-0 flex items-center w-40 pl-4 left-full">
                {value} {unit}
              </div>
            </div>
          ))}
        </div>
      </div>
      {tabs.map((tab, i) => (
        <button
          className={cn(
            styles.button,
            activeTab === tab && styles.active,
            "bg-bg-alt px-8 py-2 inline-block transition",
            (tabs.length === 1 || i < tabs.length - 1) && "rounded-bl-xl",
            i === tabs.length - 1 && "rounded-br-xl"
          )}
          key={i}
          onClick={() => setActiveTab(tab)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
}
