import React, { useRef } from "react";

import { Background } from "./background";
import { Heading } from "./heading";
import { Sunrise } from "./sunrise";
import { Mountains } from "./mountains";
import { Text } from "./text";
import { Buildings } from "./buildings";
import { Fridge } from "./fridge";
import { BlackScreen } from "./blackScreen";
import mountainBackground from "./background/background.png";
import fridgeBackground from "./fridge/kapitel1_table_background-4.png";
import { useIntersection } from "use-intersection";

export const Start: React.FC = () => {
    const fridgeScene = useRef<HTMLDivElement>(null);
    const intersectingFridgeScene = useIntersection(fridgeScene);

    return (
      <div className="text-white relative">
        {intersectingFridgeScene ? <Background img={fridgeBackground} alt="mountains" /> :
          <Background img={mountainBackground} alt="mountains" />}
        {intersectingFridgeScene ? "" : <Sunrise />}
        <div className="relative">
          <Heading />
          <div style={{ paddingTop: "45vh" }}>
            <Text />
          </div>
        </div>
        {intersectingFridgeScene ? "" : <Mountains />}
        <div id="buildings" className="relative" style={{ paddingTop: "50vh" }}>
          <Buildings />
        </div>
        <div ref={fridgeScene}>
          <div className="relative" style={{ paddingTop: "100vh" }}><BlackScreen />
          </div>
          <div id="fridge" className="relative h-screen">
            <Fridge />
          </div>
        </div>
      </div>
    );
  }
;
