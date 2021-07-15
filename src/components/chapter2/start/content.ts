import { Sequence } from "./interface/Chapter2Enum";
import { Stats } from "./interface/interface";

import BicycleTexture from "./asset/BicycleTexture.png";
import CarTexture from "./asset/CarTexture.png";
import TrainTexture from "./asset/TrainTexture.png";

export const getContentData = (sequence: Sequence) => {
  switch (sequence) {
    default:
    case Sequence.Intro:
      return {
        introTextData: {
          title: "Titel von Einführungstext",
          text:
            " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. \n" +
            "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n" +
            "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",

          titleStyle: {
            fontSize: "20px",
            fontWeight: "bold",
            fontColor: "black",
          },
          textStyle: {
            wordWrap: "break-word",
            fontSize: "16px",
            fontColor: "black",
          },
          containerStyle: {},
        },
      };
    case Sequence.Car:
      return {
        introTextData: {
          title: "Du fährst häufig mit dem Auto? - Damit bist du nicht allein!",
          text:
            "Denn auch heute noch dominiert das Auto als Verkehrsmittel den deutschen Straßenverkehr. Die PKW-Dichte steigt jährlich weiter an, obwohl die öffentlichen Debatten um Klimaschutz und Verkehrswende täglich präsenter werden und der durchschnittliche PKW gerade mal eine Stunde pro Tag bewegt wird. \n \n" +
            "Es werden also immer noch zu viele Kurzstrecken in Deutschland mit dem Auto zurückgelegt - in einer Zahl ausgedrückt: Etwa 45%. Aber woran liegt das? \n" +
            "Die Antwort ist ganz einfach: Die deutsche Verkehrsinfrastruktur ist auf das Autofahren ausgelegt: Fahrradwege sind zu gering ausgebaut oder nicht gut befahrbar, es gibt nicht genügend Fahrradstellplätze und häufig ist bei Kurzstrecken die Anreise mit dem Auto günstiger als das ÖPNV-Ticket. \n \n" +
            "Damit wir uns bei der nächsten Gelegenheit also auf das Fahrrad schwingen oder das nächste U-Bahn-Ticket lösen, muss sich also nicht nur unsere Einstellung, sondern auch die Verkehrsinfrastruktur ändern! Aber was muss dafür passieren?\n \n" +
            "Deutschland investiert viel in den Bau neuer Straßen, aber diese erhöhen nicht die Mobilität, sondern nur den Verkehr. Es sollten also lieber vermehrt Alternativen zu Straßen geschaffen werden, wie beispielsweise Radschnellwege. Sie würden von einer Vielzahl an Fahrradfahrer:innen genutzt werden und ein vergleichbar schnelles Fahren von A nach B ermöglichen. Genauso könnte der Schienenverkehr, durch modernisierte Verkehrsmittel und vermehrte Abfahrtszeiten, attraktiver gestaltet werden und so die Kfz-Hauptrouten entlasten. \n \n" +
            "Aber nicht nur die Infrastruktur sollte sich ändern. Den größten Teil tragen natürlich wir selbst dem Klimaschutz bei. Ein großes Problem bei der Automobilität ist nämlich auch, dass durchschnittlich nur eine Person im Auto sitzt.  Hier kannst du selber etwas ändern: Bilde Fahrgemeinschaften mit deinen Arbeitskollegen oder nutze Angebote wie das Car-Sharing, um die Kfz-Routen zu entlasten!",

          titleStyle: {
            fontSize: "20px",
            fontWeight: "bold",
            color: "black",
          },
          textStyle: {
            wordWrap: "break-word",
            fontSize: "10px",
            color: "black",
            whiteSpace: "pre-wrap",
            height: "18rem",
            overflowY: "auto",
          },
          containerStyle: {
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          },
        },
      };
    case Sequence.Bicycle:
      return {
        introTextData: {
          title: "Fahr-flixt gute Entscheidung!",
          text:
            "Von einem Bild wie in den Niederlanden, wo die Fahrradwege teilweise so breit sind wie die Straßen und wo sich das Fahrrad längst von einem bloßen Fortbewegungsmittel zu einem festen Bestandteil des alltäglichen Lebens entwickelt hat, sind wir in Deutschland noch ein bisschen entfernt. Aber auch hierzulande gewinnt der “Drahtesel” immer weiter an Beliebtheit ... und das aus gutem Grund! \n \n" +
            "Fahrrad fahren produziert im Gegensatz zum Auto keine klimaschädlichen Gase, ist gesundheitsfördernd, platzsparend, geräuscharm und günstig. Besonders auf kurzen Strecken von weniger als 10 km lohnt es sich weder ökologisch noch ökonomisch, das Auto zu nehmen, statt mit dem Fahrrad zu fahren. Mittelgroße Einkäufe lassen sich ganz einfach mit Fahrradkorb oder Lastenrad transportieren. Staus in Städten zur Rush-Hour könnten verhindert werden, indem innerstädtische Arbeitswege ohne Auto zurückgelegt werden. Außerdem benötigen Fahrradwege und Parkplätze deutlich weniger Platz, was der weiteren Versiegelung von Bodenflächen entgegenwirkt und damit der Natur und dem Klima etwas Gutes tut. \n \n" +
            "Wenn die Deutschen im Durchschnitt statt rund 300 km so wie die Niederländer rund 1.000 km im Jahr mit dem Fahrrad fahren, könnten wir bis zu 10 Millionen Tonnen CO2 einsparen. Das ist unfassbar viel, wenn man bedenkt, dass wir alle lediglich zwei Kilometer mehr am Tag mit dem Fahrrad statt mit dem Auto zurücklegen müssten, um dieses Ziel zu erreichen!  \n \n" +
            "Doch um das Fahrradfahren für mehr Menschen attraktiv zu machen, muss noch viel passieren. Nur rund 40% der Deutschen geben an, regelmäßig mit dem Fahrrad zu fahren. Ein möglicher Grund dafür ist vor allem die immer noch zu geringe Zahl an Fahrradwegen und Fahrradstellplätzen. An diesen und weiteren Punkten muss weitergearbeitet werden, um den Radverkehr in Zukunft weiter zu fördern.",
          titleStyle: {
            fontSize: "20px",
            fontWeight: "bold",
            color: "black",
          },
          textStyle: {
            wordWrap: "break-word",
            fontSize: "10px",
            color: "black",
            whiteSpace: "pre-wrap",
            height: "18rem",
            overflowY: "auto",
          },
          containerStyle: {
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          },
        },
      };
  }
};


export const getStatsData = (sequence: Sequence) => {
  const bicycle: Stats = {
    tabs: [{
      title: "3KM",
      unit: "Minuten",
      data: [
        {
          textureURL: TrainTexture,
          label: "Bus / Bahn",
          value: 24,
          bgIsDark: true,
        },
        {
          textureURL: CarTexture,
          label: "PKW",
          value: 20,
          bgIsDark: true,
        },
        {
          textureURL: BicycleTexture,
          label: "Fahrrad",
          value: 12,
          bgIsDark: true,
        },
        {
          textureURL: "meatTexture",
          label: "3Km zu Fuß",
          value: 45,
          bgIsDark: false,
        },
      ]
    }]
  }

  switch(sequence){
    case Sequence.Car: return bicycle;
    case Sequence.Bicycle : return bicycle;
    default: return bicycle;
  }
}