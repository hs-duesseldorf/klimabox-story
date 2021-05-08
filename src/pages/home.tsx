import React, { useEffect } from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { BackgroundProps, BackgroundStyle } from "./interfaces/background";

export const Home: React.FC<BackgroundProps> = ({backgroundFunction}) => {

  const backgroundStyle: BackgroundStyle = {
    backgroundImage: "",
    height: "120%",
    Zindex: "-1",
    backgroundPosition: "100% 80%",
    backgroundClip: "padding-box",
  };

  useEffect(()=> backgroundFunction(backgroundStyle),[]);

  return (
    <Layout>
      <SEO />
      <div className="center-box mt-24 text-4xl">
        <p>Willommen in der Klimabox.</p>
      </div>
    </Layout>
  );
}

