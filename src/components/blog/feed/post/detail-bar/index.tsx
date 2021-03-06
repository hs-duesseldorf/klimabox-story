import React from "react";

import { TagData } from "../../../wp";
import { useFilteredTags } from "../../fitering";
import { PostDate } from "../../../single/date";
import styles from "./bar.module.css";

function TagButton({ term }: { term: TagData }) {
  const addTag = useFilteredTags().add;
  return <button onClick={() => addTag(term)}>{term.name}</button>;
}

export const DetailBar: React.FC<{
  date: string;
  terms?: TagData[];
}> = ({ date, terms }) => (
  <div className="flex items-end justify-between">
    <div className={styles.tags}>
      {terms && terms.map((term, i) => <TagButton term={term} key={i} />)}
    </div>
    <div className="flex-shrink-0">
      <PostDate date={new Date(date)} />
    </div>
  </div>
);
