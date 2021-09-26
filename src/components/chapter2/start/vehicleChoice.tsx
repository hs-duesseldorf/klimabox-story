import React from "react";

import styles from "./start.module.css";

export const VehicleChoice: React.FC<{ containerRef: React.MutableRefObject<null> }> = ({ containerRef }) => (
  <div
    className={`${styles.chapter2Choice} text-white absolute font-bold`}
  >
    <p ref={containerRef}>
      Wähle das Verkehrsmittel mit dem du am meisten unterwegs bist
    </p>
  </div>
);
