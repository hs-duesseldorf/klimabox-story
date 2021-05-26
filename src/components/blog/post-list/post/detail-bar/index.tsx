import React from "react";

import styles from "./bar.module.css";

export const DetailBar: React.FC<{
  date: string;
  term?: { name: string; slug: string };
}> = ({ date, term }) => (
  <div className="flex items-center justify-between">
    <div>
      {term && (
        <button className="bg-em2 hover:bg-em2-enhanced text-white rounded-xl px-3 py-0.5 cursor-pointer">
          {term.name}
        </button>
      )}
    </div>
    <div className={`${styles.date} text-text-muted leading-tight`}>
      {new Intl.DateTimeFormat("de-DE").format(new Date(date))}
    </div>
  </div>
);
