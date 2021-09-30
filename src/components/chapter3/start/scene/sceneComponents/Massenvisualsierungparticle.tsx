import React from "react";
import img from "../../asset/kapitel3_particle.png"
import styles from "../../start.module.css";

export const Massenvisualsierungparticle: React.FC =()=> {
  const animationDelay = Array.from(Array(3))
  const offset = Array.from(Array(9))
  const particleCount = Array.from(Array(15));
  return(
    <div className={"w-full h-full absolute"}>
      {
        particleCount.map((_, index) => {
          return(
            <img key={index} src={img} alt="smartphone"
                 className={`absolute ${styles.mParticle}`}
                 style={{animationDelay:`${Math.random() * animationDelay.length}s`,
                   left: `${Math.random() * offset.length * 10}%`}}/>
          )
        })
      }
    </div>
  )
}