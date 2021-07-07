import React from "react";

import { TagData } from "../../../wp";
import styles from "./bar.module.css";

export const DetailBar: React.FC<{
  date: string;
  terms?: TagData[];
}> = ({ date, terms }) => (
  <div className="flex items-center justify-between">
    <div className={styles.tags}>
      {terms && terms.map((term, i) => <button key={i}>{term.name}</button>)}
    </div>
    <div className={`${styles.date} text-text-muted leading-tight`}>
      {new Intl.DateTimeFormat("de-DE").format(new Date(date))}
    </div>
  </div>
);
