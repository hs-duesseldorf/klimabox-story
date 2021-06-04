import React from "react";

import { Background } from "./background";
import { Heading } from "./heading";
import { Sunrise } from "./sunrise";
import { Mountains } from "./mountains";
import { Text } from "./text";
import { Buildings } from "./buildings";

export const Start: React.FC = () => (
  <div className="text-white">
    <Background />
    <Sunrise />
    <div className="relative">
      <Heading />
      <div style={{ paddingTop: "45vh" }}>
        <Text />
      </div>
    </div>
    <Mountains />
    <div className="relative" style={{ paddingTop: "50vh" }}>
      <Buildings />
    </div>
  </div>
);
