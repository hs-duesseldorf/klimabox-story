import styles from "./date.module.css";

export function PostDate({ date }: { date: Date }): JSX.Element {
  return (
    <div className={styles.base}>
      {new Intl.DateTimeFormat("de-DE").format(new Date(date))}
    </div>
  );
}
