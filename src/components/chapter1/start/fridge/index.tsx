import React, { useCallback, useEffect, useRef } from "react";
import Plx from "react-plx";
import AnchorLink from "react-anchor-link-smooth-scroll";
import imageURL1 from "./kapitel1_table_meat.png";
import imageURL2 from "./kapitel1_table_avocado.png";
import imageURL3 from "./kapitel1_table_milk.png";
import { CO2Statistics } from "../../../statistics/co2";
import styles from "../start.module.css";

export const Fridge: React.FC = () => {
    const [text, setText] = React.useState("Wähle aus, was du am liebsten isst");
    const [factTitle, setFactTitle] = React.useState("46 Schweine");
    const [fact, setFact] = React.useState("isst ein Mensch");
    const [itemSelected, setItemSelected] = React.useState(false);
    const [visualization, setVisualization] = React.useState("bg-massvisualize-pig-pattern");
    const [paragraph1, setParagraph1] = React.useState("Zum Frühstück ein Brötchen mit Wurst, am Mittag ein leckeres Kotelett und abends eine Stulle mit Schinken - wir Deutschen essen viel und gerne Fleisch. Wir möchten euch hier nicht über die Auswirkungen von Fleisch-Konsum auf die Gesundheit oder die Behandlung der Tiere sprechen - da wissen wir alle Bescheid. Aber du solltest vielleicht wissen, was du für unser Klima tun kannst, ohne komplett auf Fleisch zu verzichten: Wenn du nicht ganz auf Fleisch verzichten möchtest, kannst du vielleicht regelmäßig einen fleischfreien Tag einlegen oder deinen Fleischkonsum auf die Hälfte reduzieren. Denn so kannst du eine Menge Treibhausgase und Wasser einsparen.  ");
    const [paragraph2, setParagraph2] = React.useState("Wenn du Fleisch essen möchtest, solltest du am besten Huhn oder Schwein essen, denn diese wandeln ihr Futter besser in Fleisch um. Also wie viel Fleisch sich aus wie viel Futter produzieren lässt. Außerdem stoßen Schweine von den Wiederkäuern am wenigsten Methan aus. Dadurch fallen weniger Emissionen an, denn Methan ist 25-mal schädlicher als CO2. Am besten kaufst du Bio-Fleisch, denn die Produktion von Ökoschweinefleisch verbraucht 40 % weniger Treibhausgase als die konventionelle. Bedenke trotzdem, dass auch für deine fleischhaltige Ernährungsweise, egal ob bio oder konventionell, deutlich mehr Landfläche und Wasser benötigt wird als bei der vegetarischen oder veganen. Ein Kilogramm Rind braucht bis zu 15.000 Liter Wasser, 1 Kilogramm Avocados brauchen nur etwa 1000 - 2000 Liter Wasser. Fazit: Eine fleischhaltige Ernährung macht aus dir keinen schlechteren Menschen. Jedoch kann man mit kleinen Anpassungen viel gegen den Klimawandeln machen. Damit wir und die nächsten Generationen weiterhin ein schönes und angenehmes Leben auf diesen Planeten haben können. ");
    const [width, setWidth] = React.useState(window.innerWidth);
    const [y, setY] = React.useState(window.scrollY);
    const [scrollUp, setScrollUp] = React.useState(false);

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


    const handleNavigation = useCallback(
      e => {
        const window = e.currentTarget;
        if (y > window.scrollY) {
          setScrollUp(true);
        } else if (y < window.scrollY) {
          setScrollUp(false);
        }
        setY(window.scrollY);
      }, [y]
    );

    useEffect(() => {
      setY(window.scrollY);
      window.addEventListener("scroll", handleNavigation);

      return () => {
        window.removeEventListener("scroll", handleNavigation);
      };
    }, [handleNavigation]);

    const meatContainer = useRef(null);
    const avocadoContainer = useRef(null);
    const milkContainer = useRef(null);

    const parallaxData1 = [
      {
        start: 2350,
        end: 2500,
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
        start: 2500,
        end: 2800,
        easing: "easeIn",
        properties: [
          {
            startValue: 0.90,
            endValue: 1,
            property: "opacity"
          },
          {
            startValue: 1,
            endValue: 1.2,
            property: "scale"
          }
        ]
      },
      {
        start: 3500,
        end: 3800,
        easing: "easeIn",
        properties: [
          {
            startValue: 1,
            endValue: 1.1,
            property: "scale"
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
          setFactTitle("46 Schweine");
          setFact("isst ein Mensch");
          setVisualization("bg-massvisualize-pig-pattern ");
          setParagraph1("Zum Frühstück ein Brötchen mit Wurst, am Mittag ein leckeres Kotelett und abends eine Stulle mit Schinken - wir Deutschen essen viel und gerne Fleisch. Wir möchten euch hier nicht über die Auswirkungen von Fleisch-Konsum auf die Gesundheit oder die Behandlung der Tiere sprechen - da wissen wir alle Bescheid. Aber du solltest vielleicht wissen, was du für unser Klima tun kannst, ohne komplett auf Fleisch zu verzichten:  Wenn du nicht ganz auf Fleisch verzichten möchtest, kannst du vielleicht regelmäßig einen fleischfreien Tag einlegen oder deinen Fleischkonsum auf die Hälfte reduzieren. Denn so kannst du eine Menge Treibhausgase und Wasser einsparen. ");
          setParagraph2("Wenn du Fleisch essen möchtest, solltest du am besten Huhn oder Schwein essen, denn diese wandeln ihr Futter besser in Fleisch um. Also wie viel Fleisch sich aus wie viel Futter produzieren lässt. Außerdem stoßen Schweine von den Wiederkäuern am wenigsten Methan aus. Dadurch fallen weniger Emissionen an, denn Methan ist 25-mal schädlicher als CO2. Am besten kaufst du Bio-Fleisch, denn die Produktion von Ökoschweinefleisch verbraucht 40 % weniger Treibhausgase als die konventionelle. Bedenke trotzdem, dass auch für deine fleischhaltige Ernährungsweise, egal ob bio oder konventionell, deutlich mehr Landfläche und Wasser benötigt wird als bei der vegetarischen oder veganen. Ein Kilogramm Rind braucht bis zu 15.000 Liter Wasser, 1 Kilogramm Avocados brauchen nur etwa 1000 - 2000 Liter Wasser.  Fazit: Eine fleischhaltige Ernährung macht aus dir keinen schlechteren Menschen. Jedoch kann man mit kleinen Anpassungen viel gegen den Klimawandeln machen. Damit wir und die nächsten Generationen weiterhin ein schönes und angenehmes Leben auf diesen Planeten haben können. ");
          break;
        case "avocado":
          // @ts-ignore
          meatContainer.current.style.display = "none";
          // @ts-ignore
          milkContainer.current.style.display = "none";
          setText("Avocado");
          setFactTitle("200 Avocados");
          setFact("isst ein Mensch");
          setVisualization("bg-massvisualize-avocado-pattern  bg-cover");
          setParagraph1("Mit dieser Ernährungsform bist du nicht allein. Schätzungen zufolge teilen über 1 Millionen Menschen in Deutschland deine vegane Essgewohnheit und wahrscheinlich werden es in Zukunft noch mehr werden. Hoffentlich! Denn das wäre nicht durch gut für die Gesundheit und für die Nutztiere, sondern auch für die Umwelt. Die vegane Ernährung verursacht nur ein Drittel an Emissionen, die bei einer omnivoren Ernährung anfallen. Wenn die Welt vegan leben würde, würden bis zu 70 % der weltweit ernährungsbedingten Emissionen reduziert werden. Ein weiteres globales Problem, das durch die Ernährungsform eliminiert wird, ist der Gebrauch von Antibiotika an Tieren. Außerdem wird für den veganen Lebensstil deutlich weniger Fläche und Wasser verbraucht, sodass mehr Menschen ernährt werden könnten und Wasser gespart werden könnte.  ");
          setParagraph2("Jedoch muss gesagt werden, dass es bei einer veganen Ernährung zusätzlich viele Einsparungsmöglichkeiten gibt. So benötigt ein Kilogramm Avocado zwischen 1000 – 2000 Liter und Nüsse sogar bis zu 5000 Liter Wasser. Entsprechend dazu benötigen Tomaten nur 120 Liter und Äpfel 700 Liter Wasser. Auch sollte man am besten auf kurze Transportwege und Regionalität achten. Nichtsdestotrotz hast du durch deine Ernährungsform einen großen positiven Einfluss auf unser Klima. Denn diese ist für die Umwelt die beste Ernährungsform. ");
          break;
        case "milk":
          // @ts-ignore
          avocadoContainer.current.style.display = "none";
          // @ts-ignore
          meatContainer.current.style.display = "none";
          setText("Milch & Milchprodukte");
          setFactTitle("500l Milch");
          setFact("trinkt ein Mensch");
          setVisualization("bg-massvisualize-milk-pattern  bg-cover");
          setParagraph1("Ja, ein Verzicht auf Käse, weitere Milchprodukte und Spiegelei am Morgen ist schwer und mit einem Verzicht auf Fleisch und Fisch bewirkt man schon eine Menge positives für unsere Umwelt. Laut einer Berechnung von Statistika sparst du ungefähr 26 % an Emissionen im Vergleich zu Fleischessern. Da die Landwirtschaft weltweit für 18 % der Treibhausemissionen verantwortlich ist, hat das einen immensen Einfluss auf das Klima. Dank dir verringern sich die Bestände an Nutztieren und somit auch an Tierleid. Zudem benötigt diese Art der Ernährung ungefähr 5-mal weniger Fläche im Vergleich zu der omnivoren Lebensweise. Das alles ist super! Allerdings kannst du noch mehr Fläche und Wasser sparen, wenn du dich vegan ernährst oder dich der veganen Ernährung ein bisschen weiter annäherst! Wenn du dich nicht vegan ernähren möchtest, aber hinsichtlich Umwelt deine Ernährung optimieren möchtest, könntest du vielleicht die Kuhmilch durch eine Milchalternative ersetzen. Denn Milchalternativen sind zum größten Teil umweltschonender. Sie benötigen oft weniger Wasser (außer Mandel- und Reisdrink), Landfläche, Emissionen und haben eine geringere Gewässerbelastung. Wir würden dir Hafer- oder Sojadrink empfehlen. Denn diese beiden Alternativen sind am umweltschonendsten. Und nein, dein Sojadrink zerstört nicht den Regenwald. Denn das Soja, welches dort angebaut wird, wird fast ausschließlich für die Futterproduktion von Nutztieren verwendet. Wenn ihr aber auf Nummer sichergehen wollt, achtet darauf, dass die Sojabohnen in Europa produziert wurden. ");
          setParagraph2("Fazit: Dank dir und deiner Ernährungsweise wird eine Menge CO2 eingespart und die Umwelt weniger belastet. Und das sind doch positive Nachrichten. ");
          break;
        default:
          console.log("no item selected");
          break;
      }
    };


    const resetFridgeItems = () => {
      setItemSelected(false);
      // @ts-ignore
      avocadoContainer.current.style.display = "block";
      // @ts-ignore
      milkContainer.current.style.display = "block";
      // @ts-ignore
      meatContainer.current.style.display = "block";
      setText("Wähle aus, was du am liebsten isst");
    };

    return (
      <>{scrollUp ? "" :
        <Plx parallaxData={parallaxData1} className="absolute bottom-0 opacity-0 z-0 h-screen w-screen"
             id="fridge-items">
          <div className="fixed cursor-pointer" onClick={() => onClickFridgeItem("meat")}
               style={isMobile || isTablet ? { top: "47%", left: "1%" } : { top: "44%", left: "15%" }} id="meat"
               ref={meatContainer}>
            <img src={imageURL1} alt="Meat" className="w-44 lg:w-80 select-none" />
          </div>
          <div className="fixed cursor-pointer" onClick={() => onClickFridgeItem("avocado")}
               style={isMobile || isTablet ? { top: "44%", left: "37%" } : { top: "42%", left: "38%" }} id="avocado"
               ref={avocadoContainer}>
            <img src={imageURL2} alt="Avocado" className="w-32 lg:w-56 select-none" />
          </div>
          <div className="fixed cursor-pointer" onClick={() => onClickFridgeItem("milk")}
               style={isMobile || isTablet ? { top: "32%", left: "75%" } : { top: "24%", left: "62%" }} id="milk"
               ref={milkContainer}>
            <img src={imageURL3} alt="Milk" className="w-20 lg:w-40 select-none" />
          </div>
          <div className="fixed text-xl xs:text-2xl sm:text-3xl md:text-4xl text-white font-bold max-w-sm"
               style={{ top: "20%", left: "25%" }}>{text}
          </div>
        </Plx>}
        {
          itemSelected ?
            <div className="h-screen w-full">
              <Plx parallaxData={parallaxData2} className={`absolute ${styles.height}`}
                   style={{ top: "150vh" }}>
                <div
                  className={`flex justify-center items-center w-screen overflow-x-hidden ${visualization} -mt-6 font-bold ${styles.height}`}>
                  <div
                    className="flex flex-col justify-center items-center backdrop-filter backdrop-blur-lg rounded-lg w-80 h-60 lg:w-auto lg:h-auto">
                    <div className="text-2xl xs:text-3xl sm:text-6xl my-6 lg:my-12 lg:mx-40">{factTitle}</div>
                    <div className="text-xl xs:text-2xl sm:text-4xl">{fact}</div>
                    <div className="text-xl xs:text-2xl sm:text-4xl mb-12">in seinem Leben</div>
                  </div>
                </div>
              </Plx>
              <Plx className="absolute"
                   style={isMobile ? { top: "420vh" } : {top: "320vh"}}>
                <div
                  className="flex flex-col justify-center items-center w-screen h-auto md:h-screen text-white mb-20">
                  <div className="w-4/5 md:w-1/2 p-2 backdrop-filter backdrop-blur-lg">
                    <div className="mb-6 xs:text-xl sm:text-2xl">{paragraph1}
                    </div>
                    <div className="xs:text-xl sm:text-2xl ">{paragraph2}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center w-screen h-screen text-black"><h2
                  className="w-4/5 md:w-1/2 text-xl xs:text-3xl sm:text-4xl font-bold mb-20 text-white">Ökobilanz-Vergleich</h2>
                  <div className="w-4/5 md:w-1/2 mb-6"><CO2Statistics />
                  </div>
                  <div
                    className="cursor-pointer w-4/5 md:w-1/2 text-xl xs:text-3xl sm:text-4xl font-bold text-white hover:underline"
                    onClick={resetFridgeItems}><AnchorLink offset="-100"
                                                           href="#fridge-items">Ein anderes Lebensmittel
                    auswählen</AnchorLink>
                  </div>
                  <div className="h-28" />
                </div>
              </Plx>
            </div>

            : ""
        }
      </>
    );
  }
;
