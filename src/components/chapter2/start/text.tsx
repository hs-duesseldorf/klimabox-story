import React from "react";

import styles from "./start.module.css";

export const Text: React.FC = () => ( 
<div className={`${styles.text} absolute text-white`}>
    <p><b>Morgens, 8 Uhr</b></p>
    <p className="relative">Auf dem Weg zur Arbeit</p>
</div>
)