import React from "react";
import img from "../../asset/kapitel3_smartphonePath.png";
import imgApp from "../../asset/kapitel3_app.png"
import imgAppSelection from "../../asset/kapitel3_appSelection.png";
import imgAppScreen from  "../../asset/kapitel3_appScreen.png"
import imgBattery from "../../asset/kapitel3_battery.png";
import styles from "../../start.module.css";
import Plx from "react-plx";
import { Stats } from "../../../../chapter2/start/interface/interface";
import FernVerkehrTexture from "../../../../chapter2/start/asset/FernverkehrTexture.png";
import TrainTexture from "../../../../chapter2/start/asset/TrainTexture.png";
import BicycleTexture from "../../../../chapter2/start/asset/BicycleTexture.png";
import { Statistics } from "../../../../statistics";

export const SmartphonePath: React.FC<{parallaxDataSmartphone:[], parallaxDataSmartIcon: []}> = ({ parallaxDataSmartphone, parallaxDataSmartIcon }) => {
  const [transformOrigin, setTransformOrigin] = React.useState<{}>();
  const containerRef = React.useRef(null);

  React.useEffect(()=>{
    const node = containerRef?.current;
    if(!node) return;
    const smartphone = (node as HTMLImageElement);
    smartphone.onload  = () => {
      const xPoint = smartphone!.getClientRects()[0].x + smartphone!.getClientRects()[0].width / 2;
      const yPoint = smartphone!.getClientRects()[0].y + smartphone!.getClientRects()[0].height / 2;
      setTransformOrigin({ transformOrigin: `${xPoint}px ${yPoint}px` });
    };
  })

  const smartphoneStats: Stats = {
    tabs: [
      {
        title: "Treibhausgasemissionen",
        unit: "g CO2-Äquivalente",
        data: [
          {
            textureURL: FernVerkehrTexture,
            label: "Fernverkehr",
            value: 29,
            bgIsDark: true
          },
          {
            textureURL: TrainTexture,
            label: "Straßenbahn",
            value: 55,
            bgIsDark: true
          },
          {
            textureURL: BicycleTexture,
            label: "PKW",
            value: 143,
            bgIsDark: true
          },
          {
            textureURL: "meatTexture",
            label: "1KM Inland-Flug",
            value: 214,
            bgIsDark: false
          }
        ]
      }
    ]
  };

  return (
    <Plx style={transformOrigin} className={`absolute w-full h-full`} parallaxData={parallaxDataSmartphone}
         animateWhenNotInViewport={true}>
      <div className={`absolute ${styles.smartphonePath}`}>
        <img ref={containerRef} id="smartphoneImage" src={img} alt="smartphonePath"/>
        <img  id="imgApp" src={imgApp} alt="imgApp" className={`absolute ${styles.app}`} />
        <p className={`absolute ${styles.klimaboxAppLogo}`}>Klimabox</p>
        <Plx  className={` opacity-0 absolute ${styles.appSelection}`} parallaxData={parallaxDataSmartIcon} animateWhenNotInViewport={true}>
          <img  src={imgAppSelection} alt="imgAppSelection" />
        </Plx>

        <Plx  className={`opacity-0 absolute ${styles.appScreen}`} parallaxData={parallaxDataSmartIcon} animateWhenNotInViewport={true}>
          <img src={imgAppScreen} alt="imgAppScreen"/>
          <div className={`w-full h-full ${styles.topbar}`} >
            <p className={`absolute ${styles.time}`}>14:23</p>
            <p className={`absolute ${styles.batteryLife}`}>79%</p>
            <img src={imgBattery} alt="imgBattery" className={`absolute ${styles.battery}`}/>
            <div className={"absolute"}>
              <Statistics tabs={smartphoneStats.tabs} />
            </div>
          </div>
        </Plx>

      </div>

    </Plx>
  );
};