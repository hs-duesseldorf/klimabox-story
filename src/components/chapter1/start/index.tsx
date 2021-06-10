import React from "react";

import { Background } from "./background";
import { Heading } from "./heading";
import { Sunrise } from "./sunrise";
import { Mountains } from "./mountains";
import { Text } from "./text";
import { Buildings } from "./buildings";
import { Fridge } from "./fridge";

export const Start: React.FC = () => (
  <div className="text-white relative">
    <Background />
    <Sunrise />
    <div className="relative">
      <Heading />
      <div style={{ paddingTop: "45vh" }}>
        <Text />
      </div>
    </div>
    <Mountains />
    <div id="buildings" className="relative" style={{ paddingTop: "50vh" }}>
      <Buildings />
      <Fridge/>
    </div>
  </div>
);
