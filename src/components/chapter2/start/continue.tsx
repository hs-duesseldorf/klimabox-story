
import React from "react";
import { Arrow } from './../../story-splash/arrow/index';
import styles from "./start.module.css";

export const Continue: React.FC = () => (
    <div className={`${styles.continue} absolute pt-32 pb-16 xs:pt-40 xs:pb-20 2xl:pt-48 2xl:pb-24`}>
        <p className={`${styles.headerline} text-white font-bold text-17`} >Kapitel 2</p>
        <div className="flex">
        <span className="mr-6 pt-3">
            <Arrow />
        </span>
            <h1
                className="text-white font-bold text-2xl xs:text-4xl xs:leading-snug 2xl:leading-snug 2xl:text-5xl"
                style={{ textShadow: "0 2px 5px black" }}
            >
                Zum Starten runterscrollen
            </h1>
        </div>
    </div>
)

