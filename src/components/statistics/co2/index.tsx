import { Statistics } from "..";

import meatTexture from "./meat.png";
import eggsTexture from "./eggs.png";
import broccoliTexture from "./broccoli.png";

export function CO2Statistics(): JSX.Element {
  return (
    <Statistics
      tabs={[
        {
          title: (
            <>
              CO<sub>2</sub>
            </>
          ),
          unit: (
            <>
              kg CO<sub>2</sub>
            </>
          ),
          data: [
            {
              textureURL: meatTexture,
              label: "1kg Rindfleisch",
              value: 120,
              bgIsDark: true,
            },
            {
              textureURL: eggsTexture,
              label: "1kg Eier",
              value: 60,
            },
            {
              textureURL: broccoliTexture,
              label: "1kg Soja",
              value: 30,
              bgIsDark: true,
            },
          ],
        },
      ]}
    />
  );
}
