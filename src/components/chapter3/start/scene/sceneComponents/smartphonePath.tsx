import React from "react";
import img from "../../asset/kapitel3_smartphonePath.png";
import imgApp from "../../asset/kapitel3_app.png";
import imgAppSelection from "../../asset/kapitel3_appSelection.png";
import imgAppScreen from "../../asset/kapitel3_appScreen.png";
import imgBattery from "../../asset/kapitel3_battery.png";
import imgLadekabel from "../../asset/kapitel3_ladekabel.png";
import imgTablet from "../../asset/kapitel3_TabletSelect.png"
import imgLaptop from "../../asset/kapitel3_notebookSelect.png";
import styles from "../../start.module.css";
import Plx from "react-plx";
import { Quiz } from "../../../../quiz";
import { QuizInterface } from "../../../../quiz/interface/quiz-interface";

const useDisplayElementsAtCertainHigh = (setter: React.Dispatch<React.SetStateAction<any>>, factor: number, factor2: number) => {
  React.useEffect(() => {
    const scrollHandle = () => {
      const clientHeight = document.documentElement.clientHeight;
      const scrollPosition = document.documentElement.scrollTop;
      setter(clientHeight * factor <= scrollPosition && scrollPosition <= clientHeight * factor2);
    };
    window.addEventListener("scroll", scrollHandle);
    return () => window.removeEventListener("scroll", scrollHandle);
  }, [setter, factor, factor2]);
};

export const SmartphonePath: React.FC<{
  parallaxDataSmartphone: [], parallaxDataSmartIcon: []
}> = ({
        parallaxDataSmartphone,
        parallaxDataSmartIcon
      }) => {
  const [showQuiz, setShowQuiz] = React.useState<boolean>(false);
  const [showText, setShowText] = React.useState<boolean>(false);
  const [showLoadingCable, setShowLoadingCable] = React.useState<boolean>(false);
  const [showLoadingCableText, setShowLoadingCableText] = React.useState<boolean>(false);
  const [showMoreInfo, setShowShowMoreInfo] = React.useState<boolean>(false);
  const [transformOrigin, setTransformOrigin] = React.useState<{}>();
  const containerRef = React.useRef(null);

  useDisplayElementsAtCertainHigh(setShowQuiz, 52, 54);
  useDisplayElementsAtCertainHigh(setShowText, 54.1, 56);
  useDisplayElementsAtCertainHigh(setShowLoadingCable, 56.1, 57);
  useDisplayElementsAtCertainHigh(setShowLoadingCableText, 57.1, 59);
  useDisplayElementsAtCertainHigh(setShowShowMoreInfo, 59.1, 60);

  React.useEffect(() => {
    const node = containerRef?.current;
    if (!node) return;
    const smartphone = (node as HTMLImageElement);
    smartphone.onload = () => {
      const xPoint = smartphone!.getClientRects()[0].x + smartphone!.getClientRects()[0].width / 2;
      const yPoint = smartphone!.getClientRects()[0].y + smartphone!.getClientRects()[0].height / 2;
      setTransformOrigin({ transformOrigin: `${xPoint}px ${yPoint}px` });
    };
  });

  const quiz: QuizInterface = {
    question: "Wie viele Smartphone-Nutzer gab es im Jahre 2020 in Deutschland?",
    answers: [
      {
        text: "60 Millionen",
        correctAnswer: true
      },
      {
        text: "50 Millionen",
        correctAnswer: false
      },
      {
        text: "40 Millionen",
        correctAnswer: false
      }
    ]
  };
  const text: string = "Es klingelt und vibriert. Für Viele von uns startet der Tag mit der Wecker-Funktion des" +
    "Smartphones. Und auch über den Tag hinaus, ist das Smartphone unser ständiger" +
    "Begleiter: Ob in der Bahn, im Wartezimmer, auf dem Sofa oder am Schreibtisch – es" +
    "wird gestreamt, gescrollt, gepostet und geswiped.\n\n" +
    "Ein Leben ohne Smartphone ist für Viele kaum noch denkbar. Lediglich 22 Prozent" +
    "legen während ihrer Freizeit das smarte Gerät länger als 60 Minuten aus der Hand," +
    "weil sie einfach in vielen Gegebenheiten nützlich sein können, unterhalten und" +
    "vernetzen. Doch wie smart sind sie eigentlich im Sinne der Nachhaltigkeit?\n\n" +
    "Die Materialien moderner Smartphones legen oft lange Wegstrecken zurück: Von" +
    "afrikanischen Minen über chinesische Fabriken bis zu europäischen Wohnzimmern" +
    "und der Zerlegung der Geräte in Afrika oder Asien. Und auch die Rohstoffe für die" +
    "Herstellung von Smartphones stammen oft aus Ländern mit niedrigen" +
    "Umweltstandards. Auch der Abbau geht mit schwerwiegenden Umweltfolgen einher -" +
    "bedeutet: Smartphones sind in der Regel also überhaupt nicht nachhaltig!\n\n" +
    "Ein Grund dafür ist, dass die meisten beim Kauf eines Smartphones hauptsächlich" +
    "Wert auf die Aktualität des Geräts, die Akkulaufzeit, ein robustes Display und den" +
    "Preis legen. Die Nachhaltigkeit als Kaufkriterium steht für Viele hinten an.\n\n" +
    "Weil die Nachhaltigkeit und der Schutz des Klimas aber immer mehr an Bedeutung" +
    "gewinnen, arbeiten Hersteller wie Apple oder Nokia an nachhaltigeren Modellen. Wer" +
    "aber wirklich Wert auf Nachhaltigkeit bei Smartphones legen möchte, sollte sich die" +
    "Fair- und Shiftphones genauer ansehen. Außerdem gilt: Das nachhaltigste Gerät ist" +
    "das, das nicht gekauft wird. Also verwendet eure Smartphones so lange wie möglich," +
    "behandelt es sorgsam oder gebt Gebrauchtgeräten eine Chance. Falls ihr dann doch" +
    "ein neues Smartphone braucht, entsorgt das Alte fachgerecht, kauft ein Smartphone," +
    "dessen Akku ihr selbst austauschen könnt und das eine geringe elektromagnetische" +
    "Strahlung (SAR-Wert kleiner 0,6 W/kg) hat.";
  const title = "Wie Smart ist dein Phone wirklich?";

  return (
    <Plx style={transformOrigin} className={`absolute w-full h-full`} parallaxData={parallaxDataSmartphone}
         animateWhenNotInViewport={true}>
      <div className={`absolute ${styles.smartphonePath}`}>
        <img ref={containerRef} id="smartphoneImage" src={img} alt="smartphonePath" />
        <img id="imgApp" src={imgApp} alt="imgApp" className={`absolute ${styles.app}`} />
        <p className={`absolute ${styles.klimaboxAppLogo}`}>Klimabox</p>
        <Plx className={` opacity-0 absolute ${styles.appSelection}`} parallaxData={parallaxDataSmartIcon}
             animateWhenNotInViewport={true}>
          <img src={imgAppSelection} alt="imgAppSelection" />
        </Plx>
      </div>

      <Plx className={`opacity-0 absolute w-full h-full ${styles.appScreen}`} parallaxData={parallaxDataSmartIcon}
           animateWhenNotInViewport={true}>
        <img src={imgAppScreen} alt="imgAppScreen" className={`absolute ${styles.appScreenBackground}`} />
        <div className={`w-full h-full absolute ${styles.topbar}`}>
          <p className={`absolute ${styles.time}`}>14:23</p>


          <img src={imgBattery} alt="imgBattery" className={`absolute ${styles.battery}`} />
          {showText || showLoadingCable ? <p className={`absolute ${styles.batteryLife}`}> 47% </p> :
            <p className={`absolute ${styles.batteryLife}`}> 79% </p>}

          <div className={`absolute ${styles.batteryLifeline}`}></div>
          <div
            className={`absolute ${showText || showLoadingCable ? styles.ladeBalkenGelb : styles.ladeBalkenGruen}`}></div>
        </div>

        <span className={`w-full h-full absolute ${styles.topbar}`}>
          {
            showQuiz ?
              (<div className={`absolute ${styles.quizContainer}`}>
                <Quiz quiz={quiz} />
              </div>) :
              showText ?
                (<div className={`absolute ${styles.smartphoneAppTextContainer}`}>
                  <p className={`${styles.smartphoneAppTextTitle}`}>{title}</p>
                  <div className={`${styles.smartphoneAppTextText}`}>
                    {text}
                  </div>
                </div>) :
                showLoadingCable ?
                  (<div className={`absolute w-full h-full`}>
                    <p className={`absolute ${styles.ladekabelText}`}>Akku knapp? Wie wäre es mit aufladen?</p>
                    <img src={imgLadekabel} alt="imgLadekabel" className={`absolute ${styles.ladekabel}`} />
                  </div>) :
                  showLoadingCableText ?
                    (<div className={`absolute ${styles.smartphoneAppTextContainer}`}>
                      <p className={`${styles.smartphoneAppTextTitle}`}>Probleme und Müll Verursachung durch
                        verschiedene Ladekabel</p>
                      <div className={`${styles.smartphoneAppTextText}`}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                        et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                      </div>
                    </div>) :
                    showMoreInfo ?
                        (<div className={`absolute w-full h-full`}>
                          <p className={`absolute ${styles.smartphoneRouteChoiceText}`}>Interesse an weiteren Informationen?</p>
                          <img src={imgTablet} alt="imgLaptop" className={`absolute ${styles.tabletChoiceSmartphoneRoute}`} />
                          <img src={imgLaptop} alt="imgLaptop" className={`absolute ${styles.notebookChoiceSmartphoneRoute}`} />
                        </div>)
                       :
                      (
                        <div className={`absolute w-full h-full`}>
                          <div className={`absolute ${styles.smartphoneEndScene}`}>

                          </div>
                          <p className={`absolute ${styles.messageServiceTopRight}`}>jetzt</p>
                          <p className={`absolute ${styles.messageServiceTopLeft}`}>Nachrichtendienst</p>
                          <p className={`absolute ${styles.messageServicePerson}`}>Musterfrau</p>
                          <p className={`absolute ${styles.messageServiceText}`}>Hey hast du Lust etwas früher Feierabend zu machen und mit mir einkaufen zu gehen?</p>

                          <p className={`absolute ${styles.smartphoneRouteChoiceText}`}>Interesse an weiteren Informationen?</p>
                          <img src={imgTablet} alt="imgTablet" className={`absolute ${styles.tabletChoiceSmartphoneRoute}`} />
                          <img src={imgLaptop} alt="imgLaptop" className={`absolute ${styles.notebookChoiceSmartphoneRoute}`} />
                        </div>

                      )
          }
          </span>


      </Plx>

    </Plx>
  );
};