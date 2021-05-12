import React from "react";

import { ScrollAnimation } from "../../scroll-animation";

import { Background } from "./background";
import { Heading } from "./heading";
import { Sunrise } from "./sunrise";
import { Mountains } from "./mountains";
import { Text } from "./text";
import { Buildings } from "./buildings";
import { Fade } from "./fade";

export const Start: React.FC = () => (
  <ScrollAnimation>
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
      <Fade />
    </div>
  </ScrollAnimation>
);
