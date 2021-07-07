import React from "react";
import styles from "./spinner.module.css";

export function Spinner() {
  return <div className={`${styles.base} mx-auto pointer-events-none`} />;
}
