import React, { useEffect } from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

import { PostList } from "../components/post-list";
import { BackgroundProps, BackgroundStyle } from "./interfaces/background";


export const Blog: React.FC<BackgroundProps> = ({backgroundFunction }) => {

  const backgroundStyle: BackgroundStyle = {
    backgroundImage: "",
    height: "120%",
    Zindex: "-1",
    backgroundPosition: "100% 80%",
    backgroundClip: "padding-box",
  };
  useEffect(() => backgroundFunction(backgroundStyle),[]);

  return(
    <Layout >
      <SEO title="Blog" />
      <div className="center-box mt-24 2xl:max-w-layout-max">
        <PostList />
      </div>
    </Layout>
  );
}
