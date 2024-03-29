import React, { useEffect, useRef } from "react";

import { Background } from "./background";
import { Heading } from "./heading";
import { Sunrise } from "./sunrise";
import { Mountains } from "./mountains";
import { Text } from "./text";
import { Buildings } from "./buildings";
import { Fridge } from "./fridge";
import { BlackScreen } from "./blackScreen";
import mountainBackground from "./background/background.png";
import fridgeBackground from "./fridge/kapitel1_fridge_background.png";
import { useIntersection } from "use-intersection";

export const Start: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }

    useEffect(() => {
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }, []);

    let isMobile: boolean = (width <= 768);
    let isTablet: boolean = (width > 768 && width <= 1024);

    const mountainScene = useRef<HTMLDivElement>(null);
    const intersectingMountainScene = useIntersection(mountainScene);


    return (
      <div className="text-white relative">
        <div ref={mountainScene}>
          {intersectingMountainScene ? <Background img={mountainBackground} alt="mountains" /> :
            <Background img={fridgeBackground} alt="mountains" />}
          {intersectingMountainScene ? <Sunrise /> : ""}
          <div className="relative z-30">
            <Heading />
            <div style={{ paddingTop: "45vh" }}>
              <Text />
            </div>
          </div>
          {intersectingMountainScene ? <Mountains /> : ""}
          <div id="buildings" className="relative z-30" style={{ paddingTop: "50vh" }}>
            <Buildings />
          </div>
        </div>
        <div>
          <div className="relative z-30 hidden md:block"
               style={isMobile || isTablet ? { paddingTop: "-5vh" } : { paddingTop: "80vh" }}><BlackScreen />
          </div>
          <div className="relative z-30 md:hidden" style={{ paddingTop: "-5vh" }}><BlackScreen />
          </div>
          <div id="fridge" className="relative h-screen">
            <Fridge />
          </div>
        </div>
      </div>
    );
  }
;
