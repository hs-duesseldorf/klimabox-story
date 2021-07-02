import React, { useRef } from "react";


import imageURL1 from "./kapitel1_table_meat.png";
import imageURL2 from "./kapitel1_table_avocado.png";
import imageURL3 from "./kapitel1_table_milk.png";

import Plx from "react-plx";

export const Fridge: React.FC = () => {
    const [text, setText] = React.useState("Wähle aus, was du am liebsten isst");
    const [factTitle, setFactTitle] = React.useState("46 Schweine");
    const [fact, setFact] = React.useState("isst ein Mensch");
    const [itemSelected, setItemSelected] = React.useState(false);

    const meatContainer = useRef(null);
    const avocadoContainer = useRef(null);
    const milkContainer = useRef(null);

    const parallaxData1 = [
      {
        start: 2950,
        end: 3000,
        easing: "easeIn",
        properties: [
          {
            startValue: 0.90,
            endValue: 1,
            property: "opacity"
          }
        ]
      }
    ];

    const parallaxData2 = [
      {
        start: 3000,
        end: 3300,
        easing: "easeIn",
        properties: [
          {
            startValue: 0.90,
            endValue: 1,
            property: "opacity"
          }
        ]
      }
    ];

    const onClickFridgeItem = (item: string) => {
      setItemSelected(true);

      switch (item) {
        case "meat":
          // @ts-ignore
          avocadoContainer.current.style.display = "none";
          // @ts-ignore
          milkContainer.current.style.display = "none";
          setText("Fleisch & Wurst");
          break;
        case "avocado":
          // @ts-ignore
          meatContainer.current.style.display = "none";
          // @ts-ignore
          milkContainer.current.style.display = "none";
          setText("Avocado");
          setFactTitle("200 Avocados");
          break;
        case "milk":
          // @ts-ignore
          avocadoContainer.current.style.display = "none";
          // @ts-ignore
          meatContainer.current.style.display = "none";
          setText("Milch & Milchprodukte");
          setFactTitle("500l Milch");
          setFact("trinkt ein Mensch");
          break;
        default:
          console.log("no item selected");
          break;
      }
    };

    return (
      <>

        <Plx parallaxData={parallaxData1} className="absolute bottom-0 opacity-0 z-30 h-screen w-screen">
          <div className="absolute cursor-pointer" onClick={() => onClickFridgeItem("meat")}
               style={{ top: "91%", left: "19%" }} id="meat" ref={meatContainer}><img src={imageURL1} alt="Meat"
                                                                                      className="w-48 select-none" />
          </div>
          <div className="absolute cursor-pointer" onClick={() => onClickFridgeItem("avocado")}
               style={{ top: "88%", left: "30%" }} id="avocado" ref={avocadoContainer}><img src={imageURL2}
                                                                                            alt="Avocado"
                                                                                            className="w-36 select-none" />
          </div>
          <div className="absolute cursor-pointer" onClick={() => onClickFridgeItem("milk")}
               style={{ top: "80%", left: "41%" }} id="milk" ref={milkContainer}><img src={imageURL3} alt="Milk"
                                                                                      className="w-20 select-none" />
          </div>
          <div className="absolute text-xl xs:text-2xl sm:text-3xl text-black font-bold max-w-sm"
               style={{ top: "78%", left: "20%" }}>{text}
          </div>
        </Plx>

        {
          itemSelected ?
            <div className="h-screen">
              <Plx parallaxData={parallaxData2} className="absolute bg-gradient-to-b from-pink to-yellow-800 h-auto"
                   style={{ top: "150vh" }}>
                <div
                  className="flex justify-center items-end w-screen h-screen bg-massvisualize-pig-pattern -mt-6 font-bold">
                  <div
                    className="flex flex-col justify-center items-center bg-gradient-to-b from-pink to-yellow-800 rounded-lg">
                    <div className="text-3xl xs:text-5xl sm:text-6xl my-12 mx-40">{factTitle}</div>
                    <div className="text-xl xs:text-2xl sm:text-4xl">{fact}</div>
                    <div className="text-xl xs:text-2xl sm:text-4xl mb-12">in seinem Leben</div>
                  </div>
                </div>
                <div className="w-screen h-screen bg-massvisualize-pig-pattern -mt-6" />
              </Plx>
              <Plx className="absolute"
                   style={{ top: "340vh" }}>
                <div className="flex flex-col justify-center items-center w-screen h-screen text-black"><h2
                  className="w-1/2 text-xl xs:text-3xl sm:text-4xl font-bold mb-20">{text}</h2>
                  <div className="w-1/2 mb-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua.

                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                    eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                    est Lorem ipsum dolor sit amet.
                  </div>
                  <div className="w-1/2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua.
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center w-screen h-screen text-black"><h2
                  className="w-1/2 text-xl xs:text-3xl sm:text-4xl font-bold mb-20">Ökobilanz-Vergleich</h2>
                  <div className="w-1/2 mb-6">Grafik
                  </div>
                </div>
              </Plx>

            </div>
            : ""
        }
      </>
    );
  }
;
;
;

