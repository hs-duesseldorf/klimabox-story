import React, { RefObject, useRef } from "react";
import Plx from "react-plx";

import imgMassenvisualiserung from "../../asset/kapitel3_massenvisualisierung.png"
import styles from "../../start.module.css"
import { Massenvisualsierungparticle } from "./Massenvisualsierungparticle";

const useDetectParticleEffect =  (setShowEffect: React.Dispatch<React.SetStateAction<boolean>>) => {
  React.useEffect(()=>{
    const scrollHandle = () => {
      const clientHeight = document.documentElement.clientHeight;
      const scrollPosition = document.documentElement.scrollTop;
      setShowEffect( clientHeight * 27 <= scrollPosition &&  scrollPosition <= clientHeight * 32)
    }
    window.addEventListener("scroll", scrollHandle);
    return () => window.removeEventListener("scroll", scrollHandle);
  },[setShowEffect])
}

const useElementOnScreen = (
  elementRef: RefObject<Element>,
  root: null,
  rootMargin: "0px",
  threshold: 0
) => {
  const [entry, setEntry] = React.useState<IntersectionObserverEntry>();

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  React.useEffect(() => {
    const node = elementRef?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport || !node) return;
    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);
    observer.observe(node);
    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin]);
  return entry;
};

export const Massenvisualisierung: React.FC<{parallaxData:[]}> = ({parallaxData}) => {
  const [showEffect, setShowEffect] = React.useState(false);
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
  useDetectParticleEffect(setShowEffect);

  const entry = useElementOnScreen(containerRef, null, "0px", 0);
  const entry2 = useElementOnScreen(containerRef2, null, "0px", 0);
  React.useEffect(() => {
    if(entry && entry2){
      setShowEffect(s => s || entry.isIntersecting || entry2.isIntersecting);
    }
  }, [entry, entry2 ]);

  return(
    <div className={'w-full h-full absolute'}>
      <Plx className ={`absolute w-full h-full ${styles.mContainer}`} parallaxData={parallaxData} animateWhenNotInViewport={true}>
          <img ref={containerRef} src={imgMassenvisualiserung} alt="massenvisualsierung" className={`${styles.massenvisualsierung1} absolute`}/>
          <img ref={containerRef2} src={imgMassenvisualiserung} alt="massenvisualsierung" className={`${styles.massenvisualsierung2} absolute`}/>
      </Plx>
      {showEffect? <Massenvisualsierungparticle></Massenvisualsierungparticle>:null}
      <Plx className ={`absolute w-full h-full ${styles.mContainer}`} parallaxData={parallaxData} animateWhenNotInViewport={true}>
        <div className={`w-full absolute ${styles.mText}`}>
          19,4 kg Elektroschrott pro Kopf (ca. 120 Smartphones)
        </div>
      </Plx>
    </div>
  )
}