import React, { useEffect } from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { BackgroundProps, BackgroundStyle } from "./interfaces/background";

export const Stories: React.FC<BackgroundProps> = ({ backgroundFunction }) => {

  const backgroundStyle: BackgroundStyle = {
    backgroundImage: "url(assets/home/home_header_uncropped.png)",
    height: "120%",
    Zindex: "-1",
    backgroundPosition: "100% 80%",
    backgroundClip: "padding-box",
  };

  const animation = `
  @keyframes animate {
    0%{
        opacity: 0;
        transform: rotate(45deg) translate(-20px,-20px);
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: rotate(45deg) translate(20px,20px);
    };
  }`;

  useEffect(() => backgroundFunction(backgroundStyle), []);

  return (
    <Layout >
      <SEO title="Story" />
      <div className="center-box mt-24 text-4xl">
        <div className="flex flex-col absolute" style={{ top: "15vh", left: "10vw", width: "38vw" }}>
          <h1 className="text-white ml-0" style={{ textShadow: "4px 6px 3px rgba(31, 31, 31, 0.616)" }}>Sieh, wie die Klimakrise unsere Welt verändert. <br />
                  Und was wir dagegen
                  tun können.</h1>
          <div className="relative">
            <span className="block w-5 h-5 m-px"
              style={{
                borderBottom: "5px solid white",
                borderRight: "5px solid white",
                borderRadius: "0.2vw",
                transform: "rotate(45deg)",
                animation: "animate 2s infinite",
                animationDelay: "-0.2s"
              }} />
            <span className="block w-5 h-5 m-px"
              style={{
                borderBottom: "5px solid white",
                borderRight: "5px solid white",
                borderRadius: "0.2vw",
                transform: "rotate(45deg)",
                animation: "animate 2s infinite",
                animationDelay: "-0.2s"
              }} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
