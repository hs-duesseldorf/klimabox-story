import React from "react";

import { TagData } from "../../../wp";
import { useFilterActions } from "../../filtering";
import styles from "./bar.module.css";

function TagButton({ term }: { term: TagData }) {
  const { addTag } = useFilterActions();
  return <button onClick={() => addTag(term)}>{term.name}</button>;
}

export const DetailBar: React.FC<{
  date: string;
  terms?: TagData[];
}> = ({ date, terms }) => (
  <div className="flex items-center justify-between">
    <div className={styles.tags}>
      {terms && terms.map((term, i) => <TagButton term={term} key={i} />)}
    </div>
    <div className={`${styles.date} text-text-muted leading-tight`}>
      {new Intl.DateTimeFormat("de-DE").format(new Date(date))}
    </div>
  </div>
);
